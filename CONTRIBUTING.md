# Contributing to Unreal AI

Thank you for your interest in improving Unreal AI. This guide helps you set up your environment, follow project conventions, and submit effective changes.

Unreal is an OpenAI-compatible, on-chain metered AI compute network with products across Studio, Console, a provider marketplace, and an OpenAI-compatible API. For deeper background on the mission and the pivot from a single app to a network, see `aidocs/info-about-founding/backstory.md`.

---

## 1) Getting started

Prerequisites

- bun latest

Install and run the website locally

```bash
bun install
bun run dev
```

Build and preview

```bash
bun run build
bun run preview
```

Useful scripts

- `bun run dev` — start local dev server (Vite)
- `bun run build` — type-check and build for production
- `bun run lint` — run ESLint

Project layout (high level)

- `src/` — React + TypeScript app code
- `public/` — static assets
- `aidocs/` — internal docs (including the founding backstory)

---

## 2) Contribution workflow

1. Discuss first if the change is substantial (open an issue or start a discussion).
2. Create a topic branch from `main`:
   - `feat/<short-description>` for features
   - `fix/<short-description>` for bug fixes
   - `chore/<short-description>` for chores and tooling
3. Write clear, scoped commits using Conventional Commits (see below).
4. Keep PRs small and focused; link the issue number in the PR description.
5. Ensure the checklist passes before requesting review:
   - [ ] `bun run lint` passes
   - [ ] `bun run build` passes (types OK)
   - [ ] Screenshots/GIFs for UI changes
   - [ ] Updated docs where applicable (README or files under `aidocs/`)

We aim for quick, constructive reviews. Please be responsive to feedback and feel free to ask for clarification.

---

## 3) Commit message conventions (Conventional Commits)

Format

```
<type>(optional-scope): <short summary>

<body>

<footer>
```

Common types

- `feat:` a new feature
- `fix:` a bug fix
- `docs:` documentation only changes
- `style:` formatting, missing semi-colons, etc.; no code change
- `refactor:` neither fixes a bug nor adds a feature
- `perf:` performance improvements
- `test:` adding or correcting tests
- `chore:` tooling, CI, or maintenance

Examples

- `feat(console): add wallet-connected key management page`
- `fix(router): correct meter rounding in receipt payload`
- `docs: expand README quickstart with cURL example`

---

## 4) Code style and architecture notes

- Language & framework: React + TypeScript + Vite
- Styling: Tailwind CSS (v4) is available. Prefer utility classes for layout; use `tailwind-merge` to combine classes safely.
- Variants: Use `class-variance-authority` (CVA) for component variants rather than ad-hoc string concatenation.
- Icons: Use `lucide-react` for a consistent icon set.
- Animation: `framer-motion` and `tw-animate-css` are available for motion/animations.
- Components: Favor small, composable components. Keep files focused; colocate component-specific styles and tests (when present).
- Type safety: Prefer explicit types for props and return values. Avoid `any` unless strictly necessary.
- Linting: Run `bun run lint` before pushing. Address warnings where practical.

File naming (suggested)

- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Hooks and utilities: `camelCase.ts`
- Asset files: descriptive, kebab-case (e.g., `landing-hero.png`)

Accessibility & UX

- Provide alternative text for images and icons where appropriate.
- Ensure sufficient color contrast and keyboard navigation.
- Keep animations subtle and respect reduced motion preferences when feasible.

---

## 5) Documentation updates

- High-level docs belong in `README.md`.
- Product/vision/backstory and deeper context belong under `aidocs/`. The canonical origin story is `aidocs/info-about-founding/backstory.md`.
- If you add or change user-facing behavior, update the relevant docs and include a short note in your PR.

---

## 6) Security and responsible disclosure

If you discover a vulnerability or security-sensitive issue:

- Do not open a public issue with proof-of-concept details.
- Use a private channel (e.g., security advisory or direct contact to maintainers) to disclose. We’ll coordinate a fix and disclosure timeline.

---

## 7) Code of Conduct

We follow the spirit of the Contributor Covenant (v2.1). Be respectful, inclusive, and collaborative. Harassment and disrespectful behavior are not tolerated.

---

## 8) Areas where help is especially welcome

- Website UX, responsive layout, and accessibility improvements
- Example integrations for the OpenAI-compatible API (client snippets, cURL demos)
- Provider and marketplace UI flows (mockups and implementation)

---

## 9) License

If a license is added to this repository, contributions will be accepted under that license. Until then, by contributing you agree that your changes may be redistributed under a future project license.

Thank you for helping build Unreal AI!
