# 🚀 Next.js Template

🌐 Available languages: [Русский](./README.ru.md) | [한국어](./README.ko.md)

Starter template for **Next.js + TypeScript + Tailwind + shadcn/ui**.  
Preconfigured with formatters and base UI components.

---

## 🔧 Tech Stack

- **Next.js 14 (App Router)**, **React**, **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
  - Installed components: `button`, `input`, `label`, `textarea`, `card`, `sonner`
- **Prettier** with plugins:
  - `prettier-plugin-tailwindcss`
  - `prettier-plugin-organize-imports`
  - `prettier-plugin-sort-json`
  - `prettier-plugin-packagejson`
  - `prettier-plugin-jsdoc`

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

---

## 📂 Structure

```
src/
  app/          # routes & pages (App Router)
  components/   # UI components (shadcn + custom)
  lib/          # utilities/helpers
```

## 🎨 Shadcn

Add new components:

```bash
npx shadcn-ui@latest add <component>
```

---

## 📦 Build / Deploy

```bash
npm run build
npm run start
```

---

## 🗺️ Roadmap

- Authentication
- CRUD for entities
- Localization
- Theme (light/dark)
- Zustand for global state (if needed)
