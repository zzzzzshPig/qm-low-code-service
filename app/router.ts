import { Application } from 'egg'

export default (app: Application) => {
    const { controller, router } = app

    router.post('/edit/save', controller.edit.save)

    router.post('/edit/get', controller.edit.get)
}
