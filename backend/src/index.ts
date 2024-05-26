import { app } from './app/App';
import { connection } from './database/db';
const port = process.env.PORT || 3000;

connection();

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}.`);
});