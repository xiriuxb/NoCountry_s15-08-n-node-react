import app from '@/app/App';
import { connection } from '@database/db';

const port = process.env.PORT || 3000;

connection();

app.listen(port, () => {
    console.log(
        `\n\x1b[32mServidor\x1b[0m ejecutándose en \x1b[34m http://localhost:${port} \x1b[0m\n`
    );
});
