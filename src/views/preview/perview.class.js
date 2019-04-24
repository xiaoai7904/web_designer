import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class';

@Component({})
export default class Perview extends Vue {
  @State('perviewHtml') perviewHtml;
  @State('page') page;
  logo = require('../../assets/logo1.png');
  get perviewHtmlStyle() {
    return {
      width: this.page.style.w + 'px',
      height: this.page.style.h + 'px',
      margin: '0 auto'
    };
  }
  back() {
    this.$router.push({ name: 'home' });
  }
  release() {}
}
