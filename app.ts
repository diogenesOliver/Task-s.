import express, { Request, Response, NextFunction } from "express";

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.static((`${__dirname}/public`)))

app.get('/', ( req: Request, res: Response ) => {
    res.render('index.html')
})

app.listen(PORT, () => {
    console.log(`Server run on PORT: ${PORT}`)
})