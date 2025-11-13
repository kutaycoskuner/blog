<h1 align="center">
    Astro + Svelte Blog
</h1>

<p align="center">
    This is my blog template combining Astro, Svelte, KaTeX, and D3 for dynamic and interactive content. Designed for rendering Markdown, math notation, and interactive visualizations directly in the posts.
</p>

As I wanted to add more detailed functionality to my blog posts, I found a solution in this template that satisfies my needs. 

<p align="right">
    <img alt="Start Date" src="https://img.shields.io/badge/project_start-12_Nov_2025-blue" />
    <img alt="Last Update" src="https://img.shields.io/github/last-commit/kutaycoskuner/blog" />
</p>


## Features

- [x] Markdown rendering
- [x] Math notation rendering with KaTeX
- [x] Embedding Svelte components inside Markdown
- [x] Drawing graphs with D3.js
- [x] Interactive sliders to change parameters dynamically


## Structure

```bash
blog_template/
├── public/               # Static assets
├── src/
│   ├── components/       # Svelte components for embedding
│   ├── layouts/          # Astro layouts
│   └── content/          # Markdown files (blog, tutorials, micro)
├── package.json
├── astro.config.mjs
└── README.md
```

## Run
```bash
# Clone repository
git clone <repository-url>
cd blog

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open your browser
# Visit: http://localhost:3000/test-toc to inspect structure
```