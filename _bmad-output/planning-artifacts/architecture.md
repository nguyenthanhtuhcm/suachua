---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
workflowType: 'architecture'
lastStep: 8
status: 'complete'
completedAt: '2026-05-03'
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/product-brief-suachua.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
  - _bmad-output/planning-artifacts/research/domain-uav-repair-practical-training-entry-level-uav-data-services-vietnam-research-2026-05-03.md
project_name: 'suachua'
user_name: 'ThanhTu'
date: '2026-05-03'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
Các FR đòi hỏi một hệ thống luồng làm việc (workflow engine) tuyến tính tập trung vào việc thu thập, lưu trữ, và phân tích dữ liệu lỗi UAV. 
- **Accountless Intake:** Đòi hỏi kiến trúc định danh dựa trên số điện thoại và session/mã UUID ẩn (magic link/tracker link) thay vì JWT/Cookie truyền thống.
- **Diagnostic Engine:** Cần một cấu trúc Schema linh hoạt để lưu trữ Report kết hợp với bằng chứng cụ thể (log, video), đồng thời hỗ trợ phân loại rủi ro.
- **Partner & Upsell Workflow:** Cần cơ chế tạo và chia sẻ gói dữ liệu giới hạn (Referral Package) cho bên thứ 3 dưới sự đồng ý của khách.

**Non-Functional Requirements:**
- **Performance & Resilience:** Đòi hỏi cơ chế Upload đa luồng (Multipart/Resumable) có khả năng tự động retry (thử lại) ở client-side do khách thao tác ngoài hiện trường với file video/log hàng trăm MB qua mạng 4G chập chờn.
- **Security & Privacy:** Yêu cầu cơ chế RBAC nội bộ chặt chẽ để tách biệt dữ liệu Private (khách hàng) và Public (Case study ẩn danh), cùng với module quản lý Consent (Audit Trail) minh bạch.
- **Traceability:** Bất kỳ thay đổi cấu hình nào cũng cần lưu trữ versioning hoặc diff-log để đảm bảo tính bất biến.

**Scale & Complexity:**
Quy mô của dự án ở giai đoạn MVP tập trung vào việc số hóa quy trình dịch vụ thủ công hơn là tự động hóa sâu.
- Primary domain: Web Full-stack (SSR/CSR) kết hợp Cloud Object Storage.
- Complexity level: Medium (Logic nghiệp vụ rõ ràng nhưng xử lý file và rẽ nhánh trạng thái khá phức tạp).
- Estimated architectural components: Khoảng 5-6 module chính (Intake Portal, Status Tracker, Internal Dashboard, Storage Gateway, Report Generator, Consent/Referral Manager, và module State Machine độc lập).

### Technical Constraints & Dependencies

- **Upload Architecture:** Bắt buộc sử dụng Pre-signed URL (VD: AWS S3, Cloudflare R2) để client ném file trực tiếp lên Cloud, bypass Backend.
- **Real-time Tracker:** Bắt buộc tích hợp Server-Sent Events (SSE) cho giao diện Pizza Tracker để đảm bảo hiệu ứng "Wow" realtime (Không hạ cấp xuống Polling).
- **State Management:** Backend cần một module **State Machine** độc lập, được phân tách rõ ràng và bảo vệ qua API endpoint với validation cực kỳ nghiêm ngặt. Tại Frontend, ưu tiên Local State và Zustand, đảm bảo TDD cho logic chuyển trạng thái.
- **UI Framework:** Shadcn/ui + Tailwind CSS, yêu cầu tuân thủ Clean Architecture (tách UI và Business Logic).
- **No AI/Automated Parsing:** MVP vận hành bằng trí tuệ con người (KTV đọc log).

### Cross-Cutting Concerns Identified

- **File Storage & Retention Lifecycle:** Quản lý vòng đời dữ liệu, tự động xóa file sau hạn định và phân tách thư mục theo chuẩn POSIX.
- **State Machine Rules:** Ràng buộc điều kiện chuyển trạng thái nghiêm ngặt (VD: Không đóng case nếu chưa trả Report). Mọi rẽ nhánh phải có unit test phủ 100%.
- **Audit & Evidence Traceability:** Đảm bảo mọi kết luận trong Triage Report đều mapping với ID của file bằng chứng tương ứng.
- **Error Handling & Network Fallback:** Xử lý đứt cáp mạng khi upload bằng UI tinh tế (báo đang thử lại thay vì báo lỗi đỏ), khôi phục session an toàn qua OTP/Zalo khi mất link.

## Starter Template Evaluation

### Primary Technology Domain

**Web Application (Full-stack)** dựa trên phân tích bối cảnh dự án (yêu cầu xử lý Frontend phức tạp kết hợp với API Routes nhẹ gọn, không cần Backend repo tách biệt ngay từ đầu).

### Starter Options Considered

1. **`create-next-app@latest` (Official Next.js CLI)**: Công cụ tiêu chuẩn của Vercel. Cung cấp nền tảng sạch nhất, hỗ trợ sẵn Tailwind CSS, TypeScript, ESLint và App Router mới nhất.
2. **ChadNext / SaaSJet**: Các boilerplate cộng đồng rất phổ biến hiện nay, được tích hợp sẵn Next.js, Shadcn UI, Zustand, Auth, và Database (Prisma/Drizzle). Tuy nhiên, chúng mang theo lượng lớn code thừa (như hệ thống đăng nhập phức tạp) đi ngược lại yêu cầu **Accountless Intake** (luồng không cần tài khoản) của dự án chúng ta.

### Selected Starter: Official Next.js CLI + Custom Setup

**Rationale for Selection:**
Theo nguyên tắc "Lean MVP" và để đáp ứng chính xác các yêu cầu bảo mật/kiến trúc riêng biệt (đặc biệt là State Machine độc lập), việc chọn một boilerplate khổng lồ (như ChadNext) sẽ sinh ra kỹ thuật nợ (technical debt) ngay từ ngày đầu tiên vì ta phải xóa bớt code thừa. Lựa chọn tối ưu nhất là dùng công cụ gốc `create-next-app` để lấy bộ khung sạch, sau đó tích hợp `shadcn` và `zustand` qua CLI chính thức. Điều này giữ cho dự án nhẹ gọn, linh hoạt tuyệt đối và tuân thủ đúng định hướng kỹ thuật.

**Initialization Command:**

```bash
# 1. Khởi tạo Next.js App Router (sạch)
npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

# 2. Tích hợp thư viện UI
npx shadcn@latest init -d

# 3. Cài đặt thư viện State Management
npm install zustand

# 4. Cài đặt Framework Testing phục vụ TDD (Bắt buộc từ commit zero)
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
TypeScript với cấu hình `strict` được bật mặc định, chạy trên nền tảng Next.js (Node.js/Edge Runtime).

**Styling Solution:**
Tailwind CSS được cấu hình tối ưu. Shadcn/ui thiết lập sẵn hệ thống CSS Variables để quản lý theme.

**Build Tooling:**
Next.js Compiler (sử dụng SWC) tối ưu hóa tốc độ build, tự động code-splitting và bundling.

**Testing Framework:**
Cấu hình thủ công **Vitest** kết hợp với `@testing-library/react` để đảm bảo thực hiện TDD (Test-Driven Development) cho State Machine module.

**Code Organization:**
Cấu trúc `src/` an toàn:
- Routing nằm tại `src/app/` (App Router).
- Các UI Components dùng chung nằm gọn tại `src/components/ui/` do shadcn quản lý.
- Dễ dàng tạo các thư mục độc lập cho Business Logic (`src/lib/domain/` hoặc `src/modules/`).

**Development Experience:**
Hỗ trợ Hot Module Replacement (HMR) cực nhanh, tự động linting khi commit, và VS Code tự động gợi ý class của Tailwind.

**Note:** Project initialization using this command should be the first implementation story.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Data Architecture & Storage: Supabase BaaS (Postgres + Storage + Realtime)
- API & Communication: Next.js Server Actions

**Important Decisions (Shape Architecture):**
- Data Validation: Zod (kết hợp `next-safe-action`).
- Authentication: Supabase Anonymous Auth (Hỗ trợ Accountless Intake).
- Database ORM: Sẽ sử dụng Prisma hoặc Drizzle ORM để quản lý schema.

**Deferred Decisions (Post-MVP):**
- Cổng thanh toán tự động (Thanh toán sẽ được xử lý thủ công qua chuyển khoản/Referral trong MVP).
- AI Parsing Engine (KTV sẽ đọc file log thủ công trong MVP).

### Data Architecture

- **Decision:** Supabase BaaS
- **Version:** `supabase-js v2.105.1` (Latest Stable)
- **Rationale:** Supabase đóng vai trò "Viên đạn bạc" cho dự án này. Nó xử lý toàn bộ cơ sở hạ tầng phức tạp: Cung cấp Pre-signed URLs gốc cho file log/video cực lớn (qua Storage) và WebSocket gốc cho Pizza Tracker (qua Realtime), loại bỏ hoàn toàn nhu cầu phải xây dựng một Node.js backend cồng kềnh.
- **Affects:** Intake workflow, File storage lifecycle, Pizza Tracker UI.

### Authentication & Security

- **Decision:** Supabase Anonymous Auth + Row-Level Security (RLS) + `@supabase/ssr`
- **Rationale:** Hỗ trợ mô hình "Accountless". Hệ thống tạo một user ẩn danh cho mỗi phiên sửa chữa. Các quy tắc RLS (tại tầng Database Postgres) đảm bảo khách hàng chỉ có thể đọc/ghi dữ liệu có gắn với ID phiên (Tracker URL) của họ, đảm bảo tính riêng tư tuyệt đối cho file log. Bắt buộc cấu hình qua `@supabase/ssr` để tránh session leak giữa Server và Client.
- **Affects:** Intake routing, Data privacy, Security middleware.

### API & Communication Patterns

- **Decision:** Next.js Server Actions + Zod + `next-safe-action`
- **Rationale:** Mang lại Type-safety từ đầu đến cuối. Logic nghiệp vụ (State Machine) nằm trên server. Các UI components (như nút Submit) sẽ gọi trực tiếp các Server Actions này thông qua lớp bọc `next-safe-action`, giúp tự động bắt lỗi bằng Zod và chuẩn hóa response gửi về frontend mà không cần try-catch thủ công lặp lại.
- **Affects:** Frontend data fetching, State Machine module boundaries, Error Handling.

### Frontend Architecture

- **Decision:** Zustand + Shadcn/ui + Tailwind CSS
- **Version:** (Kế thừa từ Step 3 Starter Template).
- **Rationale:** Zustand sẽ giữ Global State cục bộ cho luồng điền form Intake gồm nhiều bước (Multi-step form) một cách nhẹ nhàng nhất, trong khi Shadcn/ui đảm bảo thiết kế chuyên nghiệp.
- **Affects:** Form implementation, UI components.

### Infrastructure & Deployment

- **Decision:** Vercel (Hosting Frontend) + Supabase Cloud (Hosting DB & Storage)
- **Rationale:** Tiêu chuẩn công nghiệp tối ưu nhất cho Next.js, đòi hỏi nỗ lực DevOps gần như bằng 0 trong giai đoạn 90-ngày MVP.
- **Affects:** CI/CD pipelines, Environment Variables management.

### Decision Impact Analysis

**Implementation Sequence:**
1. Khởi tạo Next.js + Shadcn + Vitest + next-safe-action + @supabase/ssr.
2. Thiết lập dự án Supabase (Database schemas, Storage buckets, RLS policies).
3. Lập trình Core Logic cho State Machine (Áp dụng nghiêm ngặt TDD với Vitest).
4. Viết các Next.js Server Actions bọc bên ngoài State Machine bằng `next-safe-action`.
5. Lập trình Frontend UI (Intake Flow, Upload Component, Pizza Tracker).

**Cross-Component Dependencies:**
- Mọi Server Actions phải phụ thuộc vào State Machine logic để biết việc chuyển trạng thái có hợp lệ hay không.
- Pizza Tracker UI phụ thuộc trực tiếp vào Supabase Realtime Client để lắng nghe các thay đổi từ bảng `cases` trong Database.

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:**
Có 4 khu vực cực kỳ dễ xảy ra xung đột (conflict) giữa các AI Agent nếu không thống nhất quy tắc:
1. Đặt tên (Naming: DB vs Code).
2. Phân vùng cấu trúc (Structure: Nơi chứa logic vs UI).
3. Định dạng trả về (Return Format).
4. Giao tiếp qua lại (Communication / API).

### Naming Patterns

**Database Naming Conventions:**
- Sử dụng `snake_case` tuyệt đối cho Supabase Tables & Columns (VD: `diagnostic_reports`, `case_id`).
- TypeScript Types sử dụng Type Generation của Supabase để tự động ánh xạ.

**API & Code Naming Conventions:**
- **Components:** `PascalCase` cho tên file và tên hàm (VD: `PizzaTracker.tsx`, `export function PizzaTracker()`).
- **Server Actions:** Dùng `camelCase` có hậu tố `Action` (VD: `submitIntakeAction`). File chứa action dùng `kebab-case` (VD: `submit-intake.ts`).
- **Zod Schemas:** Dùng hậu tố `Schema` (VD: `intakeFormSchema`).

### Structure Patterns

**Project Organization & Boundaries:**
Các Agent BẮT BUỘC tôn trọng ranh giới thư mục:
- `src/app/`: CHỈ chứa logic Routing. Tuyệt đối không chứa logic xử lý data fetching.
- `src/components/ui/`: CHỈ dành cho các UI Component thuần túy của Shadcn.
- `src/components/features/`: Chứa các Component mang nghiệp vụ của dự án (VD: `IntakeForm.tsx`).
- `src/lib/actions/`: Nơi duy nhất chứa các Server Actions.
- `src/lib/schemas/`: Nơi duy nhất chứa Zod Schemas.
- `src/store/`: Chứa các Zustand stores (VD: `useIntakeStore.ts`).

**Supabase Client Pattern:**
- `src/lib/supabase/`: CHỈ chứa 3 file cấu hình khởi tạo theo chuẩn `@supabase/ssr` (`server.ts`, `client.ts`, `action.ts`). Các Agent KHÔNG được import trực tiếp `@supabase/supabase-js` ở bất kỳ đâu khác.

### Format Patterns

**Server Actions Response Format:**
Tất cả các Server Actions BẮT BUỘC trả về chung một chuẩn giao tiếp `ActionResponse<T>` đã được thiết kế sẵn (thường qua thư viện `next-safe-action`):
```typescript
type ActionResponse<T> = {
  success: boolean;
  data?: T;
  serverError?: string; // Dùng cho Toast Notification (Lỗi mạng, lỗi Supabase)
  validationErrors?: Record<string, string[]>; // Dùng cho Form Field Errors (Tô đỏ input)
}
```

### Communication Patterns

**State Machine Domain-Driven Rules:**
- Tuyệt đối CẤM các thao tác cập nhật (CRUD) trực tiếp (VD: `updateCase({ status: 'IN_REVIEW' })`).
- Mọi thao tác chuyển đổi trạng thái phải được gói trong các hàm Domain-Driven (Hành động có ý nghĩa nghiệp vụ) để kiểm tra luồng chặt chẽ. VD: `acceptCaseAction()`, `rejectCaseAction()`, `uploadEvidenceAction()`.

**Error Handling & State Patterns:**
- Không quăng (throw) error trực tiếp ra màn hình làm sập UI (Trừ ErrorBoundary).
- Database là Single Source of Truth. Zustand chỉ đóng vai trò "Draft State" (Trạng thái nháp) trong quá trình điền form Intake.

### Enforcement Guidelines

**All AI Agents MUST:**
1. **Tuân thủ "Code-as-Contract":** Viết chú thích TSDoc/JSDoc rõ ràng (bao gồm `@returns`, `@throws`) trên đầu mọi hàm Server Actions và State Machine để các Agent đến sau tự đọc hiểu luồng nghiệp vụ.
2. Đọc file `@/lib/supabase/client.ts` trước khi đụng vào Database.
3. Không bao giờ viết câu lệnh SQL raw.
4. Chạy `npm run test` sau khi sửa đổi bất kỳ logic nào trong thư mục `src/lib/actions/`.

## Project Structure & Boundaries

### Complete Project Directory Structure

Cấu trúc thư mục được thiết kế theo chuẩn Next.js App Router kết hợp với Clean Architecture (tách biệt UI và Domain Logic).

```text
suachua/
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── vitest.config.ts           # Cấu hình testing (TDD)
├── components.json            # Cấu hình Shadcn/ui
├── .env.local                 # Chứa Supabase URL & Anon Key
├── src/
│   ├── app/                   # App Router (Routing Only)
│   │   ├── (public)/          # Các trang không cần login hệ thống
│   │   │   ├── track/[id]/    # Pizza Tracker UI (dựa vào Case ID)
│   │   │   └── page.tsx       # Landing & Accountless Intake Form
│   │   ├── (internal)/        # Khu vực dành cho KTV
│   │   │   └── triage/        # Giao diện Diagnostic Report
│   │   ├── api/               # Route Handlers (Chỉ dùng cho Webhooks/External)
│   │   ├── globals.css        # Tailwind directives & CSS Variables
│   │   └── layout.tsx         # Root Layout
│   ├── components/            # Giao diện
│   │   ├── ui/                # Shadcn/ui primitives (Button, Card, Form...)
│   │   ├── features/          # UI Components gắn liền với nghiệp vụ
│   │   │   ├── intake/        # Multi-step Form, Uploader
│   │   │   ├── tracker/       # Pizza Tracker Components
│   │   │   └── triage/        # Form phân tích lỗi cho KTV
│   │   └── shared/            # Shared layouts (Header, Footer, Loaders)
│   ├── lib/                   # Logic Cốt lõi
│   │   ├── utils/             # Các hàm tiện ích (VD: cn() của Shadcn, formatters)
│   │   ├── actions/           # Next.js Server Actions (Bọc bởi next-safe-action)
│   │   │   ├── intake.actions.ts
│   │   │   └── case.actions.ts
│   │   ├── schemas/           # Zod Validation Schemas
│   │   │   ├── intake.schema.ts
│   │   │   └── triage.schema.ts
│   │   ├── supabase/          # Supabase Client Initializers (@supabase/ssr)
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── action.ts
│   │   ├── storage/           # Logic giao tiếp Supabase Storage (Pre-signed URL, Resumable Upload)
│   │   │   └── uploader.ts
│   │   └── domain/            # 🔴 CORE DOMAIN LOGIC (State Machine)
│   │       ├── state-machine.ts
│   │       └── constants.ts
│   ├── store/                 # Global Client State
│   │   └── use-intake-store.ts# Zustand store cho Intake Draft
│   └── types/                 # Global Types
│       ├── database.types.ts  # Generated từ Supabase CLI
│       └── index.types.ts     # Derived types từ Schema
└── tests/                     # Unit & Integration Tests (Vitest)
    ├── domain/                # Test cho State Machine (Logic chuyển trạng thái)
    └── actions/               # Test cho Server Actions (Validation, Error)
```

### Architectural Boundaries

**API Boundaries (Ranh giới Giao tiếp):**
- **Frontend → Backend:** Component gọi trực tiếp các Server Actions trong `src/lib/actions/`. Không sử dụng `fetch('/api/...')` nội bộ.
- **Backend → Database:** Server Actions giao tiếp với Database qua Supabase Server Client.
- **Realtime (Tracker):** Frontend (`tracker` components) mở WebSocket trực tiếp tới Supabase Realtime qua Supabase Client Client (ẩn danh).
- **Storage Direct Upload:** Frontend yêu cầu Pre-signed URL qua Server Action, sau đó Frontend ném file trực tiếp lên Supabase Storage (bypass server Next.js) qua các hàm trong `src/lib/storage/`.

**Component Boundaries (Ranh giới Component):**
- **Dumb Components:** `src/components/ui/` chỉ nhận Props, không biết về Data Fetching hay State Management.
- **Smart Components:** `src/components/features/` được quyền tương tác với Zustand (`src/store/`) và kích hoạt Server Actions.

**Data Boundaries (Ranh giới Dữ liệu):**
- **Bảo mật RLS:** Mọi truy vấn từ Frontend hay Server Actions bằng tài khoản ẩn danh sẽ bị chặn bởi Row-Level Security tại DB nếu không cung cấp đúng `case_id` (được lưu trong URL tracker hoặc session tạm).
- **Trạng thái (State):** Server Actions bắt buộc phải tham chiếu tới `src/lib/domain/state-machine.ts` để kiểm tra tính hợp lệ trước khi thực hiện ghi dữ liệu xuống Database.

### Requirements to Structure Mapping

**Feature/Epic Mapping:**
- **FR: Accountless Intake:**
  - UI: `src/app/(public)/page.tsx`, `src/components/features/intake/`
  - State: `src/store/use-intake-store.ts`
  - Logic: `src/lib/actions/intake.actions.ts`
- **FR: Pizza Tracker (Realtime):**
  - UI: `src/app/(public)/track/[id]/page.tsx`, `src/components/features/tracker/`
  - Realtime Logic: Supabase Client Subscription ở Frontend.
- **FR: Diagnostic Engine:**
  - Mẫu Report Schema: `src/lib/schemas/triage.schema.ts`
  - Giao diện KTV: `src/components/features/triage/`
- **NFR: State Machine:**
  - Đặt hoàn toàn cô lập tại `src/lib/domain/state-machine.ts`. Được test độc lập tại `tests/domain/`.
- **NFR: Large File Upload (100MB+):**
  - Quản lý quá trình qua các tiện ích tại `src/lib/storage/`.

### File Organization Patterns

- **Tests:** Được đặt ở cấp độ root (`/tests`) thay vì co-located kế bên file source. Điều này giúp giữ thư mục `src/` sạch sẽ và tập trung vào logic chạy trên production.
- **Generated Types:** Các type của Database được sinh ra tự động phải lưu ở `src/types/database.types.ts` và tuyệt đối không chỉnh sửa bằng tay.
- **Utilities:** Mọi hàm tái sử dụng chung (Format ngày tháng, nối class bằng Tailwind Merge) phải được gom gọn về `src/lib/utils/`.

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
Sự kết hợp giữa Next.js App Router, Supabase (BaaS), và Server Actions hoạt động cực kỳ mượt mà. Việc chuyển giao logic Upload sang Supabase Storage (Client-side upload via Pre-signed URL) đã loại bỏ hoàn toàn nút thắt cổ chai lớn nhất của Server Actions (payload giới hạn). 

**Pattern Consistency:**
Các quy tắc `next-safe-action` bọc Server Actions + Zod đảm bảo đầu vào/đầu ra luôn được Type-safe từ Frontend tới Backend. Zustand đóng vai trò là Draft State hoàn hảo bổ trợ cho mô hình này.

**Structure Alignment:**
Cấu trúc thư mục (chia rõ `actions/`, `features/`, `storage/`, và `domain/`) tuân thủ tuyệt đối triết lý Clean Architecture, tách biệt rõ ràng UI và Business Logic.

### Requirements Coverage Validation ✅

**Epic/Feature Coverage:**
- *Accountless Intake:* Được hỗ trợ thông qua Supabase Anonymous Auth + RLS.
- *Pizza Tracker:* Được hỗ trợ thông qua Supabase Realtime + WebSocket Subscription.

**Functional Requirements Coverage:**
Toàn bộ FRs (từ việc nộp log qua mạng 4G đến hệ thống Report cho KTV) đều được quy hoạch đúng vị trí trong kiến trúc (Frontend, Server Action, hoặc DB Schema).

**Non-Functional Requirements Coverage:**
Bảo mật (Security) được khóa bằng RLS. Hiệu suất (Performance) được giải quyết nhờ Edge-ready và trực tiếp đẩy file lên Cloud. Tính bất biến (Traceability) được kiểm soát qua State Machine nghiêm ngặt.

### Implementation Readiness Validation ✅

**Decision Completeness:**
Các thư viện cốt lõi đều được định rõ (Supabase v2, Next.js v14/15 App Router, Shadcn, Vitest).

**Structure Completeness:**
Cây thư mục đã hoàn thiện tới tầng file chức năng, loại bỏ hoàn toàn sự đoán mò cho các Agent đến sau.

**Pattern Completeness:**
Quy tắc xử lý lỗi (ActionResponse format), quy ước đặt tên (snake_case cho DB, camelCase cho logic), và luật cấm CRUD trực tiếp đã được chốt hạ.

### Gap Analysis Results

**Tình trạng hiện tại: KHÔNG PHÁT HIỆN LỖ HỔNG NGHIÊM TRỌNG (No Critical Gaps).**
- *Minor Gap (Đã giải quyết ở Step 6):* Thiếu thư mục quản lý Upload, đã được bổ sung thành `src/lib/storage/`.
- *Minor Gap (Đã giải quyết ở Step 6):* Thiếu tiện ích UI, đã bổ sung thư mục `src/lib/utils/`.

### Architecture Completeness Checklist

**Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** **READY FOR IMPLEMENTATION**

**Confidence Level:** **High** (Cao) - Nhờ việc giảm tải phức tạp Backend bằng Supabase và sử dụng State Machine độc lập.

**Key Strengths:**
- Khả năng mở rộng tốt mà không cần đội ngũ Backend Engineer.
- Quy trình Upload an toàn, phù hợp môi trường thực tế (hiện trường, 4G yếu).
- TDD-ready nhờ kiến trúc cô lập State Machine.

**Areas for Future Enhancement:**
- Module phân tích Log AI (Auto-Parsing) sẽ cần thêm hệ thống hàng đợi (Queue/Background Jobs) khi thoát khỏi giai đoạn MVP.

### Implementation Handoff

**AI Agent Guidelines:**
- Tuân thủ tuyệt đối các quyết định trong file `architecture.md` này.
- Sử dụng mô hình `next-safe-action` cho mọi tương tác ghi dữ liệu.
- Tôn trọng ranh giới thư mục.
- Nếu nghi ngờ, hãy đọc lại tài liệu kiến trúc.

**First Implementation Priority:**
Chạy lệnh khởi tạo project:
`npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes`
Kế tiếp là thiết lập `shadcn`, `zustand`, `vitest` và viết unit test đầu tiên cho State Machine.
