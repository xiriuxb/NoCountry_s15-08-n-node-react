import ImageModel from '@/modules/tableImages/Model/Image.model';
import PublicationModel, {
    PublicationDTO,
    PublicationExpandedType
} from '@/modules/tablePublication/Model/Publication.model';

export default class publicationMapper {
    constructor() {}

    public static map(Publication: any | null): PublicationDTO | null {
        try {
            if (!Publication) {
                return null;
            }
            const publication: PublicationDTO = {
                id_publication: Publication.id_publication,
                id_point_interest: Publication.id_point_interest,
                user: {
                    id_user: Publication.id_user,
                    name: Publication.user.name,
                    last_name: Publication.user.last_name
                },
                description: Publication.description,
                createdAt: Publication.createdAt,
                updatedAt: Publication.updatedAt,
                is_edited: Publication.is_edited,
                rating: Publication.rating,
                urls: [...Publication.images.map((image: ImageModel) => image.dataValues.url)]
            };

            return publication;
        } catch (error) {
            throw error;
        }
    }

    public static mapAll(publications: PublicationExpandedType[]): PublicationDTO[] {
        try {
            if (!publications) {
                return [];
            }
            return publications
                .map((publication) => this.map(publication))
                .filter((publications): publications is PublicationDTO => publications !== null);
        } catch (error) {
            throw error;
        }
    }
}
