# 🚀 Next.js Шаблон

🌐 Доступные языки: [English](./README.md) | [한국어](./README.ko.md)

Шаблон для быстрого старта проектов на **Next.js + TypeScript + Tailwind + shadcn/ui**.  
Уже преднастроены форматтеры и базовые UI-компоненты.

---

## 🔧 Стек

![Next.js](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.dependencies.next&label=Next.js&logo=nextdotjs&color=000&labelColor=444&cacheSeconds=3600)
![React](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.dependencies.react&label=React&logo=react&color=20232a&labelColor=444&cacheSeconds=3600)
![TypeScript](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.devDependencies.typescript&label=TypeScript&logo=typescript&color=3178c6&labelColor=444&cacheSeconds=3600)
![TailwindCSS](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ziyou-saram/Next.js-Starter-Template/main/package.json&query=$.devDependencies.tailwindcss&label=TailwindCSS&logo=tailwindcss&color=06b6d4&labelColor=444&cacheSeconds=3600)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ready-111111?logo=radixui&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-configured-f7b93e?logo=prettier&logoColor=000)

- Установленные компоненты: `button`, `input`, `label`, `textarea`, `card`, `sonner`
- **Prettier** с плагинами:
  - `prettier-plugin-tailwindcss`
  - `prettier-plugin-organize-imports`
  - `prettier-plugin-sort-json`
  - `prettier-plugin-packagejson`
  - `prettier-plugin-jsdoc`

---

## 🚀 Быстрый старт

```bash
# Установить зависимости
npm install

# Запуск dev-сервера
npm run dev
```

---

## 📂 Структура

```
src/
  app/          # роуты и страницы (App Router)
  components/   # UI-компоненты (shadcn + кастомные)
  lib/          # утилиты/хелперы
```

## 🎨 Shadcn

Добавление новых компонентов:

```bash
npx shadcn-ui@latest add <component>
```

---

## 📦 Билд / деплой

```bash
npm run build
npm run start
```

---

## 🗺️ Roadmap

- Аутентификация
- CRUD для сущностей
- Локализация
- Тема (light/dark)
- Zustand для глобального состояния (по необходимости)
