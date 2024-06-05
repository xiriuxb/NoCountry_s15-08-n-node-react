import { mySqlSequelize } from '@/database/db';
import PublicationModel from '@/modules/tablePublication/Model/Publication.model';
import { DataTypes, Model, Sequelize } from 'sequelize';

class ImageModel extends Model {
    public id_image!: number;
    public id_publication!: number;
    public url!: string;

    public static associate(): void {
        ImageModel.belongsTo(PublicationModel, {
            foreignKey: 'id_publication',
            targetKey: 'id_publication'
        });
    }

    public static initModel(sequelize: typeof mySqlSequelize): void {
        ImageModel.init(
            {
                id_image: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                id_publication: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                url: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize,
                freezeTableName: true,
                timestamps: false
            }
        );
    }
}

export default ImageModel;
