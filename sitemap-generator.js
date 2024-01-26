import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Defina as rotas do seu aplicativo
const routes = [
 "/",
 "/filmes/",
 "/filmes/:categoria",
 "/filmes/:categoria/:idFilme",
 "/sobre",
 "/servicos-producao",
 "/diretores",
 "/diretores/:nome/:idFilme",
 "/contato",
 "/search"
];

// Crie o conteúdo do sitemap
let sitemapContent = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
routes.forEach((route) => {
 sitemapContent += `<url><loc>http://simon-says-mu.vercel.app${route}</loc></url>`;
});
sitemapContent += `</urlset>`;

// Escreva o sitemap no sistema de arquivos
writeFileSync(resolve(__dirname, './sitemap.xml'), sitemapContent);
