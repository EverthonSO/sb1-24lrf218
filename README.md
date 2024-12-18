# Professor Website

This is a professional academic website built with Astro.

## Project Structure

```
/
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Content collections (events, publications, projects)
│   ├── layouts/        # Page layouts
│   └── pages/          # Route pages
└── public/            # Static assets
```

## Content Management

Content is managed through collections in the `src/content` directory:

- `events/`: Academic events and deadlines
- `publications/`: Research publications
- `projects/`: Research projects

Each collection has its schema defined in `src/content/config.ts`.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is configured for deployment on Netlify. Push to the main branch to trigger automatic deployment.

## Adding Content

To add new content:

1. Create a new JSON file in the appropriate collection directory
2. Follow the schema defined in `content/config.ts`
3. Set `featured: true` to show the item on the homepage

## License

MIT