# Greendominium

Public marketing site for **Greendominium** — a house inside a greenhouse. The centerpiece is an Examples gallery of real builds. Those homes are credited inspiration for Brady Ewing’s future project. They are not Greendominium products.

CoS maintains the catalog. Brady should not have to touch the codebase to add a home.

## Local run

Needs Node 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build      # static output in dist/
npm run preview    # serve the production build
```

## Deploy on Vercel

1. Import this GitHub repo in [Vercel](https://vercel.com/new).
2. Framework preset: **Astro** (auto-detected).
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy. No environment variables required.

The site is static. Image variants are generated at build time.

## Add a third example

Drop a markdown file and its images into `src/content/examples/`. Rebuild. That is the whole content model.

1. Add images next to the markdown, for example `src/content/examples/my-project.jpg`.
2. Copy `docs/example-template.md` to `src/content/examples/my-project.md`.
3. Fill every field. Field meanings live in `docs/profile-schema.md`.
4. Point `hero` (and optional `gallery`) at the local image files:

   ```yaml
   hero: ./my-project.jpg
   gallery:
     - ./my-project-porch.jpg
   ```

5. Set `order` (lower numbers appear first) and `featured: true` only if it should lead the home page.
6. Write a short body paragraph if you want intro copy above the facts.
7. Run `npm run dev` and open `/examples/my-project`.

Do not invent dimensions. If a number is not in a cited source, leave it out of `greenhouse` / `houseInside` and say what is known.

Credits are required and sit near the top of every profile. Always fill **architect / designer**, **greenhouse or shell manufacturer**, and **photos**. Add other builders (steel, glass, structural) when known. Link official homepages when you have them — do not invent affiliations.

### Required fields

| Field | Use |
|---|---|
| `name` | Short public name |
| `location` | Town / region / country |
| `climate` | One line, why the glass helps |
| `greenhouse` | Footprint / height / supplier if known |
| `houseInside` | Living area / stories / material |
| `uniqueFeatures` | 3–5 (or more) bullets |
| `status` | Built year / occupied / product concept |
| `credits.architect` | `{ name, url? }` — required |
| `credits.greenhouseMaker` | `{ name, url? }` — required |
| `credits.builders` | Optional `{ name, role?, url? }` list |
| `credits.photos` | `{ name, url? }` list — at least one |
| `sources` | `{ title, url }` list — always cite |
| `hero` | Local image |
| `hook` | One line for the card grid |

## Pages

- `/` — what a Greendominium is, CTA into Examples, Facebook note
- `/examples` — responsive card grid
- `/examples/[slug]` — full profile from the schema
- `/about` — Brady documenting the path; examples are credited inspiration

## Stack

Astro 5, content collections, built-in `<Image>` optimization. No auth, no CMS.
