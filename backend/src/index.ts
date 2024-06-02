import app from '@/app/App';
import { connection, sequelize } from '@database/db';
const port = process.env.PORT || 3000;

connection()
    .then(async () => {
        try {
            await sequelize.sync({ force: true });
            console.log('Tablas sincronizadas');
        } catch (error) {
            console.error('Not possible to sync database', error);
        }
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

app.listen(port, () => {
    console.log(
        `\n\x1b[32mServidor\x1b[0m ejecutándose en \x1b[34m http://localhost:${port} \x1b[0m\n`
    );
});
