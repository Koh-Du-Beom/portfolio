# 고두범 포트폴리오

프론트엔드 중심 풀스택 개발자 고두범의 개인 포트폴리오입니다. 경력과 프로젝트, 기술 역량을 하나의 인터랙티브 페이지에서 소개합니다.

- 배포 주소: [portfolio-ten-mu-8he06n7glf.vercel.app](https://portfolio-ten-mu-8he06n7glf.vercel.app)
- GitHub: [Koh-Du-Beom](https://github.com/Koh-Du-Beom)

## 주요 구성

- 3D 정사면체 내비게이션과 포인트 클라우드 Hero
- 개발자로서의 관점, 학력, 경력, 수상 및 자격 정보
- 프로젝트별 담당 업무, 기술 스택, 성과 및 기여도
- 데스크톱과 모바일에 대응하는 반응형 인터페이스
- 검색 엔진을 위한 Metadata, Sitemap, Robots 설정

## 기술 스택

- Framework: Next.js 16, React 19, TypeScript
- UI: Tailwind CSS 4, Framer Motion
- 3D: Three.js, React Three Fiber, Drei
- Font: Pretendard
- Deployment: Vercel

## 프로젝트 구조

```text
src/
├── app/                 # App Router, 전역 스타일 및 SEO 설정
├── components/
│   ├── canvas/          # Three.js 기반 3D 화면
│   ├── sections/        # About, Experience, Projects 등
│   └── ui/              # Header, Modal 등 공통 UI
└── data/                # 프로젝트와 기술 스택 데이터
```

## 로컬 실행

Node.js와 npm이 설치된 환경에서 실행합니다.

```bash
git clone https://github.com/Koh-Du-Beom/portfolio.git
cd portfolio
npm ci
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 명령어

```bash
npm run dev       # 개발 서버 실행
npm run lint      # ESLint 검사
npm run build     # 프로덕션 빌드
npm run start     # 빌드 결과 실행
```

## Vercel CLI 배포

### 1. 최초 설정

Vercel CLI를 설치하고 계정에 로그인합니다.

```bash
npm install --global vercel@latest
vercel --version
vercel login
```

프로젝트 루트에서 로컬 디렉터리를 기존 Vercel 프로젝트와 연결합니다.

```bash
vercel link
```

대화형 질문에서 사용할 계정 또는 팀을 선택한 뒤 기존 포트폴리오 프로젝트를 선택합니다. 연결 정보는 Git에서 제외된 `.vercel/` 디렉터리에 저장됩니다.

환경 변수가 등록되어 있다면 로컬 환경으로 가져옵니다.

```bash
vercel env pull .env.local
```

현재 포트폴리오는 별도의 필수 환경 변수 없이 실행할 수 있으므로, 등록된 환경 변수가 없다면 이 단계는 생략할 수 있습니다.

### 2. Preview 배포

코드를 검증한 뒤 Preview 환경에 먼저 배포합니다.

```bash
npm run lint
npm run build
vercel deploy
```

배포가 끝나면 CLI가 Preview URL을 출력합니다. 빌드 로그도 함께 확인하려면 다음 명령을 사용합니다.

```bash
vercel deploy --logs
```

### 3. Production 배포

Preview 확인을 마쳤다면 Production 환경에 배포합니다.

```bash
vercel deploy --prod
```

성공하면 해당 배포가 프로젝트의 Production 도메인에 연결됩니다.

### 4. 배포 확인

최근 배포 목록과 상세 상태를 확인할 수 있습니다.

```bash
vercel list
vercel inspect <deployment-url>
```

Deployment Protection이 적용된 Preview도 CLI에서 확인하려면 다음 명령을 사용합니다.

```bash
vercel curl / --deployment <deployment-url>
```

일상적인 배포 흐름은 다음 세 단계입니다.

```bash
vercel deploy
# Preview URL에서 화면 확인
vercel deploy --prod
```

자세한 내용은 [Vercel CLI 배포 공식 문서](https://vercel.com/docs/projects/deploy-from-cli)에서 확인할 수 있습니다.
