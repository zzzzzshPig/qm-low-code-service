module.exports = () => {
    return async function gzip(ctx, next) {
        try {
            const data = await next()

            ctx.body = {
                error: 0,
                data: data || {}
            }
        } catch (e) {
            ctx.body = {
                error: 500,
                message: e.message
            }
        }
    }
}
