module.exports = () => {
    return async function gzip(ctx, next) {
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
                    message: e.message
                }
            }
        }
    }
}
