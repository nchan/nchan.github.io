# nchan.github.io

Personal portfolio site for Natt Chan.

## Stack

Static HTML5 site built on the [Highlights](https://html5up.net/highlights) template by HTML5 UP (CCA 3.0 license). No build tools or package manager — edit files directly and open `index.html` in a browser to preview.

- **HTML:** `index.html` — single page, 5 sections
- **CSS:** `assets/css/main.css` — 3100+ lines, class-based, no preprocessor
- **JS:** `assets/js/main.js` — jQuery-based (smooth scroll, parallax, mobile handling)
- **JS:** `assets/js/gallery.js` — film photography gallery + scroll fade-in
- **Images:** `images/` — film photography scans (NORITSU lab scanner)

## Sections

| ID        | Content                                                          |
|-----------|------------------------------------------------------------------|
| `#header` | Hero — name + Begin button                                       |
| `#one`    | About — bio, reading list, current role                          |
| `#two`    | Hobbies grid — film photography (gallery), biking, coding, polo |
| `#three`  | Languages — Python, R, Tableau, SQL, HTML/CSS                    |
| `#footer` | Contact form + social links                                      |

## Color scheme

| Purpose                | Value      |
|------------------------|------------|
| Primary buttons        | `#6b7280`  |
| Primary button hover   | `#7c8390`  |
| Primary button active  | `#5a6270`  |
| Body background        | `#313a3d`  |
| Body text              | `#6f7577`  |
| Headings               | `#61686b`  |
| Borders / dividers     | `#dddddd`  |
| Icon color             | `#a8b0b3`  |

## Features

- **Film photography gallery** — clicking "film photography" in the hobbies section opens a full-screen lightbox with images from `images/`. Navigate with ←/→ buttons or keyboard arrow keys; close with Esc or click the overlay. CSS fade transitions on open/close and between images.
- **Scroll fade-in** — section content fades up into view as the user scrolls, via `IntersectionObserver` + CSS transitions.

## Development workflow

1. Edit files directly (no build step needed).
2. Preview by opening `index.html` locally in a browser.
3. Push to `origin/main` to deploy via GitHub Pages.

## Branch naming for Claude Code sessions

Branches must start with `claude/` and end with the session ID:

```
claude/<short-description>-<session-id>
```

Example: `claude/update-buttons-add-claude-md-7pcwW`
