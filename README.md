# Mídia em Foco IA

Landing page em Next.js, TypeScript e Tailwind CSS para divulgação da Mídia em Foco IA.

## Arquivos principais

- `app/page.tsx`: conteúdo principal da landing page
- `app/layout.tsx`: SEO e estrutura base
- `app/globals.css`: estilos globais e utilitários visuais
- `public/logo-symbol.jpeg`: símbolo usado no site
- `public/logo.jpeg`: versão completa do logo
- `public/CNAME`: domínio personalizado para GitHub Pages

## Publicar no GitHub Pages

1. Envie os arquivos para a branch principal (`main`).
2. No GitHub, abra `Settings > Pages`.
3. Em `Build and deployment`, escolha `GitHub Actions`.
4. Faça push para `main` e aguarde a action `Deploy Next.js site to GitHub Pages`.

## Visualização local

Instale as dependências e rode o servidor local:

```bash
npm install
npm run dev
```

Requer Node.js 22 ou superior recomendado.
