## CTech Labs Website Clone

A full multi-page React site mirroring ctechlab.com — same structure, navigation, sections, and visual feel. Static (no backend).

### Pages (separate routes)

- `/` — **US (Home):** Top header with logo + company tagline, image carousel banner, contact info bar, mission statement, "US" intro paragraph, the 3-circle methodology diagram (Business / Technology / Humanology + Raw Tech / Product Ideas / Innovation → Marketable Products), partners/associates strip, sidebar with news/blog cards
- `/design-consulting` — Design consulting services
- `/rd-advisory` — R & D Advisory
- `/products` — Product grid (LED lights, solar street lights, e-bikes, e-scooters, farm implements, graphene heaters, modular bridges, Dry-San toilet, etc.) with category filters
- `/ctech-club` — CTech Club info
- `/ctech-mart` — CTech Mart listings
- `/partners` — Partner organizations
- `/people` — Team members
- `/ctech-academy` — Academy programs
- `/contact` — Contact & Jobs (address, phone, email, jobs listing, contact form that opens mailto)

### Layout

- **Header:** Logo left ("CTECH — A Sine-IITB Company, Innovation Development Company"), full-width banner carousel center, contact card right (address, email, phone, "Customising Technologies — Creating Value" tagline)
- **Nav bar:** Light green horizontal bar with all sections (US, Design Consulting, R & D Advisory, Products, CTech Club, CTech Mart, Partners, People, CTech Academy, Contact & Jobs) — active state highlighted
- **Main content:** Two-column on desktop — left article area, right dark sidebar with news/blog cards (thumbnail + title)
- **Footer:** Address, quick links, social icons, copyright

### Functionality

- Auto-rotating image carousel on homepage (prev/next arrows, ~24 banner slides)
- Active nav link highlighting via TanStack Router
- Responsive: stacks single-column on mobile, hamburger menu under tablet
- Mailto contact form on `/contact`
- Smooth hover states on nav, cards, buttons
- Job listings as static cards with apply mailto links

### Design system

- Colors: light green nav (#c8e6b8-ish), white background, dark gray sidebar, yellow highlight banner for announcements, accent yellow/red for CTAs — matched to the original
- Typography: clean sans-serif (Inter or similar), bold dark headings
- The 3-circle methodology diagram rebuilt in SVG so it scales cleanly

### Technical

- TanStack Start file-based routes under `src/routes/` (one file per page)
- Shared `Header`, `NavBar`, `Sidebar`, `Footer` components in `src/components/`
- Carousel built with embla-carousel-react (already common in shadcn)
- Banner/product images: I'll use placeholders + reference URLs from ctechlab.com initially; you can swap with your own assets after
- Per-route `head()` metadata (title + description) for SEO
- Tailwind v4 tokens updated in `src/styles.css` to match the green/yellow palette
- All static — no Lovable Cloud needed

### Out of scope

- No CMS / admin
- No database, auth, or form submission storage (mailto only)
- No blog post detail pages (sidebar items link to anchors or external)