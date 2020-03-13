<script>
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';
import { Prop, Watch } from '@/modules/vuePropertyDecorator/vuePropertyDecorator'
import * as monaco from 'monaco-editor'

let monacoEditor = null

const dataTypeMap = {
  '[object Object]': {},
  '[object Array]': [],
  '[object Function]': function noop() { },
  '[object String]': '',
  '[object Number]': 1,
  '[object Null]': null,
  '[object Undefined]': undefined
}
// 单行注释Reg
const singleLineComment = /(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g
// 多行注释Reg
const multiLineComment = /(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g

@Component({})
/**
 * 代码编辑器
 */
export default class CodeEditor extends Vue {
  @Prop({ type: String, default: '', required: true }) codeContent
  @Prop(String) language
  @Prop(String) type

  @Watch('codeContent')
  updateCodeContent(newValue) {
    if (newValue && monacoEditor) {
      monacoEditor.setValue(this.setValue(newValue))
    }
  }

  mounted() {
    this.$nextTick(() => {
      monacoEditor = monaco.editor.create(document.getElementById('codeEditor'), {
        value: this.setValue(this.codeContent || ''),
        language: this.language || 'javascript',
        theme: 'vs-dark'
      })
      window.Uidesigner.$event.trigger('open_code_editor', true)
      // 格式化代码
      this.formatDocument()
    })
  }

  destroyed() {
    window.Uidesigner.$event.trigger('open_code_editor', false)
    monacoEditor.dispose()
    monacoEditor = null
  }
  setValue(value) {
    if (this.language === 'json') {
      value = '// Tips:请严格按照json数据格式进行编写\n' + value
    } else if (this.language === 'javascript') {
      value = '// Tips:请严格按照Javascript语法进行编写\n "use strict";\n' + value
    }
    return value
  }
  getValue() {
    try {
      if (monacoEditor) {
        return JSON.parse(monacoEditor.getValue().replace(singleLineComment, '').replace(multiLineComment, ''));
      }
      return dataTypeMap[this.type]
    } catch (error) {
      return error
    }
  }
  formatDocument() {
    setTimeout(() => {
      monacoEditor.trigger('anyString', 'editor.action.formatDocument');
    }, 100)
  }

  render(h) {
    return <div id="codeEditor" class="code-editor"></div>
  }
}
</script>

<style lang="scss">
.code-editor {
  width: 100%;
  height: 100%;
}
</style>