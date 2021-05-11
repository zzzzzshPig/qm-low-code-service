import { Controller } from 'egg'

export default class HomeController extends Controller {
    public async save() {
        const { ctx } = this
        const { id, data } = ctx.request.body

        return ctx.service.edit.save(id, data)
    }

    public async get() {
        const { ctx } = this
        const { id } = ctx.request.body

        return ctx.service.edit.getData(id)
    }
}
