# 🚀 Next.js Шаблон

🌐 Доступные языки: [English](./README.md) | [한국어](./README.ko.md)

Шаблон для быстрого старта проектов на **Next.js + TypeScript + Tailwind + shadcn/ui**.  
Уже преднастроены форматтеры и базовые UI-компоненты.

---

## 🔧 Стек

- **Next.js 14 (App Router)**, **React**, **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
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
