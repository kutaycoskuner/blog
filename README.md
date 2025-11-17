<h1 align="center">
    Blog Template
</h1>

<p align="center">
    This is my blog template combining Astro, Svelte, KaTeX, and D3 for dynamic and interactive content. Designed for rendering Markdown, math notation, and interactive visualizations directly in the posts.
</p>
 

<p align="right">
    <img alt="Start Date" src="https://img.shields.io/badge/project_start-12_Nov_2025-blue" />
    <img alt="Last Update" src="https://img.shields.io/github/last-commit/kutaycoskuner/blog" />
</p>


## Features

- [x] Markdown rendering
- [x] Math notation rendering with KaTeX
- [x] Embedding Svelte components inside Markdown
- [x] Drawing graphs with D3.js
- [x] Interactive components to visualize parameter changes dynamically
- [x] Collapsable table of contents on multiple markdown renders
- [x] Commenting on blog posts though [giscus](https://giscus.app/)


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
# Prerequisite: node, pnpm

# Clone repository
git clone https://github.com/kutaycoskuner/blog.git
cd blog

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open your browser
# Visit: http://localhost:3000/test-toc to inspect structure
```