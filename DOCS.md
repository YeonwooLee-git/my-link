# [PRD] 마이링크 (My-Link) - 링크 통합 관리 서비스

## 1. 프로젝트 개요
*   **프로젝트명:** 마이링크 (My-Link)
*   **목적:** 사용자가 흩어져 있는 자신의 SNS, 블로그, 포트폴리오 링크를 하나의 페이지로 통합하여 관리하고 공유할 수 있는 서비스 제공.
*   **대상 사용자:** 인플루언서, 프리랜서, 구직자, 소상공인 등 온라인 활동이 활발한 모든 사용자.

## 2. 핵심 기능 목록

### 2.1 필수 기능 (MVP - Phase 1)
| 구분 | 기능명 | 설명 |
| :--- | :--- | :--- |
| **인증** | 소셜 로그인 | Google 계정을 통한 간편 로그인 |
| **초기값 설정** | 기본 정보 자동 할당 | Google 지메일 아이디의 앞부분(ID)을 `displayName`의 초기값으로 설정 |
| **프로필** | 개인 프로필 설정 | `displayName`, `bio`(한 줄 소개) 수정 (별도의 이미지 업로드 없음) |
| **URL 슬러그** | Display Name 기반 URL | `displayName`이 그대로 서비스의 고유 주소가 됨 (`mylink.com/@displayName`) |
| **편집 UI** | 인라인 편집 | 텍스트 클릭 시 즉시 수정 가능한 Inline Editing 방식 적용 |
| **링크** | 링크 관리 | URL 및 제목 설정, 드래그 앤 드롭으로 순서 변경 |
| **아이콘** | Google 파비콘 API | Google의 Favicon API를 사용하여 URL의 파비콘을 자동으로 표시 |
| **테마** | 기본 테마 적용 | 서비스에서 제공하는 기본 템플릿(배경색, 버튼 스타일) 선택 |
| **공유** | 링크 공유 | 자신의 마이링크 주소를 클립보드에 복사 |

### 2.2 선택 기능 (Advanced - Phase 2)
| 구분 | 기능명 | 설명 |
| :--- | :--- | :--- |
| **통계** | 방문 데이터 분석 | 총 방문자 수, 링크별 클릭 수(Click-through rate) 통계 |

---

## 3. 기능 상세 설명

### 3.1 회원가입 및 프로필 관리
*   **사용자 인증 및 초기화:** 
    *   사용자가 Google로 처음 로그인하면, 지메일 주소의 `@` 앞부분을 추출하여 `displayName`으로 자동 설정함.
*   **Display Name 및 URL:** 
    *   **`displayName`이 곧 서비스의 URL 슬러그**가 되며, 이를 수정하면 공유 주소도 함께 변경됨.
    *   따라서 `displayName`은 서비스 내에서 고유해야 함.
*   **프로필 편집:** 
    *   `displayName`과 `bio` 모두 리스트에서 즉시 수정 가능한 **인라인 편집** 방식 적용.
    *   별도의 프로필 이미지 업로드 기능은 제공하지 않음.

### 3.2 링크 관리 시스템 (Link Editor)
*   **인라인 편집:** 링크 제목이나 URL을 클릭하여 즉시 수정할 수 있으며, 포커스를 벗어날 때 자동 저장됨.
*   **파비콘 아이콘:** Google Favicon API(`https://www.google.com/s2/favicons?domain=...`)를 활용하여 사이트 아이콘을 실시간 렌더링.
*   **실시간 미리보기:** 편집 중인 내용이 우측의 모바일 뷰 예시 화면에 실시간으로 반영됨.

### 3.3 렌더링 및 스타일링 (User Page)
*   **고성능 렌더링:** SSR/ISR을 활용하여 사용자 페이지의 로딩 속도를 극대화.
*   **반응형 디자인:** 모바일 우선(Mobile-first) 디자인 적용.

### 3.4 대시보드 및 통계
*   **클릭 추적:** 사용자가 공유한 링크를 클릭할 때 로그를 기록하고, 이를 통계 데이터로 제공.

---

## 4. 데이터베이스 모델링 (NoSQL - Sub-collection 구조)

### 4.1 Users (Collection)
*   **Document ID:** `uid` (Auth 사용자 고유 ID)
    *   **`displayName`**: string (URL 슬러그로 사용, 중복 불가)
    *   `bio`: string (한 줄 소개)
    *   `theme`: string (선택된 테마 ID)
    *   `createdAt`: timestamp
    *   **Links (Sub-collection)**
        *   **Document ID:** `linkId` (자동 생성)
            *   `title`: string (링크 제목)
            *   `url`: string (연결될 URL)
            *   `order`: number (정렬 순서)
            *   `clicks`: number (클릭 횟수)
            *   `isActive`: boolean (활성화 여부)
            *   `updatedAt`: timestamp
