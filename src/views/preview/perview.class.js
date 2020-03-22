import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class';
import PageAutoView from '@/components/pageAutoView/pageAutoView.vue';

@Component({})
export default class Perview extends Vue {
  @State('perviewHtml') perviewHtml;
  @State('page') page;
  @State('plugins') plugins;

  logo = require('../../assets/logo1.png');
  get perviewHtmlStyle() {
    return {
      width: this.page.style.layoutStyle === '1' ? this.page.style.w + 'px' : '100%',
      height: this.page.style.layoutStyle === '1' ? this.page.style.h + 'px' : '100%',
      background: this.page.style.background,
      margin: '0 auto'
    };
  }
  back() {
    this.$router.push({ name: 'home' });
  }
  save(type) {
    return new Promise(resolve => {
      window.localStorage.setItem(
        'pagePlugins',
        JSON.stringify(this.$store.state.plugins, (key, value) => {
          if (typeof value === 'function') {
            return value.toString();
          }
          return value;
        })
      );
      type !== 'release' &&
        this.$alert('数据保存成功', '提示', {
          confirmButtonText: '确定'
        });
      resolve();
    });
  }
  release() {
    this.save('release').then(() => {
      let loadingNotify = this.$notify.info({
        title: '提示',
        duration: 0,
        showClose: false,
        message: '模版生成中,请稍后...'
      });

      this.$http.post('/api/release', { page: JSON.stringify(this.$store.state.page), terminal: navigator.platform.indexOf('Mac') > -1 ? 'mac' : 'windows' }).then(
        data => {
          loadingNotify.close();
          this.$notify({
            title: '成功',
            message: '模版生成成功',
            type: 'success'
          });
          this.$http.post('/api/install');
        },
        err => {
          loadingNotify.close();
          this.$notify.error({
            title: '错误',
            message: '模版生成失败,' + err.data.msg
          });
        }
      );
    });
  }
  getComponentStyle(item) {
    return {
      paddingTop: item.style.paddingTop + 'px',
      paddingBottom: item.style.paddingBottom + 'px',
      paddingLeft: item.style.paddingLeft + 'px',
      paddingRight: item.style.paddingRight + 'px',
      borderWidth: item.style.borderWidth + 'px',
      borderStyle: item.style.borderStyle,
      borderColor: item.style.borderColor,
      backgroundColor: item.style.backgroundColor,
      position: 'absolute',
      left: item.custom.x + 'px',
      top: item.custom.y + 'px',
      width: item.custom.width + 'px',
      height: item.custom.height + 'px'
    };
  }
  getPage(h) {
    if (this.page.style.layoutStyle === '1') {
      return this.plugins.map(item => {
        return (
          <div id={item.id} style={this.getComponentStyle(item)}>
            {h(item.key, { props: { options: item.props, children: item.children, custom: item.custom } })}
          </div>
        );
      });
    }
    return <PageAutoView children={this.plugins} isRuntime />;
  }
  mounted() {}
  render(h) {
    return (
      <div class="perview">
        <div class="page-header-tools">
          <img src={this.logo} alt="Web Designer" />
          <div class="page-header-tools__wrap">
            <ul class="page-header-tools__ul">
              {this.page.style.layoutStyle === '1' && (
                <li style="color: #757575;font-size: 14px;">
                  页面尺寸:
                  <span>{this.page.style.w}</span> *<span>{this.page.style.h}</span>
                </li>
              )}
              <li class="page-header-tools__ul-item" onClick={this.back}>
                返回设计器
              </li>
              <li class="page-header-tools__ul-item" onClick={this.release}>
                发布
              </li>
            </ul>
          </div>
        </div>
        <div class="perview-html" style={this.perviewHtmlStyle}>
          {this.getPage(h)}
        </div>
      </div>
    );
  }
}
