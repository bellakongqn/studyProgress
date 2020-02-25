const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    const n = Number(ctx.cookies.get('token')|| 0) + 1
    ctx.cookies.set('token', n)
    ctx.response.body = n + 'token'
}

app.use(main)
app.listen(3000)