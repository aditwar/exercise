import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";

export class AuthorRouter {
    private router: Router
    private authorController: AuthorController

    // Membentuk semua disini
    constructor() {
        // Menginitial new
        this.authorController = new AuthorController()

        // Pasang disini semua... biar terhubung
        this.router = Router()
        this.initializeRoutes()
    }

    //! PERHATIKAN ini harus disesuaikan dengan CONTROLLER
    private initializeRoutes(): void {
        this.router.get('/', this.authorController.getAuthor);
        this.router.get('/:id', this.authorController.getAuthorId);
        this.router.post('/', this.authorController.createAuthor);
        this.router.patch('/:id', this.authorController.updateAuthor);
        this.router.delete('/:id', this.authorController.deleteAuthor);
    }

    getRouter(): Router {
        return this.router
    }
}
