# 🚀 Next.js 템플릿

🌐 지원 언어: [English](./README.md) | [Русский](./README.ru.md)

**Next.js + TypeScript + Tailwind + shadcn/ui** 스타터 템플릿.  
포매터와 기본 UI 컴포넌트가 미리 설정되어 있습니다.

---

## 🔧 기술 스택

- **Next.js 14 (App Router)**, **React**, **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
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
