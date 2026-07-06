# Quincy the Bedlington

The personal site for Quincy, a blue Bedlington terrier who looks like a little lamb and runs the whole house. Photos, his adventures, his favorite snacks, and a game or two.

Live at **[quincythebedlington.com](https://quincythebedlington.com)**.

## What is here

- A homepage all about Quincy: hero, photo wall, fun stats, and a "Catch Quincy" game with Easy / Medium / Hard difficulty.
- A light / dark theme toggle that remembers your choice.
- Short articles grouped into sections (his story, grooming, snack time, and more), each one written from real life with him.
- Fast built-in search.

## Tech

- [Astro](https://astro.build) static site.
- [Pagefind](https://pagefind.app) for search (built automatically after the site builds).
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com).

## Running it locally

You need Node 22 (see `.nvmrc`).

```sh
nvm use          # picks up Node 22 from .nvmrc
npm install
npm run dev      # local dev server at http://localhost:4321
```

Other handy commands:

```sh
npm run build    # build the site into dist/ (also builds the search index)
npm run preview  # preview the production build locally
```

## Adding photos

The photos on the site are placeholders for now. To add real ones, drop them in
`public/photos/` and follow the notes in [public/photos/README.md](public/photos/README.md).

## Adding an article

Articles live in `src/content/articles/<section>/`. Copy an existing `.md` file,
change the frontmatter (title, description, date), and write. The section folders
line up with the `SECTIONS` list in `src/consts.ts`.

## How it goes live

Two branches, two sites:

- `develop` deploys to the staging site at **dev.quincythebedlington.com** (login-gated).
- `main` deploys to the live public site at **quincythebedlington.com**.

Push to `develop` to preview, then open a pull request from `develop` into `main`.
When it merges, GitHub Actions builds and deploys the live site automatically.

## License

Personal project. All rights reserved.