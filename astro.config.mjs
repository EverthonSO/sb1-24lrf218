import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seu-usuario.github.io/', // Substitua pelo seu usuário do GitHub
  base: '/nome-do-repositorio/',          // Caminho base do seu repositório
  outDir: 'dist',                         // Pasta de saída após o build
});
