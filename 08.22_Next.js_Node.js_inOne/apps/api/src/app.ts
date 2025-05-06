import express, { Express, Request, Response } from 'express'
import { AuthorRouter } from './routers/author.router';

const PORT: number = 8000

export default class App {

    // private agar tidak dapat diakses semua orang
    private app: Express;

    // semua dipanggil ke sini, untuk bangun APP
    constructor() {
        this.app = express()
        this.configure()
        this.routes()
    }

    // void = tidak return apa2, menginitial penggunaan express
    private configure(): void {
        this.app.use(express.json())
    }

    // ini untuk Routes nya pakai "./api"
    private routes(): void {
        const authorRouter = new AuthorRouter()
        this.app.get('/api', (req: Request, res: Response) =>{
            res.send('Selamat! Sudah nyambung API')
        })
        this.app.use('/api/author', authorRouter.getRouter())
    }
 
    // ini untuk menampilkan URL di TERMINAL
    public start(): void {
        this.app.listen(PORT, () => {
            console.log(`[API] http://localhost:${PORT}/api`)
        })
    }
}

