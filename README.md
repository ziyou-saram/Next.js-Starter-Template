# 🚀 Next.js Template

🌐 Available languages: [Русский](./README.ru.md) | [한국어](./README.ko.md)

Starter template for **Next.js + TypeScript + Tailwind + shadcn/ui**.  
Preconfigured with formatters and base UI components.

---

## 🔧 Tech Stack

![Next.js](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.dependencies.next&label=Next.js&logo=nextdotjs&color=000&labelColor=444&cacheSeconds=3600)
![React](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.dependencies.react&label=React&logo=react&color=20232a&labelColor=444&cacheSeconds=3600)
![TypeScript](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.devDependencies.typescript&label=TypeScript&logo=typescript&color=3178c6&labelColor=444&cacheSeconds=3600)
![TailwindCSS](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.devDependencies.tailwindcss&label=TailwindCSS&logo=tailwindcss&color=06b6d4&labelColor=444&cacheSeconds=3600)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ready-111111?logo=radixui&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-configured-f7b93e?logo=prettier&logoColor=000)

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
