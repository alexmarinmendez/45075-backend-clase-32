import express from 'express'
import compression from 'express-compression'
// import compression from 'compression'

const app = express()
app.use(compression({
    brotli: { enabled: true, zlib: {}}
}))

app.get('/stringlargo', (req, res) => {
    let string = `Este string es muy largo para la response!`
    for (let index = 0; index < 10e4; index++) {
        string += `<br>Estamos haciendo este string de verdad muy largo!`
    }
    res.send(string)
})

app.get('/otrostringlargo', (req, res) => {
    const payload = "Hello World"
    res.send(payload.repeat(100000))
})

app.listen(8080, () => console.log('Server Up'))