# Portfolio Website: Design & Code Basics

A developer-focused guide to the architecture, design system, and codebase of this React-based portfolio.

---

## 1. Overview

This is a **single-page application (SPA)** personal portfolio built with **React 17** and bootstrapped with `create-react-app`. It uses a **dark, purple-accented theme** with animated particle backgrounds, typewriter effects, and interactive UI elements.

**Live URL:** [wannasleepforlong.vercel.app](https://wannasleepforlong.vercel.app/)

---

## 2. Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | React 17 | UI library |
| **Routing** | react-router-dom v6 | Client-side navigation |
| **UI Components** | react-bootstrap + Bootstrap 5 | Grid system, Navbar, Cards, Buttons |
| **Animations** | react-tsparticles | Floating particle background |
| **Effects** | typewriter-effect | Animated typing text |
| **Effects** | react-parallax-tilt | 3D hover tilt on images |
| **Data** | react-github-calendar | GitHub contributions heatmap |
| **PDF** | react-pdf | In-browser CV rendering |
| **Icons** | react-icons (Ai, Fa, Si, Cg, Bs, Im) | SVG icon library |
| **Fonts** | Google Fonts (PT Mono, Outfit) | Typography |

---

## 3. Project Structure

```
Portfolio-Website/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   ├── favicon.png
│   └── manifest.json
├── src/
│   ├── App.js              # Root component: Router + Preloader + Layout
│   ├── index.js            # Entry point (ReactDOM.render)
│   ├── index.css           # Global font & body gradient
│   ├── style.css           # Main stylesheet (all custom styles)
│   ├── App.css             # Default CRA styles (mostly unused)
│   ├── Assets/             # Images, SVGs, PDF resume
│   ├── data/               # (Optional) data files
│   └── components/
│       ├── Navbar.js
│       ├── Footer.js
│       ├── Pre.js          # Preloader component
│       ├── ScrollToTop.js  # Route change scroll reset
│       ├── Particle.js     # tsparticles background
│       ├── Home/
│       │   ├── Home.js     # Hero section
│       │   ├── Home2.js    # Intro + avatar
│       │   └── Type.js     # Typewriter roles
│       ├── About/
│       │   ├── About.js
│       │   ├── AboutCard.js
│       │   ├── Techstack.js
│       │   ├── Toolstack.js
│       │   └── Github.js
│       ├── Projects/
│       │   ├── Projects.js
│       │   └── ProjectCards.js
│       ├── Experience/
│       │   ├── Experience.js
│       │   └── ExperienceCard.js
│       ├── Research/
│       │   ├── Research.js
│       │   └── ResearchCard.js
│       └── Resume/
│           └── ResumeNew.js
├── package.json
└── README.md
```

---

## 4. Application Architecture

### 4.1 Entry Point (`src/index.js`)

Standard React 17 rendering:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

### 4.2 Root Component (`src/App.js`)

Handles three top-level concerns:

1. **Preloader**: A 1.2-second loading screen (`Pre.js`) before content appears.
2. **Router**: `BrowserRouter` with `Routes` for 6 pages + a catch-all redirect.
3. **Layout**: `Navbar` and `Footer` wrap all routes. `ScrollToTop` resets scroll on navigation.

```javascript
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => upadateLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
```

### 4.3 Client-Side Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Hero, intro, social links |
| `/about` | `About` | Bio, skills, tools, GitHub calendar |
| `/project` | `Projects` | Project cards with GitHub links |
| `/experience` | `Experience` | Work history with bullet points |
| `/research` | `Research` | Publications and papers |
| `/resume` | `ResumeNew` | Embedded PDF + download button |

---

## 5. Design System

### 5.1 Color Palette

The site uses a **dark purple cyber-theme** defined via CSS custom properties in `style.css`:

```css
html {
  --section-background-color: linear-gradient(
    to bottom left,
    rgba(17, 16, 16, 0.582),
    rgba(12, 8, 24, 0.904)
  );

  --image-gradient: linear-gradient(
    to bottom left,
    rgba(17, 16, 16, 0.678),
    rgba(12, 10, 22, 0.863)
  );

  --imp-text-color: #c770f0;   /* Primary accent purple */
}
```

| Token | Value | Usage |
|-------|-------|-------|
| Body bg | `linear-gradient(to left, rgb(27 20 41), rgb(20 15 35))` | Global background |
| Primary accent | `#c770f0` | Headings, links, highlights, icons |
| Button bg | `#623686` | CTA buttons |
| Card shadow | `rgba(119, 53, 136, 0.459)` | Project card elevation |
| Navbar bg | `#1b1a2ea9` + `backdrop-filter: blur(15px)` | Sticky glassmorphism nav |

### 5.2 Typography

```css
@import url("https://fonts.googleapis.com/css2?family=Outfit&family=PT+Mono&display=swap");

body {
  font-family: "PT Mono", monospace !important;
}
```

- **Font**: PT Mono (monospace) for a technical/developer aesthetic.
- **Headings**: Large em-based sizes (`2.4em`, `2.5em`, `2.6em`).
- **Purple class**: `.purple` applies `--imp-text-color` for emphasis.

### 5.3 Scrollbar Customization

```css
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: #2d1950; }
::-webkit-scrollbar-thumb { background: rgba(178, 121, 216, 0.959); border-radius: 12px; }
```

---

## 6. Key Components Explained

### 6.1 Particle Background (`Particle.js`)

Uses `react-tsparticles` to render a fixed, full-screen particle layer behind content.

```javascript
<Particles
  id="tsparticles"
  params={{
    particles: {
      number: { value: 160, density: { enable: true, value_area: 1500 } },
      line_linked: { enable: false },
      move: { direction: "right", speed: 0.05 },
      size: { value: 1 },
    },
    interactivity: {
      events: { onclick: { enable: true, mode: "push" } },
    },
    retina_detect: true,
  }}
/>
```

**CSS positioning** (`style.css`):
```css
#tsparticles {
  position: fixed !important;
  width: 100%;
  height: 100%;
}
```

This ensures particles stay in the background while content scrolls.

### 6.2 Navbar (`Navbar.js`)

- **Sticky glassmorphism**: On scroll > 20px, applies `.sticky` class with `backdrop-filter: blur(15px)`.
- **Custom hamburger**: Three `<span>` elements animated into an "X" when expanded.
- **Active link underline**: `::after` pseudo-element animates width from `0` to `100%` on hover.
- **Icons**: Each nav link uses `react-icons` (e.g., `<AiOutlineHome />`).

### 6.3 Home Hero (`Home.js` + `Type.js`)

**Layout**: `react-bootstrap` grid (`Col md={7}` for text, `Col md={5}` for illustration).

**Typewriter effect** (`Type.js`):
```javascript
<Typewriter
  options={{
    strings: ["AI/ML Engineer", "Researcher", "Full-Stack AI Developer", "Open Source Contributor"],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  }}
/>
```

**Waving hand emoji** (`style.css`):
```css
.wave {
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
}
```

### 6.4 Cards Pattern

The site uses a **consistent card component pattern**:

| Type | Component | Style Class |
|------|-----------|-------------|
| Project | `ProjectCards.js` | `.project-card-view` |
| Experience | `ExperienceCard.js` | `.project-card-view` |
| Research | `ResearchCard.js` | `.project-card-view` |

All cards share:
- Transparent background
- Purple shadow on hover (`transform: scale(1.02)`)
- Bootstrap `Card` component under the hood

### 6.5 Tech Stack Display (`Techstack.js` + `Toolstack.js`)

Custom "icon pill" design:

```css
.tech-icons {
  display: flex;
  align-items: center;
  outline: 1.7px solid rgba(200, 137, 230, 0.637);
  border-radius: 24px;
  transition: all 0.4s ease;
}
.tech-icons:hover {
  transform: scale(1.05);
  outline: 2.2px solid rgba(197, 115, 230, 0.883);
}
```

- `Techstack`: Uses `react-icons/si` and `react-icons/fa` for colored SVG icons.
- `Toolstack`: Uses local `.svg` assets in `src/Assets/TechIcons/`.

### 6.6 Resume Viewer (`ResumeNew.js`)

Uses `react-pdf` to render the PDF inline with responsive scaling:

```javascript
<Document file={pdf}>
  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
</Document>
```

- Download buttons above and below the viewer.
- Worker loaded from CDNJS for PDF.js.

### 6.7 GitHub Calendar (`Github.js`)

```javascript
<GitHubCalendar
  username="wannasleepforlong"
  blockSize={30}
  blockMargin={10}
  color="#c084f5"
  fontSize={20}
/>
```

Fetches and renders a contribution heatmap matching the site’s purple theme.

---

## 7. CSS Architecture

### 7.1 File Split

| File | Purpose |
|------|---------|
| `index.css` | Google Fonts import, body gradient, base font |
| `style.css` | All custom styles: navbar, home, about, projects, footer, scrollbar, preloader (~770 lines) |
| `App.css` | Default CRA boilerplate (mostly unused) |

### 7.2 Important Patterns in `style.css`

- **Heavy use of `!important`**: Overrides Bootstrap defaults without custom SCSS.
- **Mobile-first media queries**: `@media (max-width: 767px)` handles tablets/phones.
- **CSS variables**: `--section-background-color`, `--image-gradient`, `--imp-text-color`.
- **z-index layering**: Particles at `z-index: -1`, content at `z-index: 1`, preloader at `999999`.

---

## 8. UX Features

| Feature | Implementation |
|---------|----------------|
| **Preloader** | `Pre.js` toggles `#preloader` / `#preloader-none` opacity |
| **Scroll lock during load** | `id={load ? "no-scroll" : "scroll"}` on app wrapper |
| **Scroll-to-top on navigation** | `ScrollToTop.js` using `useLocation` + `window.scrollTo(0,0)` |
| **Lazy image loading** | `loading="lazy"` on project card images |
| **Responsive images** | `sizes` attribute for responsive `<img>` |
| **SEO meta tags** | Open Graph, Twitter Card, description in `public/index.html` |

---

## 9. How to Run

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The app is optimized for static hosting (Vercel, Netlify, GitHub Pages).

---

## 10. Customization Guide

### Change Name / Role
- `src/components/Home/Home.js` → `<strong className="main-name"> YOUR NAME </strong>`
- `src/components/Home/Type.js` → Update `strings` array.

### Add a Project
- `src/components/Projects/Projects.js` → Add a new `<Col md={4}>` block with `<ProjectCard ... />`.
- Drop project screenshot into `src/Assets/Projects/`.

### Update Tech Icons
- `src/components/About/Techstack.js` → Add/remove `<Col>` blocks with `react-icons` components.

### Change Colors
- Edit CSS custom properties in `src/style.css` under `html { ... }`.

### Update Resume
- Replace `src/Assets/Abhinav P Resume.pdf` with your own PDF.

---

## 11. Summary

This portfolio is a **well-structured React SPA** that prioritizes:

1. **Visual impact** — particles, typewriter, parallax, purple glow effects.
2. **Developer identity** — monospace font, GitHub calendar, tech skill pills.
3. **Content modularity** — each section is a self-contained component with prop-driven data.
4. **Responsive design** — Bootstrap grid + custom mobile breakpoints.
5. **Zero backend** — Fully static, deployable anywhere.

It demonstrates solid React fundamentals: component composition, hooks (`useState`, `useEffect`), client-side routing, and CSS-in-JS-style theming via standard stylesheets.
