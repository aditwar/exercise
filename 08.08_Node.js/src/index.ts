// express ini merupakan tipe data nya apa
import express, { Application, Request, Response } from 'express';
import router from './router';

// ini untuk menentukan PORT berapa
const PORT: number = 8000

// ini untuk mengenali express nya
const app: Application = express()

// ini yg menjadi acuan api dapat dari mana
// '/api' namanya ENDPOIN yg dipisah2kan mjd bbrp file pada masing2 folder, ini merupakan ROUTER 
app.get('/api', (req: Request, res: Response) => {
    res.status(200).send({
        status: 'ok',
        msg: 'Welcome to my API'
    })
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`[API] : http://localhost:${PORT}/api`);
    
})


