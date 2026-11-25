# React Audio

기존 React Audio 클라이언트를 리메이크하는 프로젝트입니다.

## 개발

Node.js 22.12 이상, pnpm 10.18.0을 사용합니다.

```sh
pnpm install
pnpm dev
```

```sh
pnpm lint
pnpm build
pnpm preview
```

## 구성

- Vite + React + TypeScript
- Panda CSS (PostCSS 연동, `styled-system/` 자동 생성)
- React Router (브라우저 라우팅)
- music-metadata (오디오 태그 및 포맷 정보 파싱)
- 네이티브 HTMLAudioElement 기반 재생 예정

운영 배포 시 클라이언트 경로 요청을 `index.html`로 연결하는 SPA fallback 설정이 필요합니다.
