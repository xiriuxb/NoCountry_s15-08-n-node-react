import { Request, Response } from "express";
import CommentHelper from "./CommentHelper";
import CommentServices from "./CommentServices";


class CommentController {
    private helperC: CommentHelper;
    private servicesC: CommentServices;

    constructor () {
        this.helperC = new CommentHelper();
        this.servicesC = new CommentServices();
    }

    public findAll = async(req: Request, res: Response): Promise<any> => {
        try {
            const comments = await this.servicesC.findAll();

            if (comments.length === 0 && comments === null) {
                res.status(404).json({message: 'No se encontraron comentarios.'})
                return;
            }

            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'});
        }
    }

    public findOne = async(req: Request, res: Response): Promise<any> => {
        try {
            const cleanId = this.helperC.verifyId(req.params.id);

            if (!cleanId) {
                res.status(400).json({message: 'No se pudo buscar el comentario, ID inválido.'});
                return;
            }

            const comment = await this.servicesC.findOne(req.params.id);

            if (comment === null) {
                res.status(404).json({message: 'No se pudo encontrar el comentario.'})
                return;
            }
            
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'});
        }
    }

    public createComment = async(req: Request, res: Response): Promise<any> => {
        try {
            const body = {
                id_user: req.body.id_user,
                id_publication: req.body.id_publication,
                description: req.body.description,
                createdAt: req.body.createdAt
            }

            const cleanComment = this.helperC.verifyComment(body);

            if (!cleanComment.success) {
                res.status(400).json({error: cleanComment.error.errors});
                return;
            }

            const comment = await this.servicesC.createComment(body);

            if (comment === null) {
                res.status(400).json({message: 'No se pudo crear el comentario.'})
                return;
            }

            res.status(201).json(comment);
            
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'});
        }
    }

    public updateComment = async(req: Request, res: Response): Promise<any> => {
        try {
            const cleanId = this.helperC.verifyId(req.params.id);

            if (!cleanId){
                res.status(400).json({message: 'No se pudo modificar el comentario, ID inválido.'})
                return;
            }

            const body = {
                id_user: req.body.id_user,
                id_publication: req.body.id_publication,
                description: req.body.description,
                createdAt: req.body.createdAt
            }

            const cleanComment = this.helperC.verifyComment(body);

            if (!cleanComment.success) {
                res.status(400).json({error: cleanComment.error.errors})
                return;
            }

            const comment = await this.servicesC.updateComment(req.params.id, body);

            if(comment === null){
                res.status(404).json({message: `No se pudo modificar el comentario`});
                return;
            }

            return comment;
            
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'});
        }
    }

    public deleteComment = async(req: Request, res: Response): Promise<any> => {
        try {
            const cleanId = this.helperC.verifyId(req.params.id);

            if (!cleanId) {
                res.status(400).json({message: `Hubo un error en la solicitud. ID inválido`});
                return;
            }

            const comment = await this.servicesC.deleteComment(req.params.id);

            if (comment === null){
                res.status(400).json({mesagge: `No se pudo eliminar el comentario`});
                return;
            }

            res.status(200).json(comment);
            
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'});
        }
    }
}

export default CommentController;