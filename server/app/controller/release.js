'use strict';

const Controller = require('egg').Controller;

class ReleaseController extends Controller {
  async rleease() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = ReleaseController;
