---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
  - step-04-final-validation
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/planning-artifacts/product-brief-suachua.md"
  - "_bmad-output/planning-artifacts/research/domain-uav-repair-practical-training-entry-level-uav-data-services-vietnam-research-2026-05-03.md"
  - "_bmad-output/planning-artifacts/prd-validation-report.md"
---

# suachua - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for suachua, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Khach hang co the xem cac goi dich vu Basic, Pro va Premium cung dieu kien phu hop cua tung goi.

FR2: Khach hang co the bat dau mot case triage ma khong can tao tai khoan truoc.

FR3: Khach hang co the cung cap thong tin lien he de nhan link hoac cap nhat case.

FR4: Khach hang co the chon loai nhu cau: UAV triage, dataset quality, used drone audit, training interest hoac partner referral.

FR5: Khach hang co the khai bao nen tang/ky thuat lien quan nhu Betaflight, ArduPilot/Pixhawk, Mission Planner/QGroundControl, INAV hoac WebODM dataset.

FR6: He thong co the huong dan khach cung cap thong tin bat buoc theo tung loai case.

FR7: He thong co the phat hien va liet ke thong tin con thieu trong case intake.

FR8: Khach hang co the gui log, cau hinh, anh wiring, video loi hoac dataset lien quan den case.

FR9: Khach hang co the bo sung bang chung vao mot case da tao.

FR10: He thong co the gan Case ID cho moi case.

FR11: Ky thuat vien co the phan loai case theo platform, trieu chung, muc rui ro va trang thai xu ly.

FR12: Ky thuat vien co the quan ly trang thai case: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed.

FR13: Ky thuat vien co the luu record ve file khach gui, report, bao gia, quyet dinh cua khach va hanh dong tiep theo.

FR14: He thong co the danh dau case phu hop hoac khong phu hop de dung lam case study an danh.

FR15: Ky thuat vien co the tao report chan doan cho moi case Basic.

FR16: Report co the mo ta trieu chung, bang chung da kiem tra, nguyen nhan kha di va buoc xu ly tiep theo.

FR17: Report co the ghi `confidence level` cho tung ket luan.

FR18: Report co the ghi `risk level` cho case hoac hang muc loi.

FR19: Report co the phan biet loi da xac nhan, loi nghi ngo, phan can bench test va phan can kiem tra hop le ngoai hien truong.

FR20: Report co the neu ro pham vi phan tich va dieu kien chua xac minh.

FR21: Khach hang co the nhan report va chon next action: tu xu ly, sua sau, hoc them, dung bay hoac chuyen partner.

FR22: He thong co the hien thi legal/safety boundary trong intake, report va mo ta dich vu.

FR23: Ky thuat vien co the danh dau case can compliance/partner gate.

FR24: Ky thuat vien co the danh dau case khong duoc khuyen nghi bay cho toi khi xu ly them.

FR25: Khach hang co the dong y hoac khong dong y cho xu ly du lieu ca nhan va du lieu ky thuat.

FR26: Khach hang co the dong y rieng cho viec an danh case de dung lam case study.

FR27: He thong co the luu consent, retention deadline va trang thai chia se du lieu.

FR28: He thong co the tach du lieu private khoi ban public da an danh.

FR29: Ky thuat vien co the chuyen case phu hop thanh muc trong failure library.

FR30: Failure library co the phan loai loi theo platform, trieu chung, nguyen nhan, bang chung va bai hoc.

FR31: Nguoi hoc co the xem cac case public da an danh.

FR32: Nguoi hoc co the dang ky workshop hoac lab thuc hanh dua tren loi that.

FR33: Instructor co the lien ket case that voi checklist, lab exercise va assessment.

FR34: He thong co the tao va hien thi Basic Self-Check Kit duoi dang checklist, liet ke ro cac tai lieu bat buoc phai tai len (log, anh FC hai mat, video canh bao, thong so cau hinh) tuong ung voi tung nen tang cua khach (VD: ArduPilot, Betaflight).

FR35: Khach hang co the gui yeu cau Dataset Quality Report.

FR36: Khach hang co the khai bao muc tieu dau ra nhu visual demo, orthomosaic, 3D model hoac dataset review.

FR37: Report dataset co the phan biet review/demo voi mapping hoac trac dia chinh quy.

FR38: Ky thuat vien co the phan loai dataset (Pass/Fail) va xuat ra bao cao de xuat cach bay lai voi chi so cu the (VD: yeu cau tang overlap len 75%, dieu chinh goc camera, bo sung/sua loi metadata anh).

FR39: Ky thuat vien co the de xuat upsell tu Basic sang Pro hoac Training dua tren cac dieu kien ro rang: Risk Level o muc thap/trung binh, Confidence Level cao, va loi nam trong danh muc co the xu ly an toan tai lab.

FR40: Ky thuat vien co the chuyen case sang partner khi vuot pham vi `suachua`.

FR41: He thong co the luu ly do referral, loai partner, du lieu duoc phep chia se va trang thai referral.

FR42: He thong phai hien thi cho khach hang tren Report hoac Status Page du 4 truong bat buoc: trang thai xu ly (status), ly do giu/tu choi/chuyen tiep (reason), ranh gioi dich vu (boundary) va hanh dong tiep theo (next action).

FR43: Ky thuat vien co the xem queue case theo trang thai va muc uu tien.

FR44: Ky thuat vien co the theo doi SLA hoac thoi han phan hoi cua tung case.

FR45: He thong co the ghi nhan so ca triage hoan tat, so report ban giao, so case study tao duoc va so upsell/referral.

FR46: He thong co the ho tro pilot tracking cho muc tieu 5-10 ca dau, 10-20 ca trong 90 ngay va failure library ban dau.

### NonFunctional Requirements

NFR1: Phase 1 phai phan hoi intake moi trong vong 24 gio lam viec. Measurement method: timestamp cua tin nhan/email tra loi dau tien tru di timestamp gui intake.

NFR2: Basic triage/report phai cong khai SLA hoan thanh chan doan trong toi da 3 ngay lam viec ke tu khi case co du du lieu bat buoc. Measurement method: kiem tra SLA hien thi tren trang dich vu/intake form; audit timestamp xac nhan 100% case Basic du du lieu dat trang thai Report Ready trong <= 3 ngay lam viec hoac co ly do ngoai le duoc ghi nhan (Missing Info, Referred, Out-of-scope).

NFR3: Voi case thieu du lieu, checklist bo sung phai duoc gui cho khach trong vong 24 gio truoc khi case chuyen sang trang thai In Review. Measurement method: log thoi gian gui checklist so voi thoi gian nhan intake.

NFR4: 100% case o trang thai Report Ready phai gui kem link/file report hoan thien hoac ghi chu ly do tu choi dich vu. Measurement method: kiem tra ngau nhien 10 case o trang thai Report Ready xem co dinh kem file/link report hop le khong.

NFR5: Queue noi bo phai cho phep ky thuat vien loc va nhan dien 100% case sat han/qua han SLA (con < 12 gio) ma khong can doc tung case thu cong. Measurement method: dashboard/spreadsheet co cot canh bao mau hoac filter hien thi dung cac case sat han.

NFR6: 100% du lieu khach gui (lien he, log GPS, anh/video, serial, dataset) phai duoc quan ly nhu du lieu can bao ve. Measurement method: audit kho luu tru xac nhan phan quyen thu muc Private khong duoc chia se public.

NFR7: 100% thu muc chua du lieu private cua khach chi cap quyen cho nhan su duoc phan cong. Measurement method: review quyen truy cap tren Drive/he thong quan ly.

NFR8: 100% public case study phai bi xoa thong tin nhan dang (ten, email, so dien thoai, toa do GPS) truoc khi xuat ban. Measurement method: QA review case study public de dam bao khong con du lieu PII/toa do.

NFR9: Ty le chia se du lieu cho partner trai phep phai la 0%. He thong yeu cau checkbox/log dong y truoc khi chuyen case. Measurement method: moi referral package phai dinh kem screenshot/log consent tu khach.

NFR10: Du lieu goc cua case Closed phai duoc xoa hoac duoc gia han bang consent moi trong vong 30 ngay sau khi dong case. Measurement method: audit dinh ky xac nhan 100% case Closed qua 30 ngay co deletion record hoac active retention-extension consent.

NFR11: He thong luu tru duoc timestamp va noi dung dong y (consent) cua khach hang ve xu ly du lieu. Measurement method: export DB/Spreadsheet thay ro 2 cot "Consent Time" va "Consent Status".

NFR12: 100% file private hoac report phai duoc gui qua kenh co kiem soat truy cap, khong gui qua link public. Measurement method: audit cac link report da gui cho khach, dam bao phai can quyen truy cap hop le.

NFR13: 100% case duoc tao phai gan mot Case ID dinh dang duy nhat. Measurement method: truy van DB/Spreadsheet xac nhan khong co Case ID trung lap.

NFR14: Ty le ghi de file goc do ky thuat vien xu ly phai la 0%. Measurement method: so sanh file size/checksum cua file goc va file trong kho luu tru dinh ky.

NFR15: 100% thao tac sua doi cau hinh phai co file diff/record luu lai. Measurement method: tim thay file diff hoac ghi chu thay doi dinh kem trong thu muc case.

NFR16: 100% report phai chua reference link hoac ten file ro rang tro ve du lieu bang chung da dung. Measurement method: QA report dam bao moi ket luan deu mapping voi file/bang chung dinh kem.

NFR17: 0% case bi dong neu chua di qua trang thai ket thuc hop le (completed, declined, referred, out-of-scope). Measurement method: audit lich su trang thai cua case.

NFR18: 100% du lieu dung cho Failure Library public duoc tach biet hoan toan khoi kho du lieu private. Measurement method: kiem tra cau truc thu muc dam bao doc lap.

NFR19: 100% report xuat ra tu dong dinh kem disclaimer (khong phai flight clearance/giay phep). Measurement method: kiem tra format report output.

NFR20: Moi case co dau hieu bay test ngoai troi, mapping chinh quy, phun thuoc tu dong gan co Compliance Risk. Measurement method: test tao case gia va xem canh bao/workflow chuyen tiep partner.

NFR21: Bat buoc phan loai risk level (low, medium, high, do-not-fly-until-reviewed) khi hoan tat report. Measurement method: system/form khong cho phep submit report neu thieu Risk Level.

NFR22: Report chi duoc dung ket luan "co the bay thu nghiem co kiem soat" khi dinh kem toi thieu 3 nhom bang chung: bench test hoac simulation pass, anh/video/config/log lien quan, va risk level + confidence level cho ket luan do. Neu thieu mot trong 3 nhom, report phai dung trang thai "needs bench test", "needs simulation" hoac "cannot determine from submitted evidence". Measurement method: QA review 100% report co ket luan bay thu nghiem de xac nhan du 3 nhom bang chung va trang thai ket luan dung.

NFR23: 100% quang ba Training MVP phai chua tuyen bo "lab thuc hanh ky thuat, khong cap bang bay". Measurement method: review copy tren landing page/sales kit.

NFR24: Bao cao Dataset Quality tu dong dinh kem canh bao phan biet demo/visual va khao sat chinh quy. Measurement method: doc report template.

NFR25: Intake/report su dung ngon ngu ro rang, nguoi dung khong chuyen hieu duoc thong diep ma khong can tra cuu ky thuat. Measurement method: khao sat 5 khach hang that, yeu cau ho doc report va chon dung muc do rui ro (dat >= 80%).

NFR26: 100% report co muc "Buoc Tiep Theo" voi toi da 3 gach dau dong ro rang. Measurement method: dem so luong hanh dong cu the o muc Next Action trong report.

NFR27: Form intake hien thi day du, khong loi layout tren man hinh mobile chuan (375-430px chieu ngang). Measurement method: mo form tren Chrome DevTools voi profile mobile device pho bien.

NFR28: Ty le case phai gui checklist bo sung do huong dan intake/checklist thieu hoac sai phai < 20% tong so case moi moi thang. Measurement method: voi moi case chuyen sang Missing Info, ky thuat vien gan reason code `customer_omission` hoac `checklist_gap`; chi tinh `checklist_gap` vao metric nay.

NFR29: Cac canh bao phap ly/an toan ngan gon duoi 50 chu/doan. Measurement method: dem so tu trong doan disclaimer.

NFR30: Workflow thu cong Phase 1 cho phep 1 ky thuat vien xu ly hoan tat toi thieu 5 ca/ngay ma khong vi pham SLA. Measurement method: ghi nhan tong thoi gian triage trung binh (muc tieu < 60 phut/ca).

NFR31: Case tracking co the export toan bo metadata ra dinh dang chuan (CSV/JSON) khong loi cau truc. Measurement method: chay export va parse du lieu kiem tra loi.

NFR32: Them loai platform/loi moi khong yeu cau sua record cu. Measurement method: cap nhat danh sach taxonomy va xac nhan khong co breaking changes tren report cu.

NFR33: He thong filter case theo loai dich vu nhanh chong (< 3 giay) de chia se cong viec. Measurement method: do thoi gian load du lieu sau khi apply filter.

NFR34: Co the trich xuat ty le chuyen doi tu Basic sang Pro/Training/Referral dinh ky. Measurement method: chay report "Conversion Rate" theo thang.

NFR35: Luu tru xu ly nguyen ven dinh dang: .txt, .log, .bbl, .bin, .param, .diff, .zip. Measurement method: upload/download test va kiem tra checksum.

NFR36: Report template xuat PDF/HTML de xem tren trinh duyet khong can app phu. Measurement method: test mo report tren trinh duyet mac dinh may tinh trang.

NFR37: Ten folder va file tuan thu POSIX-compliant (chi dung `[a-zA-Z0-9_-]`) de dam bao khong loi khi luu tru cross-platform hoac cloud. Measurement method: script validate dinh dang ten file dat 100% pass.

NFR38: Package referral tao ra khong bi tron lan thong tin private (neu khach khong chia se). Measurement method: audit ZIP package truoc khi gui partner.

NFR39: Upload web intake (o Phase 2) ho tro Resume hoac canh bao khi mang khong on dinh voi file > 100MB. Measurement method: thu nghiem tat mang giua chung va resume qua trinh upload.

### Additional Requirements

- AR1: Epic 1 Story 1 phai khoi tao project bang `create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes`, sau do thiet lap `shadcn`, `zustand`, `vitest`, `next-safe-action`, `@supabase/ssr` va Supabase client.
- AR2: Su dung starter Official Next.js CLI + Custom Setup, khong dung boilerplate lon co auth/tenant code thua.
- AR3: App chay theo Next.js App Router voi TypeScript strict, Tailwind CSS, shadcn/ui, Zustand, Vitest, Supabase v2, Server Actions, Zod va `next-safe-action`.
- AR4: Supabase BaaS la data/storage/realtime layer: Postgres, Storage, Realtime, Anonymous Auth va RLS.
- AR5: Accountless intake dung Supabase Anonymous Auth; RLS phai dam bao khach chi doc/ghi du lieu gan voi session/case cua ho.
- AR6: Moi tuong tac ghi du lieu phai di qua Server Actions boc bang `next-safe-action` va Zod validation.
- AR7: Server Actions phai phu thuoc State Machine domain logic de kiem tra chuyen trang thai hop le truoc khi ghi database.
- AR8: State Machine phai tach doc lap tai `src/lib/domain/state-machine.ts` va co unit test rieng trong `tests/domain/`.
- AR9: File upload lon phai dung direct upload/pre-signed/resumable upload qua Supabase Storage, khong day file lon qua Next.js server payload.
- AR10: Status tracker phai lang nghe thay doi case qua Supabase Realtime/WebSocket hoac phuong an tuong duong da duoc architecture chap nhan.
- AR11: Database la single source of truth; Zustand chi dung cho draft state cua intake flow.
- AR12: Server Action response phai tuan theo `ActionResponse<T>` de frontend xu ly success/validation/server error nhat quan.
- AR13: Naming: Supabase tables/columns dung `snake_case`; TypeScript logic dung `camelCase`; Server Action co hau to `Action`; Zod schemas co hau to `Schema`.
- AR14: Directory boundaries: routing trong `src/app/`; shared shadcn UI trong `src/components/ui/`; business UI trong `src/components/features/`; actions trong `src/lib/actions/`; schemas trong `src/lib/schemas/`; Supabase init trong `src/lib/supabase/`; storage logic trong `src/lib/storage/`; domain logic trong `src/lib/domain/`; stores trong `src/store/`; generated DB types trong `src/types/database.types.ts`.
- AR15: Khong import truc tiep `@supabase/supabase-js` ngoai cac Supabase initializer files da dinh nghia.
- AR16: Tests dat o root `/tests`, gom `tests/domain/` cho State Machine va `tests/actions/` cho Server Actions.
- AR17: Moi thay doi trong `src/lib/actions/` phai chay `npm run test`.
- AR18: File storage phai ho tro retention lifecycle, POSIX-safe folder/file names va public/private separation.
- AR19: Architecture handoff yeu cau Agent tuan thu `architecture.md`, `next-safe-action`, directory boundaries va State Machine contract.

### UX Design Requirements

UX-DR1: Implement web-based mobile-first and desktop-ready experience for users at flying field and desktop users reading heavy logs.

UX-DR2: Implement accountless upload intake with contact capture, implicit profile/session creation and case link delivery.

UX-DR3: Implement one-minute intake as single-page progression with no full reload between intake steps.

UX-DR4: Implement platform/service selection and required evidence prompts for UAV triage, dataset quality, used drone audit, training interest and partner referral.

UX-DR5: Implement `DropzoneUploader` with Default, DragActive, Uploading, Success and Error states.

UX-DR6: `DropzoneUploader` must show upload progress and support pre-signed/resumable upload flow.

UX-DR7: Mobile upload UI must warn users about file size limits and advise trimming large videos before upload to avoid mobile browser crashes.

UX-DR8: Upload flow must handle unstable 4G with resumable upload behavior and clear retry/error UX.

UX-DR9: Implement triage status tracker reflecting backend State Machine statuses without requiring manual refresh.

UX-DR10: Tracker state changes must include reassuring feedback patterns such as toast or micro-animation.

UX-DR11: Triage Report / Status Page must present required fields: status, reason, boundary and next action.

UX-DR12: Triage Report must include sticky decision CTA behavior on mobile, shown only after user scrolls past quote/value content.

UX-DR13: Desktop Triage Report must constrain reading width and use side space for table of contents or sticky action sidebar.

UX-DR14: Implement Failure Library public case layout with before/after or step-by-step pattern suitable for learning and trust-building.

UX-DR15: Implement `RepairCostVisualizer` or equivalent report visual component for parts damage/cost/noise visualization.

UX-DR16: Any before/after slider must include keyboard-accessible fallback toggle and ARIA labeling.

UX-DR17: Use shadcn/ui base components for Button, Input, Select, Checkbox, Dialog, Toast, Progress, Accordion and Table where relevant.

UX-DR18: Use custom components identified by UX spec: `DropzoneUploader`, `StatusTimeline`, `RepairCostVisualizer`, report CTA/decision action component, and reusable empty/error/loading states.

UX-DR19: Implement design direction "Clinical Lab" for public home/intake and optional "Pro Engineering" dark mode for report/dashboard/log-heavy views.

UX-DR20: Provide theme toggle for Triage Report and Tracker where deep technical reading benefits from dark mode.

UX-DR21: Use trustworthy color system centered on blue/white/green and avoid FPV/neon/gamer style for the main clinical intake.

UX-DR22: Use readable sans-serif typography such as Inter/Roboto and restrained rounded-md/rounded-lg cards/buttons.

UX-DR23: Button hierarchy must define primary, secondary and safety/destructive actions consistently.

UX-DR24: Success toast must include concrete promise/time expectation such as next technician update SLA.

UX-DR25: Form labels must be top-aligned for mobile readability.

UX-DR26: Responsive breakpoints must follow Tailwind mobile-first approach; mobile layout one column, tablet/desktop progressively enhanced.

UX-DR27: Mobile controls must be large enough and high contrast for outdoor use in sunlight.

UX-DR28: Accordion/log expansion, slider/toggle, upload controls and CTA actions must be keyboard operable with `Tab` and `Enter`.

UX-DR29: Interactive controls must include accessible names/ARIA labels for screen readers.

UX-DR30: Error handling UX must distinguish missing required evidence, upload/network failure, out-of-scope/compliance gate and successful submission.

### FR Coverage Map

FR1: Epic 1 - Accountless Intake & System Foundation
FR2: Epic 1 - Accountless Intake & System Foundation
FR3: Epic 1 - Accountless Intake & System Foundation
FR4: Epic 1 - Accountless Intake & System Foundation
FR5: Epic 1 - Accountless Intake & System Foundation
FR6: Epic 1 - Accountless Intake & System Foundation
FR7: Epic 1 - Accountless Intake & System Foundation
FR8: Epic 1 - Accountless Intake & System Foundation
FR9: Epic 1 - Accountless Intake & System Foundation
FR10: Epic 1 - Accountless Intake & System Foundation
FR11: Epic 2 - Internal Case Queue & Workflow Management
FR12: Epic 2 - Internal Case Queue & Workflow Management
FR13: Epic 2 - Internal Case Queue & Workflow Management
FR14: Epic 5 - Knowledge Base & Practical Training
FR15: Epic 3 - Diagnostic Engine & Reporting Experience
FR16: Epic 3 - Diagnostic Engine & Reporting Experience
FR17: Epic 3 - Diagnostic Engine & Reporting Experience
FR18: Epic 3 - Diagnostic Engine & Reporting Experience
FR19: Epic 3 - Diagnostic Engine & Reporting Experience
FR20: Epic 3 - Diagnostic Engine & Reporting Experience
FR21: Epic 3 - Diagnostic Engine & Reporting Experience
FR22: Epic 1 - Accountless Intake & System Foundation
FR23: Epic 2 - Internal Case Queue & Workflow Management
FR24: Epic 2 - Internal Case Queue & Workflow Management
FR25: Epic 1 - Accountless Intake & System Foundation
FR26: Epic 1 - Accountless Intake & System Foundation
FR27: Epic 1 - Accountless Intake & System Foundation
FR28: Epic 1 - Accountless Intake & System Foundation
FR29: Epic 5 - Knowledge Base & Practical Training
FR30: Epic 5 - Knowledge Base & Practical Training
FR31: Epic 5 - Knowledge Base & Practical Training
FR32: Epic 5 - Knowledge Base & Practical Training
FR33: Epic 5 - Knowledge Base & Practical Training
FR34: Epic 1 - Accountless Intake & System Foundation
FR35: Epic 3 - Diagnostic Engine & Reporting Experience
FR36: Epic 3 - Diagnostic Engine & Reporting Experience
FR37: Epic 3 - Diagnostic Engine & Reporting Experience
FR38: Epic 3 - Diagnostic Engine & Reporting Experience
FR39: Epic 3 - Diagnostic Engine & Reporting Experience
FR40: Epic 4 - Partner Referral, Consent Enforcement & Data Lifecycle
FR41: Epic 4 - Partner Referral, Consent Enforcement & Data Lifecycle
FR42: Epic 3 - Diagnostic Engine & Reporting Experience
FR43: Epic 2 - Internal Case Queue & Workflow Management
FR44: Epic 2 - Internal Case Queue & Workflow Management
FR45: Epic 5 - Knowledge Base & Practical Training
FR46: Epic 5 - Knowledge Base & Practical Training

## Epic List

### Epic 1: Accountless Intake & System Foundation

Khach hang co the de dang tao case, gui file log/video lon tu hien truong qua mang 4G, theo doi trang thai realtime ma khong can dang ky tai khoan, dong thoi cap quyen xu ly du lieu ro rang.

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR9, FR10, FR22, FR25, FR26, FR27, FR28, FR34

**Implementation Notes:** Epic nay khoi tao nen tang Next.js/Supabase, thiet lap Supabase Anonymous Auth + RLS, intake flow, direct upload bang pre-signed/resumable URLs, consent capture, private/public data boundary foundation va Basic Self-Check Kit.

### Epic 2: Internal Case Queue & Workflow Management

Ky thuat vien co dashboard quan ly case uu tien, theo doi SLA, chuyen trang thai case dung luong State Machine va ap dung compliance/safety gates truoc khi xu ly tiep.

**FRs covered:** FR11, FR12, FR13, FR23, FR24, FR43, FR44

**Implementation Notes:** Xay dung internal dashboard, State Machine, queue filters, SLA indicators, Server Actions boc Zod/next-safe-action va record hanh dong xu ly case.

### Epic 3: Diagnostic Engine & Reporting Experience

Ky thuat vien co the lap Triage Report hoac Dataset Quality Report voi Risk/Confidence Level; khach hang nhan bao cao truc quan, hieu boundary va chon next action tren dien thoai.

**FRs covered:** FR15, FR16, FR17, FR18, FR19, FR20, FR21, FR35, FR36, FR37, FR38, FR39, FR42

**Implementation Notes:** Thiet ke report theo huong Clinical Lab, ho tro status page/report fields bat buoc, dark mode cho report/log-heavy views, CTAs sticky tren mobile, dataset/WebODM boundary va upsell conditions.

### Epic 4: Partner Referral, Consent Enforcement & Data Lifecycle

Ky thuat vien co the dong goi an toan cac case vuot kha nang de chuyen cho partner, chi chia se du lieu da duoc phep va duy tri vong doi du lieu phu hop consent/retention policy.

**FRs covered:** FR40, FR41

**Implementation Notes:** Tao referral package, luu ly do referral, loai partner, du lieu duoc phep chia se va trang thai referral. Epic nay enforce consent/retention/data-boundary foundation da tao o Epic 1.

### Epic 5: Knowledge Base & Practical Training

Hoc vien va khach hang co the tra cuu Failure Library tu case that da an danh; instructor lien ket case voi checklist/lab/assessment; chu doanh nghiep theo doi conversion va pilot learning metrics.

**FRs covered:** FR14, FR29, FR30, FR31, FR32, FR33, FR45, FR46

**Implementation Notes:** Xay dung co che copy/anonymize case tu private sang public, public case taxonomy, workshop/lab interest flow, instructor linking va business learning dashboard cho 90 ngay MVP.

## Epic 1: Accountless Intake & System Foundation

Khach hang co the de dang tao case, gui file log/video lon tu hien truong qua mang 4G, theo doi trang thai realtime ma khong can dang ky tai khoan, dong thoi cap quyen xu ly du lieu ro rang.

### Story 1.1: Khởi tạo nền tảng ứng dụng Accountless Intake

**Requirements covered:** AR1, AR2, AR3, AR4, AR5, AR6, AR8, AR9, AR10, AR11, AR12, AR13, AR14, AR15, AR16, AR18, AR19

Là nhà phát triển/vận hành,
tôi muốn có nền tảng ứng dụng Next.js/Supabase sạch và nhất quán,
để luồng accountless intake có thể được xây dựng an toàn và dễ bảo trì.

**Acceptance Criteria:**

**Given** project root đã sẵn sàng để triển khai
**When** story nền tảng được hoàn tất
**Then** ứng dụng sử dụng Next.js App Router, TypeScript strict, Tailwind CSS, shadcn/ui, Zustand, Vitest, Supabase client setup, Zod và `next-safe-action`
**And** cấu trúc thư mục tuân thủ ranh giới Architecture cho `app`, `components`, `lib/actions`, `lib/schemas`, `lib/supabase`, `lib/storage`, `lib/domain`, `store`, `types` và `tests`.

### Story 1.2: Trang gói dịch vụ công khai và ranh giới an toàn

**Requirements covered:** FR1, FR22, NFR2, NFR23, NFR29, UX-DR1, UX-DR19, UX-DR21, UX-DR22

Là khách hàng tiềm năng,
tôi muốn hiểu gói Basic, Pro và Premium phù hợp với trường hợp nào trước khi gửi case,
để chọn đúng dịch vụ và không kỳ vọng công việc không an toàn hoặc vượt phạm vi.

**Acceptance Criteria:**

**Given** khách truy cập mở trang dịch vụ công khai
**When** họ xem các gói dịch vụ
**Then** Basic, Pro và Premium được hiển thị với điều kiện phù hợp và ranh giới legal/safety rõ ràng
**And** trang dùng layout mobile-first, typography dễ đọc, phong cách Clinical Lab đáng tin cậy và cảnh báo ngắn gọn.

### Story 1.3: Tạo case không cần tài khoản với liên hệ và Case ID

**Requirements covered:** FR2, FR3, FR10, NFR1, NFR13, UX-DR2, UX-DR3

Là khách hàng,
tôi muốn tạo case triage mà không cần đăng ký tài khoản,
để gửi lỗi UAV nhanh và nhận tracker link.

**Acceptance Criteria:**

**Given** khách hàng nhập thông tin liên hệ hợp lệ
**When** họ bắt đầu case mới
**Then** hệ thống tạo case anonymous/session-backed với Case ID duy nhất và tracker link
**And** lỗi validation được hiển thị inline mà không làm mất dữ liệu đã nhập.

### Story 1.4: Chọn loại dịch vụ, nền tảng và Basic Self-Check Kit

**Requirements covered:** FR4, FR5, FR6, FR7, FR34, NFR28, NFR32, UX-DR4, UX-DR25, UX-DR30

Là khách hàng,
tôi muốn được hướng dẫn theo loại dịch vụ và nền tảng UAV của mình,
để biết chính xác cần chuẩn bị log, ảnh, video hoặc file cấu hình nào.

**Acceptance Criteria:**

**Given** khách hàng đã bắt đầu một case
**When** họ chọn UAV triage, dataset quality, used drone audit, training interest hoặc partner referral và chọn nền tảng liên quan
**Then** hệ thống hiển thị yêu cầu evidence bắt buộc và Basic Self-Check Kit tương ứng
**And** thông tin bắt buộc còn thiếu được liệt kê rõ trước khi gửi.

### Story 1.5: Ghi nhận consent, retention và ranh giới dữ liệu

**Requirements covered:** FR25, FR26, FR27, FR28, NFR6, NFR9, NFR10, NFR11, NFR18

Là khách hàng,
tôi muốn kiểm soát rõ dữ liệu cá nhân và dữ liệu kỹ thuật của mình được dùng như thế nào,
để gửi evidence với kỳ vọng riêng tư minh bạch.

**Acceptance Criteria:**

**Given** khách hàng đang chuẩn bị gửi case
**When** họ xem các tùy chọn consent
**Then** họ có thể đồng ý hoặc từ chối xử lý dữ liệu và đồng ý riêng cho việc dùng case ẩn danh làm case study
**And** hệ thống lưu consent timestamp, consent status, retention deadline và metadata ranh giới private/public data.

### Story 1.6: Upload evidence trực tiếp với tiến trình resumable

**Requirements covered:** FR8, NFR12, NFR14, NFR35, NFR37, NFR39, UX-DR5, UX-DR6, UX-DR7, UX-DR8, UX-DR17, UX-DR27, UX-DR28, UX-DR29, UX-DR30

Là khách hàng ở hiện trường,
tôi muốn upload log, file cấu hình, ảnh wiring, video hoặc dataset một cách ổn định,
để file evidence lớn vẫn gửi được khi mạng mobile không ổn định.

**Acceptance Criteria:**

**Given** khách hàng đã có case và chọn file evidence
**When** họ upload các file được hỗ trợ
**Then** file được upload qua direct/pre-signed/resumable storage thay vì đi qua Next.js server payload
**And** UI hiển thị các trạng thái Default, DragActive, Uploading, Success và Error kèm tiến trình, hướng dẫn retry và cảnh báo dung lượng file trên mobile.

### Story 1.7: Bổ sung evidence vào case hiện có và xem intake tracker

**Requirements covered:** FR9, FR10, UX-DR9, UX-DR10, UX-DR24, UX-DR28, UX-DR29, UX-DR30

Là khách hàng,
tôi muốn bổ sung evidence còn thiếu sau khi tạo case và xem trạng thái intake,
để hoàn thiện case mà không cần tạo lại hoặc nhắn tin thủ công.

**Acceptance Criteria:**

**Given** khách hàng mở tracker link hợp lệ
**When** họ bổ sung evidence hoặc xem trạng thái
**Then** evidence được gắn vào Case ID hiện có và tracker hiển thị trạng thái intake hiện tại mà không yêu cầu đăng ký tài khoản
**And** phản hồi trạng thái có next action rõ ràng, thông báo success/error và control có trợ năng.

## Epic 2: Internal Case Queue & Workflow Management

Kỹ thuật viên có dashboard quản lý case ưu tiên, theo dõi SLA, chuyển trạng thái case đúng luồng State Machine và áp dụng compliance/safety gates trước khi xử lý tiếp.

### Story 2.1: State Machine và kiểm thử chuyển trạng thái case

**Requirements covered:** FR12, NFR17, AR7, AR8, AR16, AR17

Là kỹ thuật viên/vận hành,
tôi muốn trạng thái case được kiểm soát bằng State Machine có kiểm thử,
để case không thể chuyển sang trạng thái sai hoặc không an toàn.

**Acceptance Criteria:**

**Given** một case đang có trạng thái hiện tại
**When** hệ thống yêu cầu chuyển giữa New, Missing Info, In Review, Report Ready, Waiting Decision, Referred và Closed
**Then** State Machine chỉ cho phép các chuyển trạng thái hợp lệ
**And** chuyển trạng thái không hợp lệ trả về lỗi có cấu trúc và được phủ bằng unit test.

### Story 2.2: Dashboard queue case nội bộ

**Requirements covered:** FR43, FR44, NFR5, NFR30, NFR33, UX-DR17, UX-DR18

Là kỹ thuật viên,
tôi muốn xem case theo trạng thái và mức ưu tiên,
để biết cần xử lý case nào tiếp theo mà không phải đọc từng case thủ công.

**Acceptance Criteria:**

**Given** có nhiều case ở nhiều trạng thái và mức ưu tiên
**When** kỹ thuật viên mở queue nội bộ
**Then** case được nhóm hoặc lọc theo trạng thái, loại dịch vụ, nền tảng và mức ưu tiên
**And** thời gian phản hồi filter đạt dưới 3 giây với quy mô MVP.

### Story 2.3: Phân loại case và trường rủi ro

**Requirements covered:** FR11, FR12, FR23, NFR21, AR6, AR12, AR13

Là kỹ thuật viên,
tôi muốn phân loại case theo nền tảng, triệu chứng, risk level và trạng thái xử lý,
để report và quyết định xử lý có ngữ cảnh vận hành thống nhất.

**Acceptance Criteria:**

**Given** kỹ thuật viên mở trang chi tiết case
**When** họ gán platform, nhóm triệu chứng, risk level và trạng thái xử lý
**Then** dữ liệu được validate bằng Zod schema và lưu qua Server Action bọc `next-safe-action`
**And** các trường bắt buộc bị thiếu hiển thị lỗi inline.

### Story 2.4: Workflow Missing Info và yêu cầu bổ sung evidence

**Requirements covered:** FR12, NFR3, NFR28, UX-DR11, UX-DR24, UX-DR30

Là kỹ thuật viên,
tôi muốn đánh dấu case là Missing Info và ghi rõ thông tin còn thiếu,
để khách hoàn thiện case mà không cần nhắn qua lại tự do.

**Acceptance Criteria:**

**Given** case thiếu bằng chứng bắt buộc
**When** kỹ thuật viên chuyển case sang Missing Info
**Then** hệ thống lưu danh sách evidence còn thiếu và reason code như `customer_omission` hoặc `checklist_gap`
**And** tracker của khách hiển thị các mục còn thiếu và next action.

### Story 2.5: Theo dõi SLA và case sắp/quá hạn

**Requirements covered:** FR44, NFR1, NFR2, NFR5

Là kỹ thuật viên,
tôi muốn thấy cảnh báo SLA cho case sắp hoặc đã quá hạn,
để case Basic triage được xử lý trong thời gian đã cam kết.

**Acceptance Criteria:**

**Given** case có timestamp tạo và SLA deadline
**When** queue nội bộ được tải
**Then** case còn dưới 12 giờ tới hạn hoặc đã quá hạn được nhận diện và lọc rõ ràng
**And** case completed/on-hold/out-of-scope hiển thị đúng lý do ngoại lệ SLA.

### Story 2.6: Compliance gate và cờ do-not-fly

**Requirements covered:** FR23, FR24, NFR20, NFR21, NFR29, UX-DR11, UX-DR30

Là kỹ thuật viên,
tôi muốn gắn cờ compliance risk hoặc do-not-fly trước khi xử lý tiếp,
để công việc rủi ro hoặc có yếu tố pháp lý không bị nhận nhầm như sửa chữa thông thường.

**Acceptance Criteria:**

**Given** case có dấu hiệu bay test ngoài trời, mapping chính quy, phun thuốc, lỗi rủi ro cao hoặc thiếu bằng chứng
**When** kỹ thuật viên gắn cờ compliance hoặc do-not-fly
**Then** case lưu cờ, lý do và next action
**And** case không an toàn không thể chuyển sang khuyến nghị sẵn sàng cho khách nếu thiếu boundary message bắt buộc.

### Story 2.7: Activity record và metadata exportable

**Requirements covered:** FR13, NFR15, NFR31, AR11

Là kỹ thuật viên/vận hành,
tôi muốn mỗi case lưu record về file, report, báo giá, quyết định khách hàng và next action,
để vận hành có audit trail và có thể export dữ liệu.

**Acceptance Criteria:**

**Given** kỹ thuật viên cập nhật case
**When** họ thêm file record, report link, ghi chú báo giá, quyết định khách hàng hoặc next action
**Then** mỗi record được lưu với timestamp và actor/source
**And** metadata case có thể export sang CSV/JSON không lỗi cấu trúc.

## Epic 3: Diagnostic Engine & Reporting Experience

Kỹ thuật viên có thể lập Triage Report hoặc Dataset Quality Report với Risk/Confidence Level; khách hàng nhận báo cáo trực quan, hiểu boundary và chọn next action trên điện thoại.

### Story 3.1: Tạo Triage Report cho case Basic

**Requirements covered:** FR15, FR16, NFR4, NFR16, NFR25, NFR36

Là kỹ thuật viên,
tôi muốn tạo report chẩn đoán cho case Basic,
để khách nhận được kết luận kỹ thuật có cấu trúc và dễ hiểu.

**Acceptance Criteria:**

**Given** case đang ở trạng thái In Review và có đủ evidence
**When** kỹ thuật viên tạo Triage Report
**Then** report có triệu chứng, evidence đã kiểm tra, nguyên nhân khả dĩ và bước xử lý tiếp theo
**And** report lưu reference tới file/evidence đã dùng cho từng kết luận.

### Story 3.2: Confidence Level, Risk Level và phân loại kết luận

**Requirements covered:** FR17, FR18, FR19, NFR21, NFR22

Là kỹ thuật viên,
tôi muốn gán confidence level, risk level và loại kết luận cho từng report,
để khách hiểu mức chắc chắn và mức rủi ro trước khi hành động.

**Acceptance Criteria:**

**Given** kỹ thuật viên đang hoàn tất report
**When** họ nhập kết luận
**Then** report bắt buộc có confidence level, risk level và phân loại: confirmed, suspected, needs bench test, needs field validation hoặc cannot determine
**And** hệ thống không cho submit report nếu thiếu risk level bắt buộc.

### Story 3.3: Safety disclaimer và evidence threshold cho khuyến nghị bay thử

**Requirements covered:** FR19, FR20, NFR19, NFR22, NFR29

Là kỹ thuật viên,
tôi muốn hệ thống kiểm tra ngưỡng bằng chứng trước khi report cho phép "bay thử có kiểm soát",
để tránh đưa ra khuyến nghị thiếu an toàn.

**Acceptance Criteria:**

**Given** report có kết luận liên quan đến bay thử
**When** kỹ thuật viên chọn kết luận "có thể bay thử nghiệm có kiểm soát"
**Then** report chỉ được submit nếu có đủ bench test hoặc simulation pass, evidence ảnh/video/config/log liên quan, và risk level + confidence level
**And** nếu thiếu evidence, report phải dùng trạng thái needs bench test, needs simulation hoặc cannot determine.

### Story 3.4: Customer Report/Status Page với 4 trường bắt buộc

**Requirements covered:** FR20, FR21, FR42, NFR25, NFR26, UX-DR11

Là khách hàng,
tôi muốn đọc report/status page có status, reason, boundary và next action,
để biết rõ tình trạng case và bước tiếp theo.

**Acceptance Criteria:**

**Given** report đã sẵn sàng cho khách
**When** khách mở report hoặc status page
**Then** trang hiển thị đủ status, reason, boundary và next action
**And** mục "Bước Tiếp Theo" có tối đa 3 hành động cụ thể, dễ hiểu trên mobile.

### Story 3.5: Decision CTA và upsell từ report

**Requirements covered:** FR21, FR39, NFR34, UX-DR12, UX-DR23, UX-DR24

Là khách hàng,
tôi muốn chọn hành động tiếp theo ngay trên report,
để quyết định tự xử lý, sửa sâu, học thêm, dừng bay hoặc chuyển partner.

**Acceptance Criteria:**

**Given** khách đang xem report
**When** họ đã đọc phần kết luận và báo giá/giá trị chính
**Then** CTA quyết định hiển thị theo phân cấp primary/secondary/safety action
**And** hệ thống chỉ đề xuất upsell Basic sang Pro hoặc Training khi risk level thấp/trung bình, confidence level cao và lỗi thuộc danh mục xử lý an toàn tại lab.

### Story 3.6: Dataset Quality Report và ranh giới WebODM

**Requirements covered:** FR35, FR36, FR37, FR38, NFR24

Là khách hàng dataset/WebODM,
tôi muốn nhận báo cáo đánh giá chất lượng dataset và khuyến nghị bay lại,
để biết dataset có dùng được cho demo/review không và không nhầm với khảo sát chính quy.

**Acceptance Criteria:**

**Given** khách gửi yêu cầu Dataset Quality Report
**When** kỹ thuật viên đánh giá dataset
**Then** report ghi mục tiêu đầu ra như visual demo, orthomosaic, 3D model hoặc dataset review
**And** report phân loại Pass/Fail, nêu khuyến nghị bay lại với chỉ số cụ thể và disclaimer phân biệt demo/visual với mapping/trắc địa chính quy.

### Story 3.7: Giao diện report Clinical Lab, dark mode và accessibility

**Requirements covered:** FR42, UX-DR13, UX-DR15, UX-DR16, UX-DR17, UX-DR18, UX-DR19, UX-DR20, UX-DR21, UX-DR22, UX-DR26, UX-DR28, UX-DR29, UX-DR30

Là khách hàng hoặc kỹ thuật viên,
tôi muốn report có giao diện dễ đọc, có dark mode khi đọc nội dung kỹ thuật dài,
để hiểu thông tin mà không bị quá tải.

**Acceptance Criteria:**

**Given** người dùng mở report trên mobile hoặc desktop
**When** họ đọc nội dung report
**Then** layout giới hạn chiều rộng đọc trên desktop, dùng sticky action/sidebar phù hợp và có theme toggle cho report/log-heavy views
**And** accordion, CTA, slider/toggle và các control tương tác dùng được bằng `Tab`/`Enter` và có accessible name/ARIA label.

## Epic 4: Partner Referral, Consent Enforcement & Data Lifecycle

Kỹ thuật viên có thể đóng gói an toàn các case vượt khả năng để chuyển cho partner, chỉ chia sẻ dữ liệu đã được phép và duy trì vòng đời dữ liệu phù hợp consent/retention policy.

### Story 4.1: Chuyển case vượt scope sang partner

**Requirements covered:** FR40, FR41, NFR20, NFR29, UX-DR11, UX-DR23, UX-DR30

Là kỹ thuật viên,
tôi muốn chuyển case vượt phạm vi `suachua` sang partner phù hợp,
để khách được xử lý bởi đơn vị có năng lực hoặc điều kiện pháp lý phù hợp.

**Acceptance Criteria:**

**Given** case được gắn compliance/partner gate hoặc vượt phạm vi xử lý nội bộ
**When** kỹ thuật viên chọn chuyển partner
**Then** hệ thống lưu lý do referral, loại partner, boundary message và trạng thái referral
**And** status page/report của khách hiển thị status, reason, boundary và next action.

### Story 4.2: Kiểm tra consent trước khi chia sẻ dữ liệu referral

**Requirements covered:** FR41, NFR9, NFR12, UX-DR30

Là kỹ thuật viên,
tôi muốn hệ thống kiểm tra consent trước khi đóng gói dữ liệu referral,
để không chia sẻ dữ liệu khách hàng trái phép.

**Acceptance Criteria:**

**Given** kỹ thuật viên chuẩn bị referral package
**When** họ chọn dữ liệu để chia sẻ
**Then** hệ thống chỉ cho phép chọn dữ liệu nằm trong phạm vi consent của khách
**And** nếu thiếu consent, hệ thống chặn thao tác và hiển thị bước cần xin consent bổ sung.

### Story 4.3: Tạo referral package có ranh giới dữ liệu rõ

**Requirements covered:** FR41, NFR9, NFR38

Là kỹ thuật viên,
tôi muốn tạo referral package chỉ chứa dữ liệu được phép chia sẻ,
để partner nhận đủ ngữ cảnh mà không lẫn dữ liệu private ngoài phạm vi.

**Acceptance Criteria:**

**Given** case có consent chia sẻ hợp lệ
**When** kỹ thuật viên tạo referral package
**Then** package chứa mô tả nhu cầu, dữ liệu được phép chia sẻ, rủi ro đã phát hiện, report/evidence liên quan và consent proof
**And** audit kiểm tra package xác nhận không lẫn dữ liệu private không được phép.

### Story 4.4: Data retention và đóng case theo policy

**Requirements covered:** FR27, NFR10

Là vận hành viên,
tôi muốn dữ liệu gốc của case Closed được xóa hoặc gia hạn bằng consent mới trong 30 ngày,
để bảo vệ quyền riêng tư và giảm rủi ro lưu trữ.

**Acceptance Criteria:**

**Given** case đã chuyển sang Closed
**When** case vượt quá 30 ngày sau thời điểm đóng
**Then** dữ liệu gốc được xóa hoặc được gắn active retention-extension consent
**And** hệ thống lưu deletion record hoặc retention-extension record để audit.

## Epic 5: Knowledge Base & Practical Training

Học viên và khách hàng có thể tra cứu Failure Library từ case thật đã ẩn danh; instructor liên kết case với checklist/lab/assessment; chủ doanh nghiệp theo dõi conversion và pilot learning metrics.

### Story 5.1: Đánh dấu case phù hợp cho Failure Library

**Requirements covered:** FR14, FR29, NFR8, NFR18

Là kỹ thuật viên,
tôi muốn đánh dấu case phù hợp hoặc không phù hợp để chuyển thành case study ẩn danh,
để chỉ case có giá trị học tập và đủ điều kiện privacy mới vào Failure Library.

**Acceptance Criteria:**

**Given** case đã có đủ report/evidence và consent liên quan
**When** kỹ thuật viên đánh dấu case phù hợp hoặc không phù hợp cho case study
**Then** hệ thống lưu quyết định, lý do và trạng thái sẵn sàng anonymize
**And** case thiếu consent hoặc còn dữ liệu nhạy cảm bị chặn khỏi luồng public case study.

### Story 5.2: Chuyển case private thành mục Failure Library đã ẩn danh

**Requirements covered:** FR29, NFR8, NFR18

Là kỹ thuật viên,
tôi muốn chuyển case phù hợp thành mục Failure Library đã ẩn danh,
để tái sử dụng case thật cho marketing, đào tạo và học tập mà không lộ dữ liệu khách hàng.

**Acceptance Criteria:**

**Given** case được đánh dấu phù hợp và có consent hợp lệ
**When** kỹ thuật viên tạo mục Failure Library
**Then** hệ thống tạo bản public tách khỏi kho private và loại bỏ tên, email, số điện thoại, tọa độ GPS và dữ liệu nhận dạng khác
**And** audit xác nhận public case không còn PII/toạ độ nhạy cảm.

### Story 5.3: Phân loại và hiển thị Failure Library public

**Requirements covered:** FR30, FR31, UX-DR14, UX-DR16, UX-DR17, UX-DR21, UX-DR22, UX-DR26, UX-DR28, UX-DR29

Là người học hoặc khách hàng,
tôi muốn xem Failure Library theo platform, triệu chứng, nguyên nhân, evidence và bài học,
để học từ lỗi UAV thật và hiểu năng lực của `suachua`.

**Acceptance Criteria:**

**Given** có các mục Failure Library public
**When** người dùng mở thư viện
**Then** họ có thể xem case theo platform, triệu chứng, nguyên nhân, evidence và bài học
**And** layout dùng pattern step-by-step hoặc before/after phù hợp học tập, có accessibility cho toggle/slider nếu dùng.

### Story 5.4: Đăng ký workshop/lab từ failure case

**Requirements covered:** FR32, NFR23, UX-DR23, UX-DR30

Là người học,
tôi muốn đăng ký workshop hoặc lab thực hành từ một failure case cụ thể,
để học cách xử lý lỗi thật thay vì chỉ học lý thuyết.

**Acceptance Criteria:**

**Given** người học đang xem một case public hoặc trang training
**When** họ chọn đăng ký workshop/lab
**Then** hệ thống ghi nhận training interest gắn với case/topic liên quan
**And** copy training hiển thị rõ "lab thực hành kỹ thuật, không cấp bằng bay".

### Story 5.5: Liên kết case thật với checklist, lab exercise và assessment

**Requirements covered:** FR33, NFR32

Là instructor,
tôi muốn liên kết case thật với checklist, bài lab và assessment,
để biến lỗi thật thành nội dung đào tạo có cấu trúc.

**Acceptance Criteria:**

**Given** một case public đã sẵn sàng cho đào tạo
**When** instructor liên kết checklist, lab exercise và assessment
**Then** hệ thống lưu các liên kết này theo case/topic
**And** nội dung có thể mở rộng taxonomy platform/lỗi mới mà không phá vỡ record cũ.

### Story 5.6: Pilot metrics và conversion tracking cho MVP 90 ngày

**Requirements covered:** FR45, FR46, NFR31, NFR34

Là chủ vận hành,
tôi muốn theo dõi số ca triage, report bàn giao, case study, upsell/referral và pilot targets,
để đánh giá tín hiệu thị trường trong 90 ngày MVP.

**Acceptance Criteria:**

**Given** hệ thống đã ghi nhận case, report, case study, upsell/referral và training interest
**When** chủ vận hành mở phần metrics
**Then** hệ thống hiển thị số ca triage hoàn tất, số report bàn giao, số case study, số upsell/referral và tiến độ 5-10 case đầu, 10-20 case trong 90 ngày
**And** dữ liệu có thể trích xuất định kỳ để tính conversion rate.
