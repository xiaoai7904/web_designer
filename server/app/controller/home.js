'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const unzip = require('unzipper');
const request = require('request');
const shelljs = require('shelljs');

const FILENAME = 'vue_cli_3.x'; // 文件名
const SUFFIX = '.zip'; // 下载文件后缀
const DOWNLOADURL = 'https://github.com/xiaoai7904/vue_cli_3.x/archive/master.zip'; // 下载模版地址
const RUNTIMEPATH = 'runtime/vue_cli_3.x-master/'; // 运行态根路径

/**
 * 发布接口
 * 提供生成页面模版代码(基于vue cli 3.x)
 */
class ReleaseController extends Controller {
  async api$test() {
    this.ctx.body = { msg: 'success', code: 0 };
    this.ctx.status = 200;
  }
  async api$release() {
    const { ctx } = this;

    ctx.logger.info('开始生成模版包');
    // 模版文件夹地址
    this.dirPath = path.join(path.resolve('../'), 'runtime');
    this.runtimePath = this.createFileDir();

    await this.downloadFile();

    const result = await this.generateCode2File();

    ctx.body = result.body;
    ctx.status = result.status;
  }
  /**
   * 创建文件夹
   */
  createFileDir() {
    const { ctx } = this;
    if (!fs.existsSync(this.dirPath)) {
      fs.mkdirSync(this.dirPath);
      ctx.logger.info('运行器目录文件夹创建成功');
      return false;
    }

    const delFileDir = (dir) => {
      let files = fs.readdirSync(dir);
      for (var i = 0; i < files.length; i++) {
        let newPath = path.join(dir, files[i]);
        let stat = fs.statSync(newPath);
        if (stat.isDirectory()) {
          //如果是文件夹就递归下去
          delFileDir(newPath);
        } else {
          //删除文件
          fs.unlinkSync(newPath);
        }
      }
      fs.rmdirSync(dir);
    };

    delFileDir(this.dirPath);
    ctx.logger.info('老运行器目录文件夹删除成功');
    this.createFileDir();
  }
  /**
   * 下载项目模版
   */
  downloadFile() {
    const { ctx } = this;

    return new Promise((resolve, reject) => {
      let stream = fs.createWriteStream(path.join(this.dirPath, FILENAME + SUFFIX));

      request(DOWNLOADURL)
        .pipe(stream)
        .on('close', (err) => {
          if (err) {
            ctx.logger.error('运行器模版文件下载失败' + err);
          } else {
            ctx.logger.info('运行器模版文件[' + FILENAME + SUFFIX + ']下载完毕');
            this.unzipFile().then(
              () => {
                resolve();
              },
              () => {
                reject();
              }
            );
          }
        });
    });
  }

  /**
   * 解压文件
   */
  unzipFile() {
    const { ctx } = this;

    return new Promise((resolve, reject) => {
      fs.createReadStream(path.join(this.dirPath, FILENAME + SUFFIX))
        .pipe(unzip.Extract({ path: this.dirPath }))
        .on('close', (err) => {
          if (err) {
            ctx.logger.error('运行器文件解压失败' + err);
            reject();
          } else {
            ctx.logger.info('运行器文件解压完成');
            fs.unlinkSync(path.join(this.dirPath, FILENAME + SUFFIX));
            resolve();
          }
        });
    });
  }

  /**
   * 生成代码和对应文件
   */
  async generateCode2File() {
    const { ctx } = this;

    let errors;
    if ((errors = this.validateParams())) return errors;

    const requestBody = ctx.request.body;
    const requestParams = JSON.parse(requestBody.page);

    await this.cpoyPluginsPackage(requestParams);
    let result = await this.writeCode(requestParams);
    this.runProject(requestBody);
    return result;
  }

  /**
   * 根据请求参数plugin中使用到的组件重从设计态文件夹plugin拷贝到运行态
   * @param {object} requestParams 请求参数
   */
  cpoyPluginsPackage(requestParams) {
    return new Promise((resolve, reject) => {
      const { ctx } = this;
      // 设计态组件源目录路径
      const originalDirectoryPath = path.join(path.resolve('../'), 'src/plugins');
      // 运行态组件目录路径
      const runtimeDirectoryPath = path.join(path.resolve('../'), `${RUNTIMEPATH}src/plugins`);
      // 递归查询组件
      let usePlugins = [];
      const findPlugin = (plugins) => {
        plugins.map((item) => {
          if (item.children) {
            findPlugin(item.children);
          }
          usePlugins.push(item.key.replace(/xa/g, '').replace(/^\S/, (str) => str.toLocaleLowerCase()));
        });
      };
      findPlugin(requestParams.plugins);
      // 运行态已使用组件名字集合
      const runtimeUsePluginNames = Array.from(new Set(usePlugins));

      fs.mkdirSync(runtimeDirectoryPath);

      /**
       * pluginImportCode: 组件引入代码
       * pluginVarCode: 组件变量配置
       * pluginInstallComponentsCode: 组件挂载vue component和默认导出代码
       */
      let pluginImportCode = 'import Vue from "vue";\n';
      let pluginVarCode = 'const plugins = {';
      let pluginInstallComponentsCode = `Object.keys(plugins).map(item => {Vue.component(item, plugins[item]);});\n`;

      // 遍历组件集合拷贝组件文件包
      runtimeUsePluginNames.forEach((item, index) => {
        let key = item.replace(/^\S/, (str) => str.toLocaleUpperCase());
        pluginImportCode += `import xa${key} from "./${item}/${item}.vue";\n`;
        pluginVarCode += `xa${key}${index === runtimeUsePluginNames.length - 1 ? '};\n\n' : ','}`;

        this.copyFile(`${originalDirectoryPath}/${item}/`, runtimeDirectoryPath);
      });

      // 拷贝plugin依赖的文件[pluginsMixins.js,pluginsChartsMixins.js]
      this.copyFile(`${originalDirectoryPath}/pluginsMixins.js`, `${runtimeDirectoryPath}/pluginsMixins.js`);
      this.copyFile(`${originalDirectoryPath}/pluginChartsMixins.js`, `${runtimeDirectoryPath}/pluginChartsMixins.js`);

      // 拷贝modules文件
      this.copyFile(path.join(path.resolve('../'), 'src/modules'), path.join(path.resolve('../'), `${RUNTIMEPATH}src/modules`));

      // 拷贝runtimeComponents文件
      this.copyFile(path.join(path.resolve('../'), 'src/rumtimeComponents'), path.join(path.resolve('../'), `${RUNTIMEPATH}src/rumtimeComponents`));

      const getFileContent = () => `${pluginImportCode}${pluginVarCode}${pluginInstallComponentsCode}`;

      // 写入组件导入js主文件
      fs.writeFile(`${runtimeDirectoryPath}/index.js`, getFileContent(), 'utf-8', (err) => {
        if (err) {
          ctx.logger.warn('写入组件引用文件失败' + err);
          reject();
          return;
        }
        ctx.logger.info(`组件导出文件(index.js)写入完成`);
        resolve();
      });
    });
  }

  /**
   * 根据请求参数写入对应代码
   * @param {object} requestParams 请求参数
   */
  writeCode(requestParams) {
    return new Promise((resolve, reject) => {
      const { ctx } = this;
      const isAutoLayout = requestParams.style.layoutStyle === '2';
      // 生成template
      const generatePageComponentsTemplateCode = () => {
        let plugins = requestParams.plugins;
        let componentsTpl = '\n';

        // 页面固定布局模式
        if (!isAutoLayout) {
          plugins.forEach((item) => {
            let styles = Object.assign({}, item.custom, item.style);
            let componentsStyle = 'position:absolute;';
            let key;
            for (let i in styles) {
              if (['iconname', 'id', 'name', 'autoView', 'linkageEventConfig', 'eventConfig', 'eventListener', 'dataConfig'].includes(i)) {
                delete styles[i];
                continue;
              }

              key = i;
              if (i === 'x') i = 'left';
              if (i === 'y') i = 'top';

              componentsStyle += `${i.replace(/([A-Z])/g, '-$1').toLowerCase()}:${typeof styles[key] === 'number' ? styles[key] + 'px' : styles[key]};`;
            }

            componentsTpl += `<div class="${item.id}" style="${componentsStyle}"><${item.key} ref="${item.id}" :options="componentsOptions.${item.id}" :custom="componentsOptions.${item.id}.custom" :children="componentsOptions.${item.id}.children"/></div>\n`;
          });
        } else {
          // 页面自适应布局模式
          componentsTpl += `<RumtimePageAutoView :children="componentsOptions.plugins"/>`;
        }
        let tpl = `<template>\n<div class="${requestParams.id}">${componentsTpl}</div>\n</template>\n\n`;

        return tpl;
      };
      // 生成script
      const generatePageComponentsScriptCode = () => {
        let plugins = requestParams.plugins;
        let componentsOptions = `componentsOptions: {\n`;

        if (!isAutoLayout) {
          plugins.forEach((item, index) => {
            if (!item.custom) item.custom = {};
            item.props['children'] = item.children || item.props.children || [];
            item.props['custom'] =
              {
                autoView: item.custom.autoView,
                height: item.custom.height,
                id: item.custom.id,
                name: item.custom.name,
                width: item.custom.width,
                x: item.custom.x,
                y: item.custom.y,
                eventListener: item.custom.eventListener
              };

            componentsOptions += `${item.id}:${JSON.stringify(item.props)}${index === plugins.length - 1 ? '\n}\n' : ',\n'}`;
          });
        } else {
          componentsOptions += `plugins: ${JSON.stringify(plugins)}\n}\n`;
        }
        return `<script>\n/** 组件逻辑代码 */\nexport default {\nname: '${requestParams.id.replace(/_/g, '')}',\ndata() {\nreturn {\n${componentsOptions}}\n},\nmounted(){\nif(!window.Uidesigner){\nwindow.Uidesigner={}\n}\nwindow.Uidesigner.$refs = Object.assign({}, this.$refs)\n}\n}\n</script>\n\n`;
      };
      // 生成style
      const generatePageComponentsStyleCode = () => {
        if (isAutoLayout) {
          return `<style>\n/** 组件样式 */\nbody{ margin:0;padding:0 }\n.${requestParams.id} {\nposition:relative;\nwidth: 100vw;\nheight: 100vh;\n background: ${requestParams.style.background};\n margin: 0 auto;\n}</style>`;
        }
        return `<style>\n/** 组件样式 */\nbody{ margin:0;padding:0 }\n.${requestParams.id} {\nposition:relative;\nwidth: ${requestParams.style.w}px;\nheight: ${requestParams.style.h}px;\n background: ${requestParams.style.background};\n margin: 0 auto;\n}</style>`;
      };

      const mainJsPath = path.join(path.resolve('../', `${RUNTIMEPATH}src/main.js`));
      const mainJsCode = `import ElementUI from 'element-ui';\nimport '@/plugins';\nimport '@/rumtimeComponents';\nimport 'element-ui/lib/theme-chalk/index.css';\n\nVue.use(ElementUI);\n`;

      const homeVuePath = path.join(path.resolve('../', `${RUNTIMEPATH}src/views/Home.vue`));

      const pageComponentsPath = path.join(path.resolve('../', `${RUNTIMEPATH}src/components/${requestParams.id}.vue`));
      const pageComponentsCode = `${generatePageComponentsTemplateCode()}${generatePageComponentsScriptCode()}${generatePageComponentsStyleCode()}`;

      // 更新main.js,引入组件
      let mainPromise = new Promise((resolve, reject) => {
        fs.readFile(mainJsPath, 'utf-8', (err, data) => {
          if (!err) {
            let newCode = data.replace(/\/\/\sadd\scode\stag/g, mainJsCode);
            fs.writeFile(mainJsPath, newCode, 'utf-8', (err) => {
              if (err) {
                ctx.logger.warn('写入main.js文件失败' + err);
                reject();
                return;
              }
              ctx.logger.info(`写入main.js文件完成`);
              resolve();
            });
          }
        });
      });

      // 生成页面vue文件
      let generateVuePromise = new Promise((resolve, reject) => {
        fs.writeFile(pageComponentsPath, pageComponentsCode, 'utf-8', (err, data) => {
          if (err) {
            ctx.logger.warn(`生成页面${requestParams.id}.vue失败${err}`);
            reject();
            return;
          }
          ctx.logger.info(`生成页面${requestParams.id}.vue完成`);
          resolve();
        });
      });

      // 更新home.vue
      let homeVuePromise = new Promise((resolve, reject) => {
        fs.readFile(homeVuePath, 'utf-8', (err, data) => {
          if (err) {
            ctx.logger.warn(`读取Home.vue文件失败`);
            reject();
            return;
          }
          let componentName = requestParams.id.replace(/_/g, '');
          let newCode = data
            .replace(/<!--start-->[^]*<!--end-->/g, `<${componentName} />`)
            .replace(/\/\/\simport\scomponents/g, `import ${componentName} from '@/components/${requestParams.id}.vue';\n`)
            .replace(/\/\/\scomponents/g, `${componentName},\n`);

          fs.writeFile(homeVuePath, newCode, 'utf-8', (err) => {
            if (err) {
              ctx.logger.warn('写入Home.vue文件失败' + err);
              reject();
              return;
            }
            ctx.logger.info(`写入Home.vue文件完成`);
            resolve();
          });
        });
      });

      Promise.all([mainPromise, generateVuePromise, homeVuePromise]).then(
        (data) => {
          resolve(this.createResponseData(0, '模版生成完成'));
        },
        (err) => {
          reject(this.createResponseData(1001, '模版生成失败'));
        }
      );
    });
  }

  /**
   * npm run serve
   */
  runProject(requestParams) {
    return new Promise((resolve) => {
      let dir = path.join(path.resolve('../', RUNTIMEPATH));
      if (shelljs.cd(dir).code === 0) {
        if (requestParams.terminal === 'mac') {
          fs.readFile(`${dir}/run.sh`, 'utf-8', (err, data) => {
            if (!err) {
              let newCode = data.replace(/#start[^]*#end/g, `cd ${dir}`);
              this.writeFile(`${dir}/run.sh`, newCode).then(() => {
                shelljs.exec('chmod +x run.sh', { silent: true });
                shelljs.exec('open -a Terminal run.sh');
              });
            }
          });
        } else {
          fs.readFile(`${dir}/run.bat`, 'utf-8', (err, data) => {
            if (!err) {
              let newCode = data.replace(/::start[^]*::end/g, `cd ${dir}`);
              this.writeFile(`${dir}/run.bat`, newCode).then(() => {
                shelljs.exec('chmod +x run.bat', { silent: true });
                shelljs.exec('open -a Terminal run.bat');
              });
            }
          });
        }
      }

      resolve();
    });
  }
  /**
   * 拷贝文件
   * @param {string} sourcePath
   * @param {string} targetPath
   */
  copyFile(sourcePath, targetPath) {
    let result = shelljs.cp('-Rf', sourcePath, targetPath);
    if (result && result.code === 0) {
      this.ctx.logger.info(`${sourcePath}文件夹拷贝完成`);
    }
  }
  /**
   * 写入文件
   * @param {string} path
   * @param {any} content
   */
  writeFile(path, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, content, 'utf-8', (err) => {
        if (!err) {
          resolve();
          return;
        }
        reject();
      });
    });
  }
  /**
   * 创建响应数据
   * @param {number} code 响应code
   * @param {string} msg 响应提示语
   */
  createResponseData(code, msg) {
    return {
      body: { code: code, msg: msg },
      status: 200,
    };
  }

  /**
   * 校验请求参数
   */
  validateParams() {
    let errors = this.app.validator.validate({ page: 'string' }, this.ctx.request.body);
    if (errors) {
      return this.createResponseData(402, '参数错误');
    }
    return null;
  }
}

module.exports = ReleaseController;
