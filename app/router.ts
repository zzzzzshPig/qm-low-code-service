import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', '*')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, HEAD, PATCH')

    if (ctx.method === 'OPTIONS') {
      ctx.body = 200
    } else {
      try {
        await next()
      } catch (e) {
        ctx.body = {
          error: 500,
          message: e.message,
        }
      }
    }
  })


  router.post('/data/save', controller.edit.save)

  router.post('/data/get', controller.edit.get)
}
