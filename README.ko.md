# 🚀 Next.js 템플릿

🌐 지원 언어: [English](./README.md) | [Русский](./README.ru.md)

**Next.js + TypeScript + Tailwind + shadcn/ui** 스타터 템플릿.  
포매터와 기본 UI 컴포넌트가 미리 설정되어 있습니다.

---

## 🔧 기술 스택

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-20232a?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ready-000000?logo=radixui&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-configured-F7B93E?logo=prettier&logoColor=000)

- 설치된 컴포넌트: `button`, `input`, `label`, `textarea`, `card`, `sonner`
- **Prettier** 플러그인 포함:
  - `prettier-plugin-tailwindcss`
  - `prettier-plugin-organize-imports`
  - `prettier-plugin-sort-json`
  - `prettier-plugin-packagejson`
  - `prettier-plugin-jsdoc`

---

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 📂 구조

```
src/
  app/          # 라우트 및 페이지 (App Router)
  components/   # UI 컴포넌트 (shadcn + custom)
  lib/          # 유틸리티/헬퍼
```

## 🎨 Shadcn

새 컴포넌트 추가:

```bash
npx shadcn-ui@latest add <component>
```

---

📦 빌드 / 배포

```bash
npm run build
npm run start
```

---

## 🗺️ 로드맵

- 인증(Authentication)
- 엔티티 CRUD
- 다국어
- 테마 (라이트/다크)
- 전역 상태 관리를 위한 Zustand (필요 시)
