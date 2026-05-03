---
stepsCompleted:
  - step-01-document-discovery
  - step-02-prd-analysis
  - step-03-epic-coverage-validation
  - step-04-ux-alignment
  - step-05-epic-quality-review
  - step-06-final-assessment
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/epics.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/planning-artifacts/prd-validation-report.md"
---

# Implementation Readiness Assessment Report

**Date:** 2026-05-03
**Project:** suachua

## Document Discovery

### PRD Files Found

**Whole Documents:**
- `_bmad-output/planning-artifacts/prd.md` (55,309 bytes, modified 2026-05-03 16:14:48)

**Auxiliary Documents:**
- `_bmad-output/planning-artifacts/prd-validation-report.md` (9,706 bytes, modified 2026-05-03 18:20:10)

**Sharded Documents:**
- None found

### Architecture Files Found

**Whole Documents:**
- `_bmad-output/planning-artifacts/architecture.md` (26,601 bytes, modified 2026-05-03 15:45:20)

**Sharded Documents:**
- None found

### Epics & Stories Files Found

**Whole Documents:**
- `_bmad-output/planning-artifacts/epics.md` (49,000 bytes, modified 2026-05-03 20:22:24)

**Sharded Documents:**
- None found

### UX Design Files Found

**Whole Documents:**
- `_bmad-output/planning-artifacts/ux-design-specification.md` (31,497 bytes, modified 2026-05-02 23:24:07)

**Sharded Documents:**
- None found

### Discovery Issues

- No whole/sharded duplicates found.
- No required planning documents missing.
- `prd-validation-report.md` is included as auxiliary context and does not replace `prd.md`.

## PRD Analysis

### Functional Requirements

FR1: Khách hàng có thể xem các gói dịch vụ Basic, Pro và Premium cùng điều kiện phù hợp của từng gói.

FR2: Khách hàng có thể bắt đầu một case triage mà không cần tạo tài khoản trước.

FR3: Khách hàng có thể cung cấp thông tin liên hệ để nhận link hoặc cập nhật case.

FR4: Khách hàng có thể chọn loại nhu cầu: UAV triage, dataset quality, used drone audit, training interest hoặc partner referral.

FR5: Khách hàng có thể khai báo nền tảng/kỹ thuật liên quan như Betaflight, ArduPilot/Pixhawk, Mission Planner/QGroundControl, INAV hoặc WebODM dataset.

FR6: Hệ thống có thể hướng dẫn khách cung cấp thông tin bắt buộc theo từng loại case.

FR7: Hệ thống có thể phát hiện và liệt kê thông tin còn thiếu trong case intake.

FR8: Khách hàng có thể gửi log, cấu hình, ảnh wiring, video lỗi hoặc dataset liên quan đến case.

FR9: Khách hàng có thể bổ sung bằng chứng vào một case đã tạo.

FR10: Hệ thống có thể gán Case ID cho mỗi case.

FR11: Kỹ thuật viên có thể phân loại case theo platform, triệu chứng, mức rủi ro và trạng thái xử lý.

FR12: Kỹ thuật viên có thể quản lý trạng thái case: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed.

FR13: Kỹ thuật viên có thể lưu record về file khách gửi, report, báo giá, quyết định của khách và hành động tiếp theo.

FR14: Hệ thống có thể đánh dấu case phù hợp hoặc không phù hợp để dùng làm case study ẩn danh.

FR15: Kỹ thuật viên có thể tạo report chẩn đoán cho mỗi case Basic.

FR16: Report có thể mô tả triệu chứng, bằng chứng đã kiểm tra, nguyên nhân khả dĩ và bước xử lý tiếp theo.

FR17: Report có thể ghi `confidence level` cho từng kết luận.

FR18: Report có thể ghi `risk level` cho case hoặc hạng mục lỗi.

FR19: Report có thể phân biệt lỗi đã xác nhận, lỗi nghi ngờ, phần cần bench test và phần cần kiểm tra hợp lệ ngoài hiện trường.

FR20: Report có thể nêu rõ phạm vi phân tích và điều kiện chưa xác minh.

FR21: Khách hàng có thể nhận report và chọn next action: tự xử lý, sửa sâu, học thêm, dừng bay hoặc chuyển partner.

FR22: Hệ thống có thể hiển thị legal/safety boundary trong intake, report và mô tả dịch vụ.

FR23: Kỹ thuật viên có thể đánh dấu case cần compliance/partner gate.

FR24: Kỹ thuật viên có thể đánh dấu case không được khuyến nghị bay cho tới khi xử lý thêm.

FR25: Khách hàng có thể đồng ý hoặc không đồng ý cho xử lý dữ liệu cá nhân và dữ liệu kỹ thuật.

FR26: Khách hàng có thể đồng ý riêng cho việc ẩn danh case để dùng làm case study.

FR27: Hệ thống có thể lưu consent, retention deadline và trạng thái chia sẻ dữ liệu.

FR28: Hệ thống có thể tách dữ liệu private khỏi bản public đã ẩn danh.

FR29: Kỹ thuật viên có thể chuyển case phù hợp thành mục trong failure library.

FR30: Failure library có thể phân loại lỗi theo platform, triệu chứng, nguyên nhân, bằng chứng và bài học.

FR31: Người học có thể xem các case public đã ẩn danh.

FR32: Người học có thể đăng ký workshop hoặc lab thực hành dựa trên lỗi thật.

FR33: Instructor có thể liên kết case thật với checklist, lab exercise và assessment.

FR34: Hệ thống có thể tạo và hiển thị Basic Self-Check Kit dưới dạng checklist, liệt kê rõ các tài liệu bắt buộc phải tải lên (log, ảnh FC hai mặt, video cảnh báo, thông số cấu hình) tương ứng với từng nền tảng của khách (VD: ArduPilot, Betaflight).

FR35: Khách hàng có thể gửi yêu cầu Dataset Quality Report.

FR36: Khách hàng có thể khai báo mục tiêu đầu ra như visual demo, orthomosaic, 3D model hoặc dataset review.

FR37: Report dataset có thể phân biệt review/demo với mapping hoặc trắc địa chính quy.

FR38: Kỹ thuật viên có thể phân loại dataset (Pass/Fail) và xuất ra báo cáo đề xuất cách bay lại với chỉ số cụ thể (VD: yêu cầu tăng overlap lên 75%, điều chỉnh góc camera, bổ sung/sửa lỗi metadata ảnh).

FR39: Kỹ thuật viên có thể đề xuất upsell từ Basic sang Pro hoặc Training dựa trên các điều kiện rõ ràng: Risk Level ở mức thấp/trung bình, Confidence Level cao, và lỗi nằm trong danh mục có thể xử lý an toàn tại lab.

FR40: Kỹ thuật viên có thể chuyển case sang partner khi vượt phạm vi `suachua`.

FR41: Hệ thống có thể lưu lý do referral, loại partner, dữ liệu được phép chia sẻ và trạng thái referral.

FR42: Hệ thống phải hiển thị cho khách hàng trên Report hoặc Status Page đủ 4 trường bắt buộc: trạng thái xử lý (status), lý do giữ/từ chối/chuyển tiếp (reason), ranh giới dịch vụ (boundary) và hành động tiếp theo (next action).

FR43: Kỹ thuật viên có thể xem queue case theo trạng thái và mức ưu tiên.

FR44: Kỹ thuật viên có thể theo dõi SLA hoặc thời hạn phản hồi của từng case.

FR45: Hệ thống có thể ghi nhận số ca triage hoàn tất, số report bàn giao, số case study tạo được và số upsell/referral.

FR46: Hệ thống có thể hỗ trợ pilot tracking cho mục tiêu 5-10 ca đầu, 10-20 ca trong 90 ngày và failure library ban đầu.

**Total FRs:** 46

### Non-Functional Requirements

NFR1: Phase 1 phải phản hồi intake mới trong vòng 24 giờ làm việc. Measurement method: Timestamp của tin nhắn/email trả lời đầu tiên trừ đi timestamp gửi intake.

NFR2: Basic triage/report phải công khai SLA hoàn thành chẩn đoán trong tối đa 3 ngày làm việc kể từ khi case có đủ dữ liệu bắt buộc. Measurement method: Kiểm tra SLA hiển thị trên trang dịch vụ/intake form; audit timestamp xác nhận 100% case Basic đủ dữ liệu đạt trạng thái Report Ready trong <= 3 ngày làm việc hoặc có lý do ngoại lệ được ghi nhận (Missing Info, Referred, Out-of-scope).

NFR3: Với case thiếu dữ liệu, checklist bổ sung phải được gửi cho khách trong vòng 24 giờ trước khi case chuyển sang trạng thái In Review. Measurement method: Log thời gian gửi checklist so với thời gian nhận intake.

NFR4: 100% case ở trạng thái Report Ready phải gửi kèm link/file report hoàn thiện hoặc ghi chú lý do từ chối dịch vụ. Measurement method: Kiểm tra ngẫu nhiên 10 case ở trạng thái Report Ready xem có đính kèm file/link report hợp lệ không.

NFR5: Queue nội bộ phải cho phép kỹ thuật viên lọc và nhận diện 100% case sát hạn/quá hạn SLA (còn < 12 giờ) mà không cần đọc từng case thủ công. Measurement method: Dashboard/Spreadsheet có cột cảnh báo màu hoặc filter hiển thị đúng các case sát hạn.

NFR6: 100% dữ liệu khách gửi (liên hệ, log GPS, ảnh/video, serial, dataset) phải được quản lý như dữ liệu cần bảo vệ. Measurement method: Audit kho lưu trữ xác nhận phân quyền thư mục Private không được chia sẻ public.

NFR7: 100% thư mục chứa dữ liệu private của khách chỉ cấp quyền cho nhân sự được phân công. Measurement method: Review quyền truy cập trên Drive/hệ thống quản lý.

NFR8: 100% public case study phải bị xóa thông tin nhận dạng (tên, email, số điện thoại, tọa độ GPS) trước khi xuất bản. Measurement method: QA review case study public để đảm bảo không còn dữ liệu PII/tọa độ.

NFR9: Tỷ lệ chia sẻ dữ liệu cho partner trái phép phải là 0%. Hệ thống yêu cầu checkbox/log đồng ý trước khi chuyển case. Measurement method: Mọi referral package phải đính kèm screenshot/log consent từ khách.

NFR10: Dữ liệu gốc của case Closed phải được xóa hoặc được gia hạn bằng consent mới trong vòng 30 ngày sau khi đóng case. Measurement method: Audit định kỳ xác nhận 100% case Closed quá 30 ngày có deletion record hoặc active retention-extension consent.

NFR11: Hệ thống lưu trữ được timestamp và nội dung đồng ý (consent) của khách hàng về xử lý dữ liệu. Measurement method: Export DB/Spreadsheet thấy rõ 2 cột "Consent Time" và "Consent Status".

NFR12: 100% file private hoặc report phải được gửi qua kênh có kiểm soát truy cập, không gửi qua link public. Measurement method: Audit các link report đã gửi cho khách, đảm bảo phải cần quyền truy cập hợp lệ.

NFR13: 100% case được tạo phải gán một Case ID định dạng duy nhất. Measurement method: Truy vấn DB/Spreadsheet xác nhận không có Case ID trùng lặp.

NFR14: Tỷ lệ ghi đè file gốc do kỹ thuật viên xử lý phải là 0%. Measurement method: So sánh file size/checksum của file gốc và file trong kho lưu trữ định kỳ.

NFR15: 100% thao tác sửa đổi cấu hình phải có file diff/record lưu lại. Measurement method: Tìm thấy file diff hoặc ghi chú thay đổi đính kèm trong thư mục case.

NFR16: 100% report phải chứa reference link hoặc tên file rõ ràng trỏ về dữ liệu bằng chứng đã dùng. Measurement method: QA report đảm bảo mọi kết luận đều mapping với file/bằng chứng đính kèm.

NFR17: 0% case bị đóng nếu chưa đi qua trạng thái kết thúc hợp lệ (completed, declined, referred, out-of-scope). Measurement method: Audit lịch sử trạng thái của case.

NFR18: 100% dữ liệu dùng cho Failure Library public được tách biệt hoàn toàn khỏi kho dữ liệu private. Measurement method: Kiểm tra cấu trúc thư mục đảm bảo độc lập.

NFR19: 100% report xuất ra tự động đính kèm disclaimer (không phải flight clearance/giấy phép). Measurement method: Kiểm tra format report output.

NFR20: Mọi case có dấu hiệu bay test ngoài trời, mapping chính quy, phun thuốc tự động gán cờ Compliance Risk. Measurement method: Test tạo case giả và xem cảnh báo/workflow chuyển tiếp partner.

NFR21: Bắt buộc phân loại risk level (low, medium, high, do-not-fly-until-reviewed) khi hoàn tất report. Measurement method: System/form không cho phép submit report nếu thiếu Risk Level.

NFR22: Report chỉ được dùng kết luận "có thể bay thử nghiệm có kiểm soát" khi đính kèm tối thiểu 3 nhóm bằng chứng: bench test hoặc simulation pass, ảnh/video/config/log liên quan, và risk level + confidence level cho kết luận đó. Nếu thiếu một trong 3 nhóm, report phải dùng trạng thái "needs bench test", "needs simulation" hoặc "cannot determine from submitted evidence". Measurement method: QA review 100% report có kết luận bay thử nghiệm để xác nhận đủ 3 nhóm bằng chứng và trạng thái kết luận đúng.

NFR23: 100% quảng bá Training MVP phải chứa tuyên bố "lab thực hành kỹ thuật, không cấp bằng bay". Measurement method: Review copy trên landing page/sales kit.

NFR24: Báo cáo Dataset Quality tự động đính kèm cảnh báo phân biệt demo/visual và khảo sát chính quy. Measurement method: Đọc report template.

NFR25: Intake/report sử dụng ngôn ngữ rõ ràng, người dùng không chuyên hiểu được thông điệp mà không cần tra cứu kỹ thuật. Measurement method: Khảo sát 5 khách hàng thật, yêu cầu họ đọc report và chọn đúng mức độ rủi ro (đạt >= 80%).

NFR26: 100% report có mục "Bước Tiếp Theo" với tối đa 3 gạch đầu dòng rõ ràng. Measurement method: Đếm số lượng hành động cụ thể ở mục Next Action trong report.

NFR27: Form intake hiển thị đầy đủ, không lỗi layout trên màn hình mobile chuẩn (375-430px chiều ngang). Measurement method: Mở form trên Chrome DevTools với profile mobile device phổ biến.

NFR28: Tỷ lệ case phải gửi checklist bổ sung do hướng dẫn intake/checklist thiếu hoặc sai phải < 20% tổng số case mới mỗi tháng. Measurement method: Với mỗi case chuyển sang Missing Info, kỹ thuật viên gắn reason code `customer_omission` hoặc `checklist_gap`; chỉ tính `checklist_gap` vào metric này.

NFR29: Các cảnh báo pháp lý/an toàn ngắn gọn dưới 50 chữ/đoạn. Measurement method: Đếm số từ trong đoạn disclaimer.

NFR30: Workflow thủ công Phase 1 cho phép 1 kỹ thuật viên xử lý hoàn tất tối thiểu 5 ca/ngày mà không vi phạm SLA. Measurement method: Ghi nhận tổng thời gian triage trung bình (mục tiêu < 60 phút/ca).

NFR31: Case tracking có thể export toàn bộ metadata ra định dạng chuẩn (CSV/JSON) không lỗi cấu trúc. Measurement method: Chạy export và parse dữ liệu kiểm tra lỗi.

NFR32: Thêm loại platform/lỗi mới không yêu cầu sửa record cũ. Measurement method: Cập nhật danh sách taxonomy và xác nhận không có breaking changes trên report cũ.

NFR33: Hệ thống filter case theo loại dịch vụ nhanh chóng (< 3 giây) để chia sẻ công việc. Measurement method: Đo thời gian load dữ liệu sau khi apply filter.

NFR34: Có thể trích xuất tỷ lệ chuyển đổi từ Basic sang Pro/Training/Referral định kỳ. Measurement method: Chạy report "Conversion Rate" theo tháng.

NFR35: Lưu trữ xử lý nguyên vẹn định dạng: .txt, .log, .bbl, .bin, .param, .diff, .zip. Measurement method: Upload/download test và kiểm tra checksum.

NFR36: Report template xuất PDF/HTML để xem trên trình duyệt không cần app phụ. Measurement method: Test mở report trên trình duyệt mặc định máy tính trắng.

NFR37: Tên folder và file tuân thủ POSIX-compliant (chỉ dùng `[a-zA-Z0-9_-]`) để đảm bảo không lỗi khi lưu trữ cross-platform hoặc cloud. Measurement method: Script validate định dạng tên file đạt 100% pass.

NFR38: Package referral tạo ra không bị trộn lẫn thông tin private (nếu khách không chia sẻ). Measurement method: Audit ZIP package trước khi gửi partner.

NFR39: Upload web intake (ở Phase 2) hỗ trợ Resume hoặc cảnh báo khi mạng không ổn định với file > 100MB. Measurement method: Thử nghiệm tắt mạng giữa chừng và resume quá trình upload.

**Total NFRs:** 39

### Additional Requirements

- MVP tập trung vào 90 ngày đầu: intake checklist, report template, 3 demo failure cases, triage workflow, failure library ban đầu và service ladder Basic/Pro/Premium nháp.
- Phase 1 không phụ thuộc vào phần mềm riêng ngay; web app/tooling chỉ hợp lý khi workflow dịch vụ đã đủ lặp lại để chứng minh nhu cầu.
- Phạm vi kỹ thuật MVP tập trung vào ArduPilot/Mission Planner/QGroundControl, Betaflight, Blackbox, MAVProxy/pymavlink ở mức chẩn đoán và WebODM ở mức dataset/demo.
- Intake/case management cần status tối thiểu: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed.
- Data model cần case ID, contact, platform, symptoms, evidence files, consent status, retention deadline, report links, risk level, confidence level, referral status và failure-library eligibility.
- Legal/safety boundary phải được thể hiện trong intake, report, dịch vụ và referral decision.
- Các phần full mapping service, crop-spraying workflow, formal flight services, advanced R&D/autonomy và long-form 12-session course không phải scope MVP.

### PRD Completeness Assessment

PRD đã đầy đủ để làm nguồn validation: có scope MVP, journeys, 46 FR, 39 NFR SMART, constraints domain UAV, dữ liệu/consent/safety boundary và success metrics 90 ngày. Không phát hiện FR/NFR chưa đánh số trong phần requirements chính; các yêu cầu bổ sung nằm chủ yếu ở scope, domain constraints, data model và implementation considerations.

## Epic Coverage Validation

### Coverage Matrix

| FR Number | PRD Requirement | Epic / Story Coverage | Status |
| --- | --- | --- | --- |
| FR1 | Xem các gói dịch vụ Basic, Pro, Premium và điều kiện phù hợp. | Epic 1 / Story 1.2 | Covered |
| FR2 | Bắt đầu case triage không cần tạo tài khoản trước. | Epic 1 / Story 1.3 | Covered |
| FR3 | Cung cấp thông tin liên hệ để nhận link hoặc cập nhật case. | Epic 1 / Story 1.3 | Covered |
| FR4 | Chọn loại nhu cầu: UAV triage, dataset quality, used drone audit, training interest hoặc partner referral. | Epic 1 / Story 1.4 | Covered |
| FR5 | Khai báo nền tảng/kỹ thuật như Betaflight, ArduPilot/Pixhawk, Mission Planner/QGroundControl, INAV hoặc WebODM dataset. | Epic 1 / Story 1.4 | Covered |
| FR6 | Hướng dẫn khách cung cấp thông tin bắt buộc theo từng loại case. | Epic 1 / Story 1.4 | Covered |
| FR7 | Phát hiện và liệt kê thông tin còn thiếu trong case intake. | Epic 1 / Story 1.4 | Covered |
| FR8 | Gửi log, cấu hình, ảnh wiring, video lỗi hoặc dataset liên quan đến case. | Epic 1 / Story 1.6 | Covered |
| FR9 | Bổ sung bằng chứng vào một case đã tạo. | Epic 1 / Story 1.7 | Covered |
| FR10 | Gán Case ID cho mỗi case. | Epic 1 / Stories 1.3, 1.7 | Covered |
| FR11 | Kỹ thuật viên phân loại case theo platform, triệu chứng, mức rủi ro và trạng thái xử lý. | Epic 2 / Story 2.3 | Covered |
| FR12 | Kỹ thuật viên quản lý trạng thái case: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed. | Epic 2 / Stories 2.1, 2.3, 2.4 | Covered |
| FR13 | Lưu record về file khách gửi, report, báo giá, quyết định của khách và hành động tiếp theo. | Epic 2 / Story 2.7 | Covered |
| FR14 | Đánh dấu case phù hợp hoặc không phù hợp để dùng làm case study ẩn danh. | Epic 5 / Story 5.1 | Covered |
| FR15 | Tạo report chẩn đoán cho mỗi case Basic. | Epic 3 / Story 3.1 | Covered |
| FR16 | Report mô tả triệu chứng, bằng chứng đã kiểm tra, nguyên nhân khả dĩ và bước xử lý tiếp theo. | Epic 3 / Story 3.1 | Covered |
| FR17 | Report ghi `confidence level` cho từng kết luận. | Epic 3 / Story 3.2 | Covered |
| FR18 | Report ghi `risk level` cho case hoặc hạng mục lỗi. | Epic 3 / Story 3.2 | Covered |
| FR19 | Report phân biệt lỗi đã xác nhận, lỗi nghi ngờ, phần cần bench test và phần cần kiểm tra hợp lệ ngoài hiện trường. | Epic 3 / Stories 3.2, 3.3 | Covered |
| FR20 | Report nêu rõ phạm vi phân tích và điều kiện chưa xác minh. | Epic 3 / Stories 3.3, 3.4 | Covered |
| FR21 | Khách nhận report và chọn next action: tự xử lý, sửa sâu, học thêm, dừng bay hoặc chuyển partner. | Epic 3 / Stories 3.4, 3.5 | Covered |
| FR22 | Hiển thị legal/safety boundary trong intake, report và mô tả dịch vụ. | Epic 1 / Story 1.2 | Covered |
| FR23 | Kỹ thuật viên đánh dấu case cần compliance/partner gate. | Epic 2 / Stories 2.3, 2.6 | Covered |
| FR24 | Kỹ thuật viên đánh dấu case không được khuyến nghị bay cho tới khi xử lý thêm. | Epic 2 / Story 2.6 | Covered |
| FR25 | Khách đồng ý hoặc không đồng ý xử lý dữ liệu cá nhân và dữ liệu kỹ thuật. | Epic 1 / Story 1.5 | Covered |
| FR26 | Khách đồng ý riêng cho việc ẩn danh case để dùng làm case study. | Epic 1 / Story 1.5 | Covered |
| FR27 | Lưu consent, retention deadline và trạng thái chia sẻ dữ liệu. | Epic 1 / Story 1.5; Epic 4 / Story 4.4 | Covered |
| FR28 | Tách dữ liệu private khỏi bản public đã ẩn danh. | Epic 1 / Story 1.5 | Covered |
| FR29 | Kỹ thuật viên chuyển case phù hợp thành mục trong failure library. | Epic 5 / Stories 5.1, 5.2 | Covered |
| FR30 | Failure library phân loại lỗi theo platform, triệu chứng, nguyên nhân, bằng chứng và bài học. | Epic 5 / Story 5.3 | Covered |
| FR31 | Người học xem các case public đã ẩn danh. | Epic 5 / Story 5.3 | Covered |
| FR32 | Người học đăng ký workshop hoặc lab thực hành dựa trên lỗi thật. | Epic 5 / Story 5.4 | Covered |
| FR33 | Instructor liên kết case thật với checklist, lab exercise và assessment. | Epic 5 / Story 5.5 | Covered |
| FR34 | Tạo và hiển thị Basic Self-Check Kit theo nền tảng. | Epic 1 / Story 1.4 | Covered |
| FR35 | Khách gửi yêu cầu Dataset Quality Report. | Epic 3 / Story 3.6 | Covered |
| FR36 | Khách khai báo mục tiêu đầu ra như visual demo, orthomosaic, 3D model hoặc dataset review. | Epic 3 / Story 3.6 | Covered |
| FR37 | Report dataset phân biệt review/demo với mapping hoặc trắc địa chính quy. | Epic 3 / Story 3.6 | Covered |
| FR38 | Kỹ thuật viên phân loại dataset Pass/Fail và xuất báo cáo đề xuất bay lại với chỉ số cụ thể. | Epic 3 / Story 3.6 | Covered |
| FR39 | Đề xuất upsell Basic sang Pro hoặc Training theo risk/confidence/khả năng xử lý an toàn. | Epic 3 / Story 3.5 | Covered |
| FR40 | Chuyển case sang partner khi vượt phạm vi `suachua`. | Epic 4 / Story 4.1 | Covered |
| FR41 | Lưu lý do referral, loại partner, dữ liệu được phép chia sẻ và trạng thái referral. | Epic 4 / Stories 4.1, 4.2, 4.3 | Covered |
| FR42 | Hiển thị cho khách 4 trường: status, reason, boundary, next action. | Epic 3 / Stories 3.4, 3.7 | Covered |
| FR43 | Kỹ thuật viên xem queue case theo trạng thái và mức ưu tiên. | Epic 2 / Story 2.2 | Covered |
| FR44 | Kỹ thuật viên theo dõi SLA hoặc thời hạn phản hồi từng case. | Epic 2 / Stories 2.2, 2.5 | Covered |
| FR45 | Ghi nhận số ca triage hoàn tất, report bàn giao, case study và upsell/referral. | Epic 5 / Story 5.6 | Covered |
| FR46 | Hỗ trợ pilot tracking cho mục tiêu 5-10 ca đầu, 10-20 ca trong 90 ngày và failure library ban đầu. | Epic 5 / Story 5.6 | Covered |

### Missing Requirements

No missing FR coverage found.

### Coverage Statistics

- Total PRD FRs: 46
- FRs covered in epics/stories: 46
- Coverage percentage: 100%
- FRs in epics but not in PRD: 0

## UX Alignment Assessment

### UX Document Status

Found: `_bmad-output/planning-artifacts/ux-design-specification.md`

### UX ↔ PRD Alignment

Aligned:

- Accountless intake, contact capture, file upload and tracker UX match PRD journeys for Minh, Lan and the internal technician.
- Dataset/WebODM UX aligns with PRD requirement to distinguish demo/review from formal mapping/trắc địa.
- Report/status UX aligns with PRD requirements for status, reason, boundary and next action.
- Failure Library and training funnel UX aligns with PRD vision that each real case becomes report, case study and learning material.
- Legal/safety/privacy warnings in UX align with PRD domain constraints around flight clearance, compliance gates, consent and anonymization.

### UX ↔ Architecture Alignment

Aligned:

- UX choice of shadcn/ui + Tailwind is supported by Architecture starter and component boundaries.
- Mobile-first intake and report views are supported by Next.js App Router, Tailwind responsive patterns and shadcn components.
- Direct/pre-signed/resumable upload UX is supported by Supabase Storage and `src/lib/storage/`.
- Accountless tracker UX is supported by Supabase Anonymous Auth, RLS and tracker route structure.
- Report/dashboard dark-mode requirement is supported by Tailwind CSS variables and shadcn theme structure.
- State Machine-backed tracker requirement is supported by `src/lib/domain/state-machine.ts`, Server Actions and Supabase Realtime/WebSocket subscription.

### Alignment Issues

No blocking UX alignment issue found.

### Warnings

- UX spec mentions `Server-Sent Events (SSE) hoặc Smart Polling` for `PizzaTrackerTimeline`, while Architecture standardizes on Supabase Realtime/WebSocket. Implementation should follow Architecture unless a later technical decision explicitly changes tracker transport.
- UX-DR15/UX-DR18 mention `RepairCostVisualizer` and reusable empty/error/loading states. Epics include coverage through report UI/accessibility stories, but story acceptance criteria do not explicitly name every reusable state component. This is not a blocker, but sprint planning should preserve these as story tasks or acceptance notes.

## Epic Quality Review

### Critical Violations

None found.

### Major Issues

None found.

### Minor Concerns

1. **Epic 1 contains a required technical foundation story.**  
   Story 1.1 is technical, but Architecture explicitly requires the `create-next-app` starter and initial stack setup. This is acceptable as a foundation story because Epic 1 still delivers user-facing accountless intake value. Recommendation: keep Story 1.1, but avoid expanding it into unrelated infrastructure work.

2. **CI/CD and environment setup are implicit rather than explicit.**  
   Architecture mentions Vercel, Supabase Cloud, `.env.local` and environment variable management. Story 1.1 covers project foundation but does not explicitly name CI/CD/environment validation. Recommendation: add these as implementation tasks during sprint planning, not as a new epic.

3. **Story 1.7 tracker scope should remain intake-level until Epic 2 State Machine exists.**  
   Story 1.7 can stand alone if it shows receipt/evidence/intake status. Full workflow tracker behavior should build on Epic 2 State Machine. Recommendation: sprint plan should phrase Story 1.7 as "intake tracker" only.

4. **Some UX component details are covered by traceability but not explicitly named in AC.**  
   `RepairCostVisualizer`, empty/error/loading states and before/after visual polish appear in UX requirements and are broadly covered in report/failure-library UI stories. Recommendation: preserve these as story implementation subtasks or detailed acceptance notes in sprint planning.

### Epic Structure Validation

| Epic | User Value Focus | Independence | Notes |
| --- | --- | --- | --- |
| Epic 1: Accountless Intake & System Foundation | Pass | Pass | Includes required starter setup, then delivers public intake, consent, upload and intake tracker. |
| Epic 2: Internal Case Queue & Workflow Management | Pass | Pass with Epic 1 dependency | Uses case records from Epic 1; does not require report/referral/failure-library epics. |
| Epic 3: Diagnostic Engine & Reporting Experience | Pass | Pass with Epic 1-2 dependency | Uses case/evidence/status foundation from previous epics; delivers report and dataset decision value. |
| Epic 4: Partner Referral, Consent Enforcement & Data Lifecycle | Pass | Pass with Epic 1-3 dependency | Uses consent/case/report outputs from previous epics; no forward dependency. |
| Epic 5: Knowledge Base & Practical Training | Pass | Pass with prior case/report/consent outputs | Builds on previous artifacts; delivers public learning/training/business metrics value. |

### Story Quality Assessment

- Stories are generally sized for a single dev agent session.
- All stories have Given/When/Then/And acceptance criteria.
- Story-level `Requirements covered` traceability is present for all 31 stories.
- No story depends on a future story within the same epic.
- No technical epic with no user value was found.
- No all-tables-upfront database/model creation pattern was found.

### Dependency Analysis

Dependency flow is natural:

1. Epic 1 creates the accountless case, consent and evidence foundation.
2. Epic 2 adds operational queue and State Machine control.
3. Epic 3 adds reports and customer decisions.
4. Epic 4 adds referral/data lifecycle enforcement.
5. Epic 5 turns completed/approved cases into public learning assets and metrics.

No circular dependency or forward dependency was found.

### Database/Entity Creation Timing

The epics do not require "create all tables upfront". Entity creation is implied at first use:

- Case/session/contact metadata: Story 1.3
- Evidence/storage metadata: Story 1.6 and Story 1.7
- Consent/retention metadata: Story 1.5 and Story 4.4
- State transition/audit records: Story 2.1 and Story 2.7
- Report/dataset report records: Story 3.1 and Story 3.6
- Referral records/package metadata: Story 4.1-4.3
- Failure Library/training/metrics records: Story 5.1-5.6

Recommendation: sprint planning should keep schema work scoped to the story that first needs the data.

### Best Practices Compliance Checklist

- Epic delivers user value: Pass
- Epic can function independently in sequence: Pass
- Stories appropriately sized: Pass
- No forward dependencies: Pass
- Database tables created when needed: Pass, with implementation guidance
- Clear acceptance criteria: Pass
- Traceability to FRs maintained: Pass

## Summary and Recommendations

### Overall Readiness Status

READY for sprint planning.

The planning artifacts are complete and aligned enough to begin Phase 4 planning. This does not mean implementation should start ad hoc; the next correct gate is sprint planning so story order, schema ownership, infrastructure tasks and acceptance details are sequenced.

### Critical Issues Requiring Immediate Action

None.

### Major Issues Requiring Immediate Action

None.

### Non-Blocking Issues to Carry Into Sprint Planning

1. Tracker transport must follow Architecture: Supabase Realtime/WebSocket is the accepted implementation path unless superseded by a later technical decision.
2. Story 1.7 must stay scoped to intake tracker behavior until Epic 2 State Machine is available.
3. Story 1.1 should include implementation tasks for `.env.local`, Supabase environment variables and basic deployment/test script readiness.
4. `RepairCostVisualizer`, reusable empty/error/loading states and before/after visual polish should be preserved as specific subtasks or AC notes when sprint stories are created.
5. Database/schema work should be created only when first needed by each story; avoid a large upfront "create all tables" task.

### Recommended Next Steps

1. Run `[SP]` `bmad-sprint-planning` in a fresh context window to sequence the 31 stories into an implementation sprint plan.
2. In sprint planning, make Story 1.1 explicit about project setup, Supabase env config, package scripts, and test baseline.
3. Preserve UX implementation notes for `DropzoneUploader`, status tracker, report CTA, dark mode, accessibility, `RepairCostVisualizer`, and empty/error/loading states.
4. Keep the first development story small enough to produce a running Next.js app with tests before adding domain behavior.
5. After sprint planning, use `[CS]` `bmad-create-story:create` for the first implementation story, then `[VS]` validation before `[DS]` development.

### Final Note

This assessment found 0 critical issues, 0 major issues and 5 non-blocking planning carry-forward items across UX alignment and story execution detail. The artifacts should proceed to sprint planning rather than returning to PRD, UX, Architecture or Epics work.

**Assessor:** Codex / BMad Implementation Readiness workflow  
**Completed:** 2026-05-03
