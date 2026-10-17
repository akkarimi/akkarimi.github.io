# How to update your site

Everything you normally change lives in **`_data/`** — one simple YAML file per kind of content.
You never need to touch HTML or CSS to add news, papers, students or courses.

| To change…                 | Edit                        | Shows up on                       |
|----------------------------|-----------------------------|-----------------------------------|
| News                       | `_data/news.yml`            | Home (latest 5), `/news/`         |
| Publications               | `_data/publications.yml`    | Home (selected), `/publications/`, `/research/` |
| Students                   | `_data/people.yml`          | `/people/`, student marks in author lists |
| Courses                    | `_data/courses.yml`         | `/teaching/`, `/cv/`              |
| Research themes            | `_data/research.yml`        | Home, `/research/`                |
| Publication topics         | `_data/topics.yml`          | Publication filter, research pages |
| CV (web version)           | `_data/cv.yml`              | `/cv/` — the PDF is `files/cv.pdf` |
| Name, links, LinkedIn…     | `_config.yml` (`author:`)   | Header, hero, footer, search engines |
| Menu                       | `_data/navigation.yml`      | Header                            |

**Publishing:** commit and push (or edit a file directly on github.com and click *Commit*).
GitHub rebuilds the preview at <https://akkarimi.github.io> within a minute or two.
For akkarimi.com, pull and build on your server as usual:

```bash
git pull && bundle exec jekyll build      # output goes to _site/
```

---

## YAML in 30 seconds

- Each entry starts with `- ` at the left margin; its fields are indented by **two spaces** (never tabs).
- Put text in `"double quotes"` if it contains a colon `:`, a `#`, or starts with `*`, `[`, `{`, `&`.
- Long text can use `>-` and continue on the next lines, indented (that's how most entries are written).
- Leave out any optional field you don't have — it is simply hidden on the site.
- Order doesn't matter for news; publications are listed in the order you write them within each year (newest first is a good habit).

If a build fails after an edit, it is almost always indentation or a missing quote — compare with the entry above it.

---

## Add a news item

Open `_data/news.yml` and add this anywhere (the site sorts by date):

```yaml
- date: 2026-11-01
  text: >-
    Paper accepted to EMNLP 2026:
    *Your Paper Title*. [Preprint](https://arxiv.org/abs/xxxx.xxxxx)
```

- `date` — use `01` as the day if it doesn't matter; only "Nov 2026" is shown.
- `text` — Markdown: `*italics*`, `**bold**`, `[link text](https://…)`.
- Optional `link:` (and `link_text:`) adds a "More →" link at the end.

## Add a publication

Open `_data/publications.yml` and paste a new entry at the top:

```yaml
- title: "Your Paper Title: With a Colon Needs Quotes"
  authors: "F Student, L Flek, A Karimi"
  venue: "Findings of ACL 2027"
  badge: "ACL Findings"
  year: 2027
  type: findings          # journal | conference | findings | workshop | preprint
  topics: [robustness]    # ids from _data/topics.yml
  selected: false         # true → also on the homepage (keep 4–6 selected)
  summary: >-
    One or two sentences in plain language — shown under the title.
  links:
    pdf: https://aclanthology.org/2027.findings-acl.1.pdf
    doi: 10.18653/v1/2027.findings-acl.1   # not shown as a button; used by search engines
    code: https://github.com/you/repo
    slides: /files/slides/your-paper.pdf
    poster: /files/posters/your-paper.pdf
  abstract: >-
    The full abstract (optional) — shown by the "Abstract" button.
  bibtex: |
    @inproceedings{student2027your,
      title = {Your Paper Title},
      author = {Student, First and Flek, Lucie and Karimi, Akbar},
      booktitle = {Findings of the Association for Computational Linguistics: ACL 2027},
      year = {2027}
    }
```

Notes:

- **Your name** is bolded automatically wherever it matches `publication_names` in `_config.yml` (currently `A Karimi`).
- **Student co-authors** are marked automatically if their spelling in `authors` matches an `author_names` entry in `_data/people.yml`.
- **BibTeX:** copy it from the paper's ACL Anthology page ("Cite → BibTeX"), Google Scholar, or doi.org. Keep the `|` line and indent every BibTeX line by four spaces.
- **Thumbnail** (only used for selected papers on the homepage): put an image (~800×500, PNG/JPG/WebP) in `images/papers/` and add `thumbnail: "short-name.png"`. Without one, a neat typographic tile is shown.
- **Slides / posters** can be links, or PDFs you add to `files/` (e.g. `files/slides/…`).
- **New topic?** Add it to `_data/topics.yml` first (`id` + `label`), then use the id.
- The Publications page can be linked pre-filtered: `/publications/?topic=science`, `?type=journal`, `?year=2025`, `?q=dialect`.

## Add a new student

Open `_data/people.yml`. **First delete the six sample entries** (the ones with `placeholder: true`). Then add:

```yaml
- name: "Firstname Lastname"
  author_names: ["F Lastname"]      # how they appear in publication author lists
  photo: "firstname-lastname.jpg"   # in images/people/ — square, at least 400×400
  level: "MSc"                      # PhD | MSc | BSc | Intern
  role: "co-supervisor"             # or supervisor
  topic: "Adversarial robustness of LLM agents"
  years: "2025–"
  status: current
  links:
    github: "https://github.com/…"
```

No photo yet? Leave `photo: ""` — their initials are shown instead.

## Move a student to alumni

Change one line, and optionally add where they went:

```yaml
  years: "2025–2026"
  status: alumni
  now: "PhD student at TU Munich"
```

## Add a course

Open `_data/courses.yml` and add:

```yaml
- title: "Natural Language Processing"
  institution: "Saarland University"
  year: 2027
  term: "Summer 2027"
  level: "Graduate"
  role: "Lecturer"
  description: >-
    What the course covers, in one or two sentences.
  materials: "https://…"            # optional link to slides / course page
```

Courses are grouped by year automatically. The 2022 Marburg *Dialog Systems* entry still has an empty `description` waiting for you.

## Other common edits

- **Add LinkedIn (or change any profile link):** in `_config.yml`, set `author.links.linkedin: "https://www.linkedin.com/in/…"`. Empty links are hidden.
- **Change the research statement** under your name: `_pages/index.html`, the paragraph marked "Edit freely".
- **Change research theme text or add a figure:** `_data/research.yml`. For a figure, put the image in `images/research/` and set `figure: "name.png"` (optionally `figure_caption:`).
- **Update the CV:** replace `files/cv.pdf` (same name), and edit `_data/cv.yml` for the web version.
- **Write a blog post:** create `_posts/2026-11-01-my-title.md`:

  ```markdown
  ---
  title: "My title"
  description: "One-line teaser shown in the list."
  ---
  Your post in Markdown…
  ```

- **Add a project:** copy the `<article class="card">…</article>` block in `_pages/projects.html`.
- **Change your photo:** replace `images/ak.jpeg`, then regenerate the small versions (`images/ak-240.*`, `images/ak-480.*`) — or ask for help; the homepage uses those.

## Image conventions

| What              | Folder              | Name                         | Size              |
|-------------------|---------------------|------------------------------|-------------------|
| Student photos    | `images/people/`    | `firstname-lastname.jpg`     | square, ≥ 400 px  |
| Paper thumbnails  | `images/papers/`    | `short-paper-name.png`       | ~800 × 500        |
| Research figures  | `images/research/`  | `theme-id.png`               | ~1200 px wide     |
| Social preview    | `images/og.jpg`     | —                            | 1200 × 630        |

Keep images under ~200 KB (export as JPG/WebP; <https://squoosh.app> is handy).

---

## Optional: edit with web forms (Pages CMS)

`.pages.yml` configures [Pages CMS](https://pagescms.org) for news, publications, students and courses.
Sign in at <https://app.pagescms.org> with GitHub, open this repository, and use the forms; saving commits to GitHub for you.
(Saving through the CMS may drop the help comments at the top of a `_data` file — the content is unaffected.)

## Preview locally

```bash
bundle install
bundle exec jekyll serve      # → http://localhost:4000 (restart after editing _config.yml)
```

## Changing the look

All colours, fonts, sizes and spacing are CSS custom properties at the top of
`assets/css/site.css` (section 1 = light theme, section 2 = dark theme — keep the two dark blocks identical).

- `--accent` (deep teal) is used for links and highlights; `--accent-2` (terracotta) for small touches
  like the bars above headings and the hero eyebrow.
- Each research theme has a colour, set with `color:` in `_data/research.yml`
  (`teal`, `amber`, `plum`, `green` or `indigo`); it is used on its card and on the Research page.
- Venue badges are coloured by publication type (journal = plum, conference = teal,
  findings = indigo, workshop = amber).
- `--footer-bg` sets the dark footer band; `--band` the tinted Research section on the homepage.

## How it is built

- Jekyll 3.10 (same as GitHub Pages), plugins: `jekyll-sitemap`, `jekyll-redirect-from`.
- `_layouts/` — `default` (page shell), `page` (inner pages), `post` (blog posts).
- `_includes/` — header, footer, `pub.html` (one publication), `author-list.html` (bold/student marks), `news-list.html`, icons and illustrations.
- `_pages/` — one file per page; each is generated from `_data/`.
- `assets/js/site.js` — menu, dark-mode toggle, BibTeX copy (the site works without JavaScript); `assets/js/publications.js` — search and filters.
- Fonts (Newsreader, Inter) are self-hosted in `assets/fonts/site/`.

**Server tip:** enable compression in Caddy (`encode zstd gzip` in the site block) — it is the single biggest speed win, especially for the Publications page.
