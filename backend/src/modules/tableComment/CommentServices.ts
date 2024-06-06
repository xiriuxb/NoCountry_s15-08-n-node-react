import CommentModel from "./Model/Comment.model";

class CommentServices {

    public findAll = async(): Promise<any> => {
        try {
            const comments = await CommentModel.findAll({
                order: [
                    ['id_publication','ASC'],
                    ['createdAt', 'ASC']
                ]
            });

            return comments;
        } catch (error) {
            return null;
        }
    }

    public findOne = async(id: any): Promise<any> => {
        try {
            const comment = await CommentModel.findByPk(id); 
            return comment;
        } catch (error) {
            return null;
        }
    }

    public createComment = async(body: any): Promise<any> => {
        try {
            const comment = await CommentModel.create({
                id_user: body.id_user,
                id_publication: body.id_publication,
                description: body.description,
                createdAt: body.createdAt
            })

            return comment;
        } catch (error) {
            return null;
        }
    }

    public updateComment = async(id: any, body: any): Promise<any> => {
        try {
            const comment = await this.findOne(id);

            if (comment === null) {
                return null;
            }
            
            await comment.update({
                id_user: body.id_user,
                id_publication: body.id_publication,
                description: body.description,
                createdAt: body.createdAt
            })

            await comment.save();

            return comment;
        } catch (error) {
            return null;
        }
    }

    public deleteComment = async(id: any): Promise<any> => {
        try {
            const comment = await this.findOne(id);

            if (comment === null) {
                return null;
            }

            await comment.destroy();

            return 'Se eliminó el comentario.';
        } catch (error) {
            return null;
        }
    }

}

export default CommentServices;