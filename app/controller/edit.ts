import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async save() {
    const { ctx } = this

    console.log(ctx.data)
    ctx.body = await ctx.service.test.sayHi('egg')
  }

  public async get() {
    const { ctx } = this

    console.log(ctx.data)
    ctx.body = await ctx.service.test.sayHi('egg')
  }
}
