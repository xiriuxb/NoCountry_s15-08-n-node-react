import app from '@/app/App';
import { connection, sequelize } from '@database/db';
const port = process.env.PORT || 3000;

connection();

async () => {
    await sequelize.sync({ alter: true });
};
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}.`);
});
