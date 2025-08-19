# 🚀 Next.js Template

🌐 Available languages: [Русский](./README.ru.md) | [한국어](./README.ko.md)

Starter template for **Next.js + TypeScript + Tailwind + shadcn/ui**.  
Preconfigured with formatters and base UI components.

---

## 🔧 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-20232a?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ready-000000?logo=radixui&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-configured-F7B93E?logo=prettier&logoColor=000)

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
