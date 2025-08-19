# 🚀 Next.js Шаблон

🌐 Доступные языки: [English](./README.md) | [한국어](./README.ko.md)

Шаблон для быстрого старта проектов на **Next.js + TypeScript + Tailwind + shadcn/ui**.  
Уже преднастроены форматтеры и базовые UI-компоненты.

---

## 🔧 Стек

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-20232a?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ready-000000?logo=radixui&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-configured-F7B93E?logo=prettier&logoColor=000)

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
