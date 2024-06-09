import { mySqlSequelize } from '@/database/db';
import PublicationModel from '@/modules/tablePublication/Model/Publication.model';
import { DataTypes, Model } from 'sequelize';

export type ImageModelType = {
    id_image?: number;
    id_publication: number;
    public_id: string;
    url: string;
};

class ImageModel extends Model {
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
                public_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        notEmpty: true
                    }
                },
                url: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    }
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
