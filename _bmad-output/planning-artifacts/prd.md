---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-02b-vision
  - step-02c-executive-summary
  - step-03-success
  - step-04-journeys
  - step-05-domain
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
  - step-12-complete
  - step-e-01-discovery
  - step-e-02-review
  - step-e-03-edit
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-suachua.md"
  - "_bmad-output/brainstorming/brainstorming-session-2026-05-02-185234.md"
  - "_bmad-output/planning-artifacts/research/domain-uav-repair-practical-training-entry-level-uav-data-services-vietnam-research-2026-05-03.md"
documentCounts:
  productBriefs: 1
  research: 1
  brainstorming: 1
  projectDocs: 0
workflowType: "prd"
project_name: "suachua"
created: "2026-05-02"
lastEdited: "2026-05-03"
editHistory:
  - date: "2026-05-03"
    changes: "Addressed PRD validation warnings: added domain research input, finalized NFR SLA/retention/evidence/checklist metrics, and tightened FR42 wording."
releaseMode: "phased"
classification:
  projectType: "productized_service"
  domain: "aerospace_uav"
  complexity: "high"
  projectContext: "greenfield"
---

# Product Requirements Document - suachua

**Author:** ThanhTu
**Date:** 2026-05-02

## Executive Summary

MVP của suachua là một dịch vụ “Report-first UAV clinic” dành cho người dùng drone cá nhân, người chơi FPV, người tự ráp UAV, sinh viên/kỹ thuật viên, giáo viên STEM và nhóm nhỏ muốn vận hành UAV an toàn hơn. Sản phẩm khởi đầu bằng gói chẩn đoán một giờ: khách gửi drone, cấu hình, log, ảnh wiring hoặc video lỗi; nhận lại báo cáo kỹ thuật ngắn gọn về tình trạng, nguyên nhân khả dĩ, mức rủi ro và bước xử lý tiếp theo.

PRD này tập trung vào việc chuẩn hóa dịch vụ cốt lõi trong 90 ngày đầu: intake checklist, report template, 3 demo failure cases, quy trình triage, failure library và đường upsell sang sửa chữa, đào tạo thực hành, WebODM/dataset quality hoặc support nhỏ. Mục tiêu không phải xây phần mềm riêng ngay, mà tạo một workflow dịch vụ đủ rõ để bán thử, đo nhu cầu, tích lũy case thật và chuyển hóa thành giáo trình/dịch vụ có thể lặp lại.

### What Makes This Special

Điểm khác biệt là suachua không định vị sớm như một trung tâm UAV toàn diện hay đơn vị mapping lớn. Sản phẩm bắt đầu từ nơi thị trường đau nhất: lỗi thật, drone không hoạt động đúng, người dùng không biết gửi thông tin gì, và thiếu một báo cáo kỹ thuật dễ hiểu để ra quyết định sửa, học, nâng cấp hay dừng lại.

Core insight của MVP là: mỗi ca lỗi là một tài sản sản phẩm. Một ca triage tốt có thể trở thành report bàn giao, case study ẩn danh, checklist, bài lab, nội dung marketing, dữ liệu cho failure library và đầu vào cho khóa học thực hành. Vòng lặp “triage -> report -> case study -> lab -> upsell” giúp mô hình cá nhân tạo niềm tin và doanh thu mà không cần ôm rủi ro lớn về hardware, mapping A-Z, tư vấn pháp lý hoặc R&D nâng cao.

## Project Classification

- **Project Type:** Productized service, có thể phát triển thành workflow/tooling nội bộ hoặc web app sau khi nhu cầu lặp lại rõ.
- **Domain:** Aerospace/UAV repair, training, simulation, operational readiness và entry-level UAV data service.
- **Complexity:** High, do liên quan đến an toàn bay, firmware, flight controller, log, mô phỏng, dữ liệu UAV và compliance awareness.
- **Project Context:** Greenfield. PRD định nghĩa sản phẩm/MVP từ đầu dựa trên product brief và brainstorming đã hoàn tất.

## Success Criteria

### User Success

Người dùng thành công khi họ có thể gửi đúng thông tin lỗi UAV và nhận lại một báo cáo kỹ thuật đủ rõ để quyết định bước tiếp theo: tự xử lý, thuê sửa, học thêm, nâng cấp hoặc dừng bay vì rủi ro. Một ca triage thành công phải giúp khách hiểu tình trạng drone, nguyên nhân khả dĩ, mức rủi ro, bằng chứng kiểm tra và hành động đề xuất.

Học viên thành công khi họ không chỉ biết bay hoặc nghe lý thuyết, mà có thể tự thực hiện các thao tác căn bản: kiểm kết nối, backup cấu hình, flash firmware đúng target, calibration, nhận diện lỗi không arm, đọc log cơ bản, chạy mô phỏng và dùng checklist trước bay.

### Business Success

Trong 90 ngày đầu, MVP được xem là có tín hiệu thị trường nếu hoàn thành 10-20 ca triage/sửa/cấu hình có report bàn giao, tạo ít nhất 3 case study ẩn danh công khai, chạy ít nhất 1 lớp thử nghiệm hoặc workshop nhỏ, và có ít nhất 5 khách quay lại hoặc giới thiệu khách mới.

Trong 6-12 tháng, mô hình thành công nếu có doanh thu lặp lại từ triage, sửa chữa, bảo trì nhỏ, đào tạo thực hành hoặc support theo gói; có bộ lab thiết bị tối thiểu; và có đường upsell rõ từ Basic triage sang Pro repair/training và Premium WebODM/support.

### Technical Success

Quy trình kỹ thuật thành công khi mỗi ca triage có intake checklist thống nhất, cấu trúc report thống nhất, quy ước lưu config/log/ảnh/video, và decision tree xử lý lỗi ban đầu. Stack MVP phải đủ dùng cho các nhóm lỗi chính: Mission Planner/QGroundControl cho ArduPilot/Pixhawk, Betaflight Configurator cho FPV, Blackbox Log Viewer cho log FPV, MAVProxy/pymavlink cho chẩn đoán sâu hơn, và WebODM cho dataset demo/premium.

MVP không được phụ thuộc vào phần mềm riêng trong giai đoạn đầu. Công cụ nội bộ hoặc web app chỉ được xem xét sau khi workflow dịch vụ đã lặp lại đủ nhiều để chứng minh nhu cầu.

### Measurable Outcomes

- 10-20 ca triage/sửa/cấu hình trong 90 ngày.
- 100% ca triage có intake record và report bàn giao.
- 3 demo failure cases: QGC/Mission Planner không nhận board, Betaflight không arm, log rung/GPS lỗi.
- 1 report template và 1 intake checklist dùng được cho khách thật.
- 1 failure library ban đầu với ít nhất 5 lỗi lặp lại.
- 1 lớp thử nghiệm hoặc workshop nhỏ dựa trên case thật.
- Ít nhất 5 khách quay lại hoặc giới thiệu khách mới.

## Product Scope

### MVP - Minimum Viable Product

MVP gồm gói One-Hour UAV Triage, intake checklist, report template, quy trình nhận ca, 3 demo failure cases, failure library ban đầu và service ladder Basic/Pro/Premium nháp. Phạm vi kỹ thuật tập trung vào ArduPilot/Mission Planner/QGroundControl, Betaflight, Blackbox, MAVProxy/pymavlink ở mức chẩn đoán, và WebODM ở mức dataset/demo.

> [!NOTE]
> **Quyết định hạ quy mô đào tạo (Scope Reduction Rationale):** Khóa học thực hành 12 buổi trong Product Brief ban đầu đã được chủ động thu hẹp thành một workshop pilot hoặc Weekend Repair Bootcamp trong giai đoạn MVP. Điều này nhằm giảm rủi ro vận hành, ưu tiên thu thập và tích lũy đủ các case lỗi thật từ dịch vụ chẩn đoán để làm dữ liệu thực tế (Failure Library) trước khi xây dựng một giáo trình dài hơi.

### Growth Features (Post-MVP)

Sau MVP, mở rộng sang Drone Repair Clinic, Weekend Repair Bootcamp, Four-Week Skill Ladder, Basic Self-Check Kit, Dataset Quality Report, WebODM Processing Desk và support retainer nhỏ cho 1-3 drone hoặc một CLB/trường/shop.

### Vision (Future)

Tầm nhìn dài hạn là một UAV practical school and service lab quy mô nhỏ nhưng uy tín: nơi lỗi thật tạo ra report, report tạo case study, case study tạo bài lab, bài lab tạo khóa học, và khóa học tạo nguồn khách sửa chữa/nâng cấp/dịch vụ dữ liệu UAV.

## User Journeys

### Journey 1: Minh - Chủ drone tự ráp cần chẩn đoán lỗi không arm

Minh là người chơi FPV/self-build đã tự ráp một drone nhỏ để tập bay. Sau vài lần flash firmware và đổi receiver, drone không arm, Betaflight hiện cảnh báo nhưng Minh không chắc lỗi nằm ở receiver, failsafe, motor order hay cấu hình firmware. Minh đã hỏi cộng đồng nhưng nhận nhiều câu trả lời rời rạc.

Minh mở trang One-Hour UAV Triage, chọn nhóm lỗi "Betaflight không arm", điền model, firmware target, receiver, triệu chứng, rồi upload ảnh wiring, video cảnh báo và file cấu hình. Hệ thống không bắt tạo tài khoản ngay, nhưng yêu cầu số điện thoại/email để nhận link case.

Điểm căng thẳng xảy ra khi Minh không có đủ log hoặc gửi thiếu ảnh wiring. Thay vì từ chối chung chung, intake trả về checklist thiếu dữ liệu: ảnh FC hai mặt, ảnh receiver, tab Ports, Receiver, Modes, Failsafe và CLI diff. Minh bổ sung trong cùng case.

Khoảnh khắc giá trị là khi Minh nhận report: tình trạng hiện tại, bằng chứng đã kiểm, nguyên nhân khả dĩ, mức rủi ro, và bước tiếp theo. Report không nói "sửa chắc chắn", mà phân loại: lỗi xác nhận được, lỗi nghi ngờ cao, và phần cần bench test. Minh chọn upsell sang Pro repair/configuration vì đã hiểu vấn đề.

### Journey 2: Lan - Khách muốn dùng WebODM nhưng dataset không ra kết quả tốt

Lan là thành viên một nhóm nhỏ muốn tạo bản đồ/3D demo cho khu đất. Nhóm đã bay chụp ảnh bằng drone phổ thông và thử WebODM, nhưng kết quả bị thủng, lệch, hoặc mô hình 3D méo. Lan không cần trắc địa chính quy; cô cần biết dataset có cứu được không và nếu bay lại thì phải sửa gì.

Lan chọn gói Dataset Quality Report. Intake yêu cầu upload một tập ảnh mẫu, thông tin drone/camera, độ cao bay, overlap dự kiến, mục tiêu đầu ra, và cảnh báo rõ rằng đây không phải dịch vụ đo đạc chính quy. Nếu file quá lớn, hệ thống hướng dẫn nén/chia batch hoặc gửi link storage.

Điểm rủi ro là kỳ vọng sai: Lan tưởng mọi dataset đều có thể xử lý thành bản đồ chính xác. Report phải giải thích ranh giới: visual/demo mapping, dataset quality, WebODM output, và mapping cần GCP/RTK/quy trình chuyên nghiệp. Nếu cần kết quả chính quy, `suachua` chuyển sang partner/referral thay vì nhận vượt năng lực.

Giá trị Lan nhận được là một report ngắn: dataset pass/fail, lỗi chụp ảnh, đề xuất bay lại, checklist overlap/ánh sáng/độ cao, và mẫu output WebODM nếu có thể chạy demo. Lan có thể mua tiếp workshop "bay đúng để xử lý ảnh đúng".

### Journey 3: Hoàng - Sinh viên kỹ thuật muốn học UAV bằng lỗi thật

Hoàng học điện tử và đã xem nhiều video drone, nhưng khi cầm flight controller thật thì bị kẹt ở driver, COM port, firmware target, calibration và log. Hoàng không muốn khóa học chỉ lý thuyết; cậu muốn biết cách sửa ca lỗi thật.

Hoàng nhìn thấy failure library công khai của `suachua`: QGC/Mission Planner không nhận board, Betaflight không arm, GPS/compass lỗi, log rung. Cậu đăng ký Weekend Repair Bootcamp. Trước buổi học, hệ thống gửi checklist chuẩn bị: laptop, cable, driver, phần mềm, board test hoặc log mẫu.

Trong buổi học, Hoàng đi qua một journey có kiểm soát: mô phỏng trước, cấu hình trên bench, đọc lỗi, tạo report mini, rồi so sánh với case thật đã ẩn danh. Khi gặp lỗi không sửa được, instructor dùng chính format triage: triệu chứng, bằng chứng, giả thuyết, next action.

Kết quả là Hoàng không chỉ "biết bay", mà biết tự kiểm mức 1, gửi log đúng, đọc cảnh báo cơ bản và hiểu khi nào không nên bay. Journey này tạo yêu cầu cho curriculum dựa trên failure library, lab checklist, sample dataset/log và assessment theo năng lực.

### Journey 4: Kỹ thuật viên vận hành - Xử lý queue triage và bàn giao report

Kỹ thuật viên nội bộ của `suachua` bắt đầu ngày làm việc bằng queue case: ca mới, ca thiếu dữ liệu, ca đang phân tích, ca chờ khách quyết định, ca chuyển partner. Mỗi case phải có SLA rõ để khách không lo "gửi drone rồi mất hút".

Kỹ thuật viên mở case, kiểm tra intake, phân loại nền tảng: Betaflight, ArduPilot/Pixhawk, INAV, WebODM dataset hoặc khác. Nếu thiếu dữ liệu, họ gửi checklist bổ sung thay vì chat tự do. Nếu đủ dữ liệu, họ lưu file theo quy ước, backup config gốc, ghi bằng chứng kiểm tra và tạo report.

Điểm quan trọng là legal/safety boundary. Nếu khách yêu cầu bay test ngoài trời, mapping chính quy, phun thuốc, hoặc sửa chữa/bảo dưỡng có thể cần điều kiện pháp lý, kỹ thuật viên phải gắn cờ "compliance/partner gate" trước khi báo giá.

Journey này yêu cầu dashboard nội bộ tối thiểu, case status, file storage, report template, checklist theo platform, SLA, consent record, retention rule và cơ chế ẩn danh case study.

### Journey 5: Đối tác chuyên môn - Nhận referral cho ca vượt scope

Một số ca vượt phạm vi MVP: khảo sát cần RTK/GCP, phép bay ở khu vực nhạy cảm, phun thuốc nông nghiệp, hoặc sửa chữa/bảo dưỡng thương mại cần điều kiện rõ hơn. Với các ca này, `suachua` không cố nhận trọn gói.

Đối tác nhận một referral package: mô tả nhu cầu, dữ liệu đã có, rủi ro đã phát hiện, ảnh/log/report liên quan, và phần khách đã đồng ý chia sẻ. Khách cũng nhận giải thích vì sao ca này được chuyển tiếp: để tránh cam kết sai hoặc vận hành thiếu điều kiện.

Journey này giúp `suachua` vẫn giữ niềm tin dù không nhận mọi việc. Nó tạo yêu cầu cho partner directory, consent chia sẻ dữ liệu, referral status, và ranh giới dịch vụ công khai.

### Journey Requirements Summary

Các journey trên tạo ra các capability chính:

- Accountless intake có case link, thông tin liên hệ, phân loại nền tảng và checklist thiếu dữ liệu.
- Upload log/video/ảnh/config với giới hạn dung lượng, hướng dẫn file lớn và khả năng bổ sung sau.
- Triage workflow có status: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed.
- Report template gồm triệu chứng, bằng chứng, nguyên nhân khả dĩ, confidence level, risk level, legal/safety boundary và next action.
- Failure library ẩn danh dùng cho marketing, đào tạo và case reuse.
- Training workflow dựa trên lỗi thật, simulation, lab checklist và assessment thực hành.
- Internal ops dashboard để quản lý queue, SLA, file, report, consent, retention và partner referral.
- Compliance/partner gate cho mapping chính quy, phép bay, phun thuốc, sửa chữa/bảo dưỡng thương mại hoặc đào tạo cấp phép.
- Privacy/consent capability cho log GPS, video, ảnh, serial, thông tin khách và chia sẻ với partner.

## Domain-Specific Requirements

### Compliance & Regulatory

- MVP phải có **Legal/Safety Boundary** ở mọi điểm khách gửi ca: intake, report, báo giá và trang dịch vụ.
- Gói Basic triage/report không được mô tả như giấy phép bay, chứng nhận an toàn bay, hoặc cam kết drone được phép bay.
- Không bay test ngoài trời trong gói Basic. Mọi bay test ngoài trời phải đi qua gate riêng: drone, người điều khiển, vùng bay, mục đích bay, giấy phép/điều kiện liên quan, thời tiết, pin, failsafe.
- Các ca sửa chữa/bảo dưỡng thương mại, phun thuốc, mapping chính quy, phép bay, hoặc đào tạo cấp phép phải được đánh dấu **compliance/partner gate** trước khi nhận.
- Đào tạo MVP được mô tả là workshop/lab thực hành kỹ thuật, không phải đào tạo cấp phép điều khiển UAV nếu chưa đủ điều kiện pháp lý.
- Dữ liệu khách gửi như log GPS, ảnh/video, serial, thông tin liên hệ và dataset mapping phải có consent, retention policy và quy trình ẩn danh trước khi dùng làm case study.
- Report phải có disclaimer rõ: kết luận kỹ thuật dựa trên bằng chứng đã nhận, không thay thế kiểm tra pháp lý, không phải flight clearance.

### Aerospace/UAV Compliance Applicability Matrix

Bảng dưới đây xác định rõ phạm vi áp dụng các tiêu chuẩn tuân thủ chuyên ngành hàng không/UAV đối với MVP của `suachua`:

| Hạng mục tuân thủ (Compliance Area) | Trạng thái áp dụng | Ghi chú & Ranh giới (Notes & Boundaries) |
| --- | --- | --- |
| **Chứng nhận an toàn bay (Safety Certification)** | Out of Scope | MVP không cung cấp dịch vụ đánh giá hoặc cấp chứng nhận đủ điều kiện bay. Báo cáo chẩn đoán chỉ có giá trị tham khảo kỹ thuật. |
| **Kiểm tra bay ngoài trời (Outdoor Flight Testing)** | Partner-Gated | Bị cấm trong gói Basic triage. Bắt buộc phải thông qua Partner Gate để thẩm định giấy phép bay, vùng bay, người điều khiển và điều kiện pháp lý liên quan. |
| **Cơ sở bảo dưỡng thương mại (Maintenance Facility)** | Out of Scope / Partner-Gated | Các yêu cầu sửa chữa/bảo dưỡng UAV thương mại theo tiêu chuẩn hàng không (nếu có) phải được chuyển cho các đối tác có tư cách pháp nhân và cơ sở đạt chuẩn. |
| **Ngưỡng bằng chứng/Hiệu năng (Performance/Evidence Thresholds)** | In Scope | Áp dụng bắt buộc: Mọi kết luận cho phép "Bay thử nghiệm" phải đính kèm bằng chứng Bench Test/Simulation. Risk Level được gán dựa trên mức độ hoàn thiện của log/dữ liệu. |
| **Nghiệm thu mô phỏng (Simulation/Bench Validation)** | In Scope | Áp dụng bắt buộc cho các can thiệp ArduPilot/Pixhawk. Tiêu chí: Vượt qua các bài test motor order, failsafe, sensor calibration trên bench trước khi có kết luận. |
| **Kiểm soát xuất khẩu (Export/Control Compliance)** | N/A (Not Applicable) | Không áp dụng cho MVP vì đây là dịch vụ chẩn đoán dân sự nội địa, không liên quan đến xuất/nhập khẩu linh kiện hạn chế hoặc drone quân sự/lưỡng dụng. |

### Technical Constraints

- Mỗi case phải lưu được bằng chứng kỹ thuật: intake, file log/config, ảnh wiring, video lỗi, firmware/platform, report, quote, action taken và trạng thái quyết định.
- Mỗi thao tác cấu hình phải có backup trước khi sửa và diff/parameter hoặc ghi chú thay đổi sau khi sửa.
- Hệ thống phải hỗ trợ phân loại platform tối thiểu: Betaflight/FPV, ArduPilot/Pixhawk, QGroundControl/Mission Planner, INAV và WebODM dataset.
- Report phải dùng `confidence level`: confirmed, likely, needs bench test, needs legal flight/test, cannot determine from submitted evidence.
- Report phải dùng `risk level`: low, medium, high, do-not-fly-until-reviewed.
- Các file lớn như video lỗi, Blackbox log, DataFlash log hoặc dataset ảnh phải có giới hạn dung lượng, hướng dẫn upload và retention.
- Simulation/bench test được ưu tiên trước field test khi xử lý ArduPilot/Pixhawk, mission planning hoặc lỗi có rủi ro bay.
- MVP không phụ thuộc vào AI/log automation. AI hoặc parser chỉ được dùng như assistant sau khi workflow thủ công và taxonomy lỗi đã ổn.

### Integration Requirements

- Intake cần tích hợp hoặc chuẩn bị tích hợp object storage qua pre-signed upload/resumable upload cho file lớn.
- Workflow kỹ thuật cần kết nối với các công cụ vận hành: Mission Planner, QGroundControl, Betaflight Configurator, Blackbox Log Viewer, MAVProxy/pymavlink và WebODM.
- Case management cần trạng thái tối thiểu: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed.
- Partner referral cần lưu partner type, lý do referral, dữ liệu được phép chia sẻ, consent của khách và trạng thái chuyển tiếp.
- Failure library cần tách dữ liệu private và bản public đã ẩn danh.
- Training workflow cần liên kết case thật với lab/checklist để biến lỗi lặp lại thành bài học.

### Risk Mitigations

- **Regulatory overreach:** Không nhận hoặc quảng bá dịch vụ bay, sửa chữa/bảo dưỡng, mapping chính quy, phun thuốc hoặc cấp phép nếu chưa có điều kiện/đối tác phù hợp.
- **Safety risk:** Không đưa ra kết luận "bay được" nếu chưa đủ bằng chứng; dùng risk level và điều kiện kiểm tra rõ ràng.
- **Mapping expectation risk:** Tách rõ dataset review/WebODM demo với khảo sát/trắc địa có cam kết độ chính xác.
- **Privacy risk:** Có consent riêng cho xử lý dữ liệu, retention, chia sẻ partner và public case study.
- **Technical fragmentation:** Chỉ hỗ trợ sâu một số platform trong MVP; platform khác đưa vào "best effort" hoặc referral.
- **Operational overload:** Bắt đầu bằng manual workflow có schema, chưa xây app/AI/fleet system quá sớm.
- **Liability risk:** Mọi report phải ghi phạm vi phân tích, bằng chứng đã dùng, phần chưa xác minh và hành động đề xuất theo mức rủi ro.

## Innovation & Novel Patterns

### Detected Innovation Areas

#### Report-first UAV clinic

Điểm mới không nằm ở việc sửa drone, dạy drone hay xử lý WebODM riêng lẻ. Điểm khác biệt là lấy **báo cáo chẩn đoán** làm sản phẩm lõi đầu tiên. Khách không mua lời hứa "sửa được", mà mua một report có bằng chứng, mức rủi ro, nguyên nhân khả dĩ, phần chưa xác minh và bước tiếp theo.

Pattern này giúp MVP tránh ba bẫy: nhận sửa chữa/bảo dưỡng thương mại quá sớm, cạnh tranh trực diện với shop linh kiện, và nhảy vào mapping/trắc địa khi chưa đủ điều kiện. Report trở thành deliverable bán được, đồng thời là nền cho repair, training, case study và failure library.

#### Failure library before curriculum

Thay vì viết giáo trình UAV từ lý thuyết chung, `suachua` xây giáo trình từ lỗi thật. Mỗi ca triage có thể trở thành một case ẩn danh: lỗi không arm, Mission Planner/QGC không nhận board, GPS/compass lỗi, log rung, dataset WebODM lỗi.

Pattern này tạo lợi thế đào tạo: học viên học từ tình huống thực tế, có checklist, bằng chứng, report mẫu và cách ra quyết định. Giáo trình vì vậy luôn cập nhật theo lỗi thị trường, không bị tách khỏi thực hành.

#### Basic -> Pro -> Premium service ladder

Mô hình không bắt đầu bằng dịch vụ lớn. Khách đi qua một ladder rõ:

- **Basic:** One-Hour UAV Triage / Dataset Quality Report.
- **Pro:** repair/configuration, log diagnosis, workshop thực hành.
- **Premium:** WebODM support, small retainer, partner referral cho mapping/pháp lý/phép bay.

Ladder này giảm rủi ro bán hàng: khách tin từ ca nhỏ trước, rồi mới mua sửa sâu hoặc đào tạo.

#### Compliance-aware productized service

Một điểm khác biệt quan trọng là đưa legal/safety/privacy gate vào sản phẩm ngay từ đầu. `suachua` không cố nhận mọi ca, mà dùng ranh giới dịch vụ như một phần của niềm tin: ca nào xử lý được, ca nào cần partner, ca nào không nên bay, ca nào không thể kết luận từ bằng chứng hiện có.

### Market Context & Competitive Landscape

Thị trường có các nhóm người chơi rõ: dealer/hardware, mapping provider, academy, shop sửa nhỏ, cộng đồng kỹ thuật và công cụ open-source. `suachua` không cần đánh trực diện với từng nhóm. Cửa vào nằm ở khoảng trống giữa sửa lỗi informal và đào tạo lý thuyết: khách cần hiểu vấn đề bằng một report rõ ràng, không chỉ một đoạn chat hoặc lời hứa sửa.

Các đối thủ lớn hơn có lợi thế thiết bị, dự án, đào tạo dài hạn hoặc mạng lưới. `suachua` có thể khác biệt bằng tốc độ productize triage, chất lượng report, failure library, và khả năng biến mỗi lỗi thành tài sản học tập.

### Validation Approach

Innovation này cần được kiểm chứng bằng hành vi khách hàng, không bằng niềm tin nội bộ.

- Trong 7 ngày: tạo 3 demo failure cases và report template.
- Trong 30 ngày: hoàn thành 5-10 ca triage/audit thật hoặc pilot.
- Mỗi ca đo: khách có gửi đủ dữ liệu không, report có giúp họ quyết định không, có upsell sang Pro/training không.
- Failure library chỉ được xem là có giá trị khi có ít nhất 5 lỗi lặp lại.
- Training chỉ mở rộng khi có đủ case thật để tạo lab, không viết curriculum lớn trước.
- Web intake/report generator chỉ nên xây khi manual workflow đã lặp lại đủ để biết schema ổn.

### Risk Mitigation

- Nếu khách không trả tiền cho report: chuyển Basic triage thành lead-in giá thấp hoặc bundle với repair/training.
- Nếu report mất quá nhiều thời gian: giới hạn scope một giờ, dùng checklist thiếu dữ liệu và confidence level.
- Nếu legal/compliance quá rủi ro: giữ Basic ở mức no-flight diagnostic/report và dùng partner gate cho ca vượt phạm vi.
- Nếu failure library không đủ case thật: lấy demo từ lab/forum có ghi rõ nguồn, nhưng không giả làm case khách thật.
- Nếu khách kỳ vọng sửa ngay: định vị rõ report là bước quyết định trước sửa, không phải thay thế sửa chữa.
- Nếu AI/log automation hấp dẫn quá sớm: trì hoãn tới sau 20-50 case thật và chỉ dùng như assistant.

## Productized Service Specific Requirements

### Project-Type Overview

`suachua` là một productized service, không phải web app thuần túy trong MVP. Sản phẩm lõi là một quy trình dịch vụ có thể bán, lặp lại và đo được: khách gửi lỗi UAV, nhận report chẩn đoán, rồi quyết định tự xử lý, sửa sâu, học thêm, nâng cấp hoặc chuyển partner.

MVP phải ưu tiên chuẩn hóa dịch vụ trước khi xây phần mềm riêng. Web intake, tracker, report portal hoặc dashboard nội bộ chỉ được triển khai khi manual workflow đã chứng minh nhu cầu và schema case đã ổn.

### Service Package Structure

MVP service ladder gồm:

- **Basic:** One-Hour UAV Triage, Dataset Quality Report, Used Drone Buying Audit.
- **Pro:** repair/configuration handoff, log diagnosis, FPV tune/check, weekend repair bootcamp.
- **Premium:** WebODM support, small support retainer, partner referral cho mapping/pháp lý/phép bay.

Mỗi gói phải có:

- Khách phù hợp.
- Điều kiện đầu vào.
- Deliverable cụ thể.
- SLA dự kiến.
- Ranh giới không làm.
- Điều kiện upsell hoặc referral.

### Operational Workflow Requirements

Quy trình dịch vụ tối thiểu:

1. Khách gửi intake.
2. Hệ thống/cá nhân kiểm tra dữ liệu thiếu.
3. Case được phân loại theo platform và risk.
4. Kỹ thuật viên phân tích bằng chứng.
5. Report được tạo theo template.
6. Khách nhận report và chọn next action.
7. Case được đóng, upsell, hoặc referral.
8. Case phù hợp được ẩn danh đưa vào failure library.

Workflow không được phụ thuộc vào chat tự do. Chat có thể hỗ trợ, nhưng trạng thái case, file, consent, report và decision record phải được lưu có cấu trúc.

### Technical Architecture Considerations

Trong MVP manual-first, kiến trúc tối thiểu có thể là:

- Folder convention cho từng case.
- Spreadsheet hoặc lightweight database cho case tracking.
- Report template Markdown/Docs/PDF.
- Storage riêng cho file khách gửi.
- Checklist theo platform.
- Failure taxonomy.
- Partner/referral log.
- Consent và retention record.

Khi chuyển sang web app, các module cần chuẩn bị gồm:

- Accountless intake.
- Case link/token.
- Large file upload qua pre-signed/resumable upload.
- Status tracker.
- Report viewer.
- Internal ops dashboard.
- Partner referral workflow.
- Failure library public/private split.
- Consent and retention management.

### Data Model Requirements

Mỗi case cần có các trường tối thiểu:

- Case ID.
- Customer contact.
- Drone/platform type.
- Firmware/tooling.
- Symptom category.
- Submitted files.
- Missing information checklist.
- Risk level.
- Confidence level.
- Legal/safety boundary.
- Report status.
- Quote/next action.
- Consent flags.
- Retention deadline.
- Referral status.
- Public anonymized case eligibility.

### Service Quality Requirements

- 100% ca Basic phải có report bàn giao.
- 100% report phải có evidence section, risk level và next action.
- 100% case thiếu dữ liệu phải nhận checklist bổ sung, không bị từ chối chung chung.
- 100% case dùng làm public case study phải được ẩn danh và có consent.
- SLA Basic phải rõ, ví dụ phản hồi intake trong 24h và report trong khung thời gian đã hứa.
- Mọi gói dịch vụ phải có ranh giới "không bao gồm" để tránh overclaim.

### Implementation Considerations

MVP không nên bắt đầu bằng full web app. Thứ tự triển khai hợp lý:

1. Manual service kit: intake checklist, report template, folder convention, pricing ladder.
2. Pilot cases: 5-10 ca thật hoặc demo có report.
3. Failure library: ít nhất 5 lỗi lặp lại.
4. Lightweight case tracker: spreadsheet/Notion/Airtable hoặc app nhỏ.
5. Web intake/report portal sau khi schema ổn.
6. Automation/log parser/AI assistant chỉ sau khi có 20-50 case thật.

### Sections Not Prioritized in MVP

- Không ưu tiên mobile app native.
- Không ưu tiên customer account system đầy đủ.
- Không ưu tiên AI diagnosis tự động.
- Không ưu tiên fleet management lớn.
- Không ưu tiên mapping/trắc địa full-service.
- Không ưu tiên official training/licensing workflow nếu chưa có điều kiện pháp lý.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue + validated learning MVP.

MVP của `suachua` phải chứng minh rằng khách hàng sẵn sàng gửi lỗi UAV và trả tiền cho một report chẩn đoán rõ ràng trước khi mở rộng sang sửa chữa sâu, đào tạo dài hơn, WebODM support hoặc phần mềm riêng. Giá trị tối thiểu khiến khách nói "cái này hữu ích" là: họ hiểu drone đang gặp vấn đề gì, mức rủi ro ra sao, cần gửi thêm gì, và bước tiếp theo nên là tự xử lý, sửa sâu, học thêm, dừng bay hoặc chuyển partner.

MVP không phụ thuộc vào web app đầy đủ. Phần mềm nếu có trong Phase 1 chỉ nên phục vụ intake/tracking tối giản; workflow chính vẫn có thể vận hành bằng form, folder convention, spreadsheet, report template và checklist.

**Resource Requirements:**

- 1 người có năng lực kỹ thuật UAV nền tảng: Betaflight, ArduPilot/Pixhawk, Mission Planner/QGroundControl, log/config cơ bản.
- 1 bộ công cụ vận hành: laptop, phần mềm GCS/configurator, storage, report template, intake checklist, case tracker.
- 1 bộ demo/lab tối thiểu: 3 demo failure cases, log/config mẫu, dataset WebODM mẫu nếu có.
- 1 danh sách partner/referral cho ca vượt scope: mapping chính quy, phép bay, pháp lý, phun thuốc, sửa chữa/bảo dưỡng cần điều kiện.

### MVP Feature Set (Phase 1: 0-90 ngày)

**Core User Journeys Supported:**

- Minh: chủ drone/self-build/FPV gửi lỗi và nhận One-Hour UAV Triage Report.
- Lan: khách gửi dataset/ảnh và nhận Dataset Quality Report ở mức demo/entry-level.
- Hoàng: học viên tham gia workshop/lab dựa trên lỗi thật.
- Kỹ thuật viên nội bộ: quản lý queue triage, dữ liệu case, report và handoff.
- Đối tác chuyên môn: nhận referral package cho ca vượt scope.

**Must-Have Capabilities:**

- One-Hour UAV Triage offer có mô tả, giá/pilot pricing, khách phù hợp và ranh giới không làm.
- Intake checklist cho Betaflight/FPV, ArduPilot/Pixhawk, Mission Planner/QGroundControl, INAV và WebODM dataset.
- Report template có: triệu chứng, bằng chứng, nguyên nhân khả dĩ, confidence level, risk level, legal/safety boundary và next action.
- Case tracking thủ công có trạng thái: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed.
- Folder convention và file naming cho log/config/ảnh/video/report.
- Consent và retention rule cho dữ liệu khách gửi.
- 3 demo failure cases: QGC/Mission Planner không nhận board, Betaflight không arm, log rung/GPS lỗi.
- Failure library ban đầu với ít nhất 5 lỗi lặp lại hoặc demo/lab case rõ nguồn.
- Basic/Pro/Premium ladder nháp, trong đó Pro/Premium có compliance/partner gate khi cần.
- Workshop hoặc pilot training nhỏ chỉ ở mức thực hành kỹ thuật, không quảng bá là đào tạo cấp phép UAV.

**Explicit Phase 1 Boundaries:**

- Không bay test ngoài trời trong Basic.
- Không nhận mapping/trắc địa chính quy có cam kết độ chính xác nếu chưa có đối tác/quy trình phù hợp.
- Không nhận phun thuốc nông nghiệp hoặc dịch vụ phép bay trong MVP.
- Không mô tả report là flight clearance, chứng nhận an toàn bay, hoặc tư vấn pháp lý.
- Không xây AI diagnosis, fleet management hoặc web app đầy đủ trước khi manual workflow lặp lại đủ rõ.
- Không tự động public case study nếu chưa ẩn danh và có consent.

### Post-MVP Features

**Phase 2 (3-6 tháng): Workflow Tooling + Training Expansion**

- Lightweight web intake hoặc form nâng cấp với case ID/link.
- Status tracker cho khách.
- Report generator từ template.
- Failure library public/private split.
- Basic Self-Check Kit để khách tự gửi log/ảnh/video đúng chuẩn.
- Weekend Repair Bootcamp dựa trên 5-10 case thật.
- Dataset Quality Report/WebODM demo rõ hơn.
- Partner/referral directory và consent chia sẻ dữ liệu.

**Phase 3 (6-12 tháng): Support Retainer + Data/Automation**

- Support retainer nhỏ cho 1-3 drone hoặc CLB/trường/shop.
- Maintenance history theo drone/pin/config.
- Log parser helper cho một số platform đã có đủ case.
- WebODM Processing Desk ở mức entry-level/premium nhẹ.
- Four-Week Skill Ladder.
- Partner workflow cho mapping, pháp lý, phép bay hoặc sửa chữa/bảo dưỡng cần điều kiện.

**Vision (12 tháng trở lên): UAV Practical School and Service Lab**

- Report portal đầy đủ.
- Simulator scenario library từ case thật.
- AI-assisted triage sau khi có 20-50+ case thật.
- Data quality scoring.
- Chương trình đào tạo/lab có chuẩn đánh giá năng lực.
- Hệ sinh thái đối tác cho dịch vụ UAV vượt scope cá nhân.

### Risk Mitigation Strategy

**Technical Risks:**

- Rủi ro: quá nhiều platform và file format.
  - Mitigation: Phase 1 hỗ trợ sâu Betaflight, ArduPilot/Pixhawk, Mission Planner/QGroundControl và WebODM dataset cơ bản; nền tảng khác là best effort hoặc referral.
- Rủi ro: report sai khiến khách hiểu nhầm là drone bay an toàn.
  - Mitigation: mọi report có confidence level, risk level, phần chưa xác minh và disclaimer "not flight clearance".
- Rủi ro: file lớn gây lỗi intake.
  - Mitigation: Phase 1 có hướng dẫn file; Phase 2 mới làm pre-signed/resumable upload.

**Market Risks:**

- Rủi ro: khách không muốn trả tiền cho report.
  - Mitigation: pilot pricing, bundle report với repair/training, đo conversion từ Basic sang Pro.
- Rủi ro: khách kỳ vọng sửa ngay hoặc mapping chính quy giá rẻ.
  - Mitigation: pricing page và intake nêu rõ ranh giới dịch vụ, dataset review khác survey/trắc địa.
- Rủi ro: thiếu case thật để xây failure library.
  - Mitigation: tạo 3 demo case từ lab/forum có ghi nguồn, mời 3-5 khách pilot trong cộng đồng.

**Resource Risks:**

- Rủi ro: một người không đủ vận hành quá nhiều gói.
  - Mitigation: Phase 1 chỉ tập trung Basic triage/report + một workshop pilot nhỏ.
- Rủi ro: xử lý case mất quá nhiều thời gian.
  - Mitigation: giới hạn scope One-Hour Triage, dùng checklist thiếu dữ liệu, không nhận ca vượt scope.
- Rủi ro: compliance/legal quá phức tạp.
  - Mitigation: Basic no-flight diagnostic/report, partner gate cho hoạt động regulated.

## Functional Requirements

### Service Package & Intake

- FR1: Khách hàng có thể xem các gói dịch vụ Basic, Pro và Premium cùng điều kiện phù hợp của từng gói.
- FR2: Khách hàng có thể bắt đầu một case triage mà không cần tạo tài khoản trước.
- FR3: Khách hàng có thể cung cấp thông tin liên hệ để nhận link hoặc cập nhật case.
- FR4: Khách hàng có thể chọn loại nhu cầu: UAV triage, dataset quality, used drone audit, training interest hoặc partner referral.
- FR5: Khách hàng có thể khai báo nền tảng/kỹ thuật liên quan như Betaflight, ArduPilot/Pixhawk, Mission Planner/QGroundControl, INAV hoặc WebODM dataset.
- FR6: Hệ thống có thể hướng dẫn khách cung cấp thông tin bắt buộc theo từng loại case.
- FR7: Hệ thống có thể phát hiện và liệt kê thông tin còn thiếu trong case intake.

### Evidence & Case Management

- FR8: Khách hàng có thể gửi log, cấu hình, ảnh wiring, video lỗi hoặc dataset liên quan đến case.
- FR9: Khách hàng có thể bổ sung bằng chứng vào một case đã tạo.
- FR10: Hệ thống có thể gán Case ID cho mỗi case.
- FR11: Kỹ thuật viên có thể phân loại case theo platform, triệu chứng, mức rủi ro và trạng thái xử lý.
- FR12: Kỹ thuật viên có thể quản lý trạng thái case: New, Missing Info, In Review, Report Ready, Waiting Decision, Referred, Closed.
- FR13: Kỹ thuật viên có thể lưu record về file khách gửi, report, báo giá, quyết định của khách và hành động tiếp theo.
- FR14: Hệ thống có thể đánh dấu case phù hợp hoặc không phù hợp để dùng làm case study ẩn danh.

### Diagnostic Reporting

- FR15: Kỹ thuật viên có thể tạo report chẩn đoán cho mỗi case Basic.
- FR16: Report có thể mô tả triệu chứng, bằng chứng đã kiểm tra, nguyên nhân khả dĩ và bước xử lý tiếp theo.
- FR17: Report có thể ghi `confidence level` cho từng kết luận.
- FR18: Report có thể ghi `risk level` cho case hoặc hạng mục lỗi.
- FR19: Report có thể phân biệt lỗi đã xác nhận, lỗi nghi ngờ, phần cần bench test và phần cần kiểm tra hợp lệ ngoài hiện trường.
- FR20: Report có thể nêu rõ phạm vi phân tích và điều kiện chưa xác minh.
- FR21: Khách hàng có thể nhận report và chọn next action: tự xử lý, sửa sâu, học thêm, dừng bay hoặc chuyển partner.

### Legal, Safety & Privacy

- FR22: Hệ thống có thể hiển thị legal/safety boundary trong intake, report và mô tả dịch vụ.
- FR23: Kỹ thuật viên có thể đánh dấu case cần compliance/partner gate.
- FR24: Kỹ thuật viên có thể đánh dấu case không được khuyến nghị bay cho tới khi xử lý thêm.
- FR25: Khách hàng có thể đồng ý hoặc không đồng ý cho xử lý dữ liệu cá nhân và dữ liệu kỹ thuật.
- FR26: Khách hàng có thể đồng ý riêng cho việc ẩn danh case để dùng làm case study.
- FR27: Hệ thống có thể lưu consent, retention deadline và trạng thái chia sẻ dữ liệu.
- FR28: Hệ thống có thể tách dữ liệu private khỏi bản public đã ẩn danh.

### Failure Library & Training

- FR29: Kỹ thuật viên có thể chuyển case phù hợp thành mục trong failure library.
- FR30: Failure library có thể phân loại lỗi theo platform, triệu chứng, nguyên nhân, bằng chứng và bài học.
- FR31: Người học có thể xem các case public đã ẩn danh.
- FR32: Người học có thể đăng ký workshop hoặc lab thực hành dựa trên lỗi thật.
- FR33: Instructor có thể liên kết case thật với checklist, lab exercise và assessment.
- FR34: Hệ thống có thể tạo và hiển thị Basic Self-Check Kit dưới dạng checklist, liệt kê rõ các tài liệu bắt buộc phải tải lên (log, ảnh FC hai mặt, video cảnh báo, thông số cấu hình) tương ứng với từng nền tảng của khách (VD: ArduPilot, Betaflight).

### Dataset & WebODM Workflow

- FR35: Khách hàng có thể gửi yêu cầu Dataset Quality Report.
- FR36: Khách hàng có thể khai báo mục tiêu đầu ra như visual demo, orthomosaic, 3D model hoặc dataset review.
- FR37: Report dataset có thể phân biệt review/demo với mapping hoặc trắc địa chính quy.
- FR38: Kỹ thuật viên có thể phân loại dataset (Pass/Fail) và xuất ra báo cáo đề xuất cách bay lại với chỉ số cụ thể (VD: yêu cầu tăng overlap lên 75%, điều chỉnh góc camera, bổ sung/sửa lỗi metadata ảnh).

### Upsell, Referral & Partner Workflow

- FR39: Kỹ thuật viên có thể đề xuất upsell từ Basic sang Pro hoặc Training dựa trên các điều kiện rõ ràng: Risk Level ở mức thấp/trung bình, Confidence Level cao, và lỗi nằm trong danh mục có thể xử lý an toàn tại lab.
- FR40: Kỹ thuật viên có thể chuyển case sang partner khi vượt phạm vi `suachua`.
- FR41: Hệ thống có thể lưu lý do referral, loại partner, dữ liệu được phép chia sẻ và trạng thái referral.
- FR42: Hệ thống phải hiển thị cho khách hàng trên Report hoặc Status Page đủ 4 trường bắt buộc: trạng thái xử lý (status), lý do giữ/từ chối/chuyển tiếp (reason), ranh giới dịch vụ (boundary) và hành động tiếp theo (next action).

### Operations & Validation Metrics

- FR43: Kỹ thuật viên có thể xem queue case theo trạng thái và mức ưu tiên.
- FR44: Kỹ thuật viên có thể theo dõi SLA hoặc thời hạn phản hồi của từng case.
- FR45: Hệ thống có thể ghi nhận số ca triage hoàn tất, số report bàn giao, số case study tạo được và số upsell/referral.
- FR46: Hệ thống có thể hỗ trợ pilot tracking cho mục tiêu 5-10 ca đầu, 10-20 ca trong 90 ngày và failure library ban đầu.

## Non-Functional Requirements

Các yêu cầu phi chức năng dưới đây đã được viết lại theo chuẩn SMART với tiêu chí nghiệm thu (metric) và phương pháp đo lường (measurement method) rõ ràng để loại bỏ sự mơ hồ.

### Performance & Service SLA

- **NFR1 - Intake Response Time:** Phase 1 phải phản hồi intake mới trong vòng 24 giờ làm việc. *Measurement method:* Timestamp của tin nhắn/email trả lời đầu tiên trừ đi timestamp gửi intake.
- **NFR2 - Public SLA:** Basic triage/report phải công khai SLA hoàn thành chẩn đoán trong tối đa 3 ngày làm việc kể từ khi case có đủ dữ liệu bắt buộc. *Measurement method:* Kiểm tra SLA hiển thị trên trang dịch vụ/intake form; audit timestamp xác nhận 100% case Basic đủ dữ liệu đạt trạng thái Report Ready trong <= 3 ngày làm việc hoặc có lý do ngoại lệ được ghi nhận (Missing Info, Referred, Out-of-scope).
- **NFR3 - Missing Info Checklist SLA:** Với case thiếu dữ liệu, checklist bổ sung phải được gửi cho khách trong vòng 24 giờ trước khi case chuyển sang trạng thái In Review. *Measurement method:* Log thời gian gửi checklist so với thời gian nhận intake.
- **NFR4 - Report Delivery Completion:** 100% case ở trạng thái Report Ready phải gửi kèm link/file report hoàn thiện hoặc ghi chú lý do từ chối dịch vụ. *Measurement method:* Kiểm tra ngẫu nhiên 10 case ở trạng thái Report Ready xem có đính kèm file/link report hợp lệ không.
- **NFR5 - Overdue SLA Alert:** Queue nội bộ phải cho phép kỹ thuật viên lọc và nhận diện 100% case sát hạn/quá hạn SLA (còn < 12 giờ) mà không cần đọc từng case thủ công. *Measurement method:* Dashboard/Spreadsheet có cột cảnh báo màu hoặc filter hiển thị đúng các case sát hạn.

### Security & Privacy

- **NFR6 - Data Classification:** 100% dữ liệu khách gửi (liên hệ, log GPS, ảnh/video, serial, dataset) phải được quản lý như dữ liệu cần bảo vệ. *Measurement method:* Audit kho lưu trữ xác nhận phân quyền thư mục Private không được chia sẻ public.
- **NFR7 - Access Control:** 100% thư mục chứa dữ liệu private của khách chỉ cấp quyền cho nhân sự được phân công. *Measurement method:* Review quyền truy cập trên Drive/hệ thống quản lý.
- **NFR8 - Anonymization Standard:** 100% public case study phải bị xóa thông tin nhận dạng (tên, email, số điện thoại, tọa độ GPS) trước khi xuất bản. *Measurement method:* QA review case study public để đảm bảo không còn dữ liệu PII/tọa độ.
- **NFR9 - Consent for Referral:** Tỷ lệ chia sẻ dữ liệu cho partner trái phép phải là 0%. Hệ thống yêu cầu checkbox/log đồng ý trước khi chuyển case. *Measurement method:* Mọi referral package phải đính kèm screenshot/log consent từ khách.
- **NFR10 - Data Retention Limit:** Dữ liệu gốc của case Closed phải được xóa hoặc được gia hạn bằng consent mới trong vòng 30 ngày sau khi đóng case. *Measurement method:* Audit định kỳ xác nhận 100% case Closed quá 30 ngày có deletion record hoặc active retention-extension consent.
- **NFR11 - Consent Traceability:** Hệ thống lưu trữ được timestamp và nội dung đồng ý (consent) của khách hàng về xử lý dữ liệu. *Measurement method:* Export DB/Spreadsheet thấy rõ 2 cột "Consent Time" và "Consent Status".
- **NFR12 - Secure Transmission:** 100% file private hoặc report phải được gửi qua kênh có kiểm soát truy cập, không gửi qua link public. *Measurement method:* Audit các link report đã gửi cho khách, đảm bảo phải cần quyền truy cập hợp lệ.

### Reliability & Data Integrity

- **NFR13 - Unique Identifier:** 100% case được tạo phải gán một Case ID định dạng duy nhất. *Measurement method:* Truy vấn DB/Spreadsheet xác nhận không có Case ID trùng lặp.
- **NFR14 - Immutability of Source Files:** Tỷ lệ ghi đè file gốc do kỹ thuật viên xử lý phải là 0%. *Measurement method:* So sánh file size/checksum của file gốc và file trong kho lưu trữ định kỳ.
- **NFR15 - Configuration Audit Trail:** 100% thao tác sửa đổi cấu hình phải có file diff/record lưu lại. *Measurement method:* Tìm thấy file diff hoặc ghi chú thay đổi đính kèm trong thư mục case.
- **NFR16 - Report Traceability:** 100% report phải chứa reference link hoặc tên file rõ ràng trỏ về dữ liệu bằng chứng đã dùng. *Measurement method:* QA report đảm bảo mọi kết luận đều mapping với file/bằng chứng đính kèm.
- **NFR17 - State Machine Compliance:** 0% case bị đóng nếu chưa đi qua trạng thái kết thúc hợp lệ (completed, declined, referred, out-of-scope). *Measurement method:* Audit lịch sử trạng thái của case.
- **NFR18 - Storage Separation:** 100% dữ liệu dùng cho Failure Library public được tách biệt hoàn toàn khỏi kho dữ liệu private. *Measurement method:* Kiểm tra cấu trúc thư mục đảm bảo độc lập.

### Compliance & Safety

- **NFR19 - Legal Disclaimer Visibility:** 100% report xuất ra tự động đính kèm disclaimer (không phải flight clearance/giấy phép). *Measurement method:* Kiểm tra format report output.
- **NFR20 - Regulated Operations Gate:** Mọi case có dấu hiệu bay test ngoài trời, mapping chính quy, phun thuốc tự động gán cờ Compliance Risk. *Measurement method:* Test tạo case giả và xem cảnh báo/workflow chuyển tiếp partner.
- **NFR21 - Risk Level Schema:** Bắt buộc phân loại risk level (low, medium, high, do-not-fly-until-reviewed) khi hoàn tất report. *Measurement method:* System/form không cho phép submit report nếu thiếu Risk Level.
- **NFR22 - Evidence Threshold for Safety:** Report chỉ được dùng kết luận "có thể bay thử nghiệm có kiểm soát" khi đính kèm tối thiểu 3 nhóm bằng chứng: bench test hoặc simulation pass, ảnh/video/config/log liên quan, và risk level + confidence level cho kết luận đó. Nếu thiếu một trong 3 nhóm, report phải dùng trạng thái "needs bench test", "needs simulation" hoặc "cannot determine from submitted evidence". *Measurement method:* QA review 100% report có kết luận bay thử nghiệm để xác nhận đủ 3 nhóm bằng chứng và trạng thái kết luận đúng.
- **NFR23 - Training Scope Clarity:** 100% quảng bá Training MVP phải chứa tuyên bố "lab thực hành kỹ thuật, không cấp bằng bay". *Measurement method:* Review copy trên landing page/sales kit.
- **NFR24 - Dataset Expectations Management:** Báo cáo Dataset Quality tự động đính kèm cảnh báo phân biệt demo/visual và khảo sát chính quy. *Measurement method:* Đọc report template.

### Accessibility & Usability

- **NFR25 - Readability Level:** Intake/report sử dụng ngôn ngữ rõ ràng, người dùng không chuyên hiểu được thông điệp mà không cần tra cứu kỹ thuật. *Measurement method:* Khảo sát 5 khách hàng thật, yêu cầu họ đọc report và chọn đúng mức độ rủi ro (đạt >= 80%).
- **NFR26 - Next Action Clarity:** 100% report có mục "Bước Tiếp Theo" với tối đa 3 gạch đầu dòng rõ ràng. *Measurement method:* Đếm số lượng hành động cụ thể ở mục Next Action trong report.
- **NFR27 - Mobile Responsiveness:** Form intake hiển thị đầy đủ, không lỗi layout trên màn hình mobile chuẩn (375-430px chiều ngang). *Measurement method:* Mở form trên Chrome DevTools với profile mobile device phổ biến.
- **NFR28 - Self-Serve Data Preparation:** Tỷ lệ case phải gửi checklist bổ sung do hướng dẫn intake/checklist thiếu hoặc sai phải < 20% tổng số case mới mỗi tháng. *Measurement method:* Với mỗi case chuyển sang Missing Info, kỹ thuật viên gắn reason code `customer_omission` hoặc `checklist_gap`; chỉ tính `checklist_gap` vào metric này.
- **NFR29 - Disclaimer Comprehension:** Các cảnh báo pháp lý/an toàn ngắn gọn dưới 50 chữ/đoạn. *Measurement method:* Đếm số từ trong đoạn disclaimer.

### Scalability & Operational Capacity

- **NFR30 - Throughput Capacity:** Workflow thủ công Phase 1 cho phép 1 kỹ thuật viên xử lý hoàn tất tối thiểu 5 ca/ngày mà không vi phạm SLA. *Measurement method:* Ghi nhận tổng thời gian triage trung bình (mục tiêu < 60 phút/ca).
- **NFR31 - Schema Exportability:** Case tracking có thể export toàn bộ metadata ra định dạng chuẩn (CSV/JSON) không lỗi cấu trúc. *Measurement method:* Chạy export và parse dữ liệu kiểm tra lỗi.
- **NFR32 - Taxonomy Extensibility:** Thêm loại platform/lỗi mới không yêu cầu sửa record cũ. *Measurement method:* Cập nhật danh sách taxonomy và xác nhận không có breaking changes trên report cũ.
- **NFR33 - Role Separation:** Hệ thống filter case theo loại dịch vụ nhanh chóng (< 3 giây) để chia sẻ công việc. *Measurement method:* Đo thời gian load dữ liệu sau khi apply filter.
- **NFR34 - Conversion Tracking:** Có thể trích xuất tỷ lệ chuyển đổi từ Basic sang Pro/Training/Referral định kỳ. *Measurement method:* Chạy report "Conversion Rate" theo tháng.

### Integration & Portability

- **NFR35 - File Format Compatibility:** Lưu trữ xử lý nguyên vẹn định dạng: .txt, .log, .bbl, .bin, .param, .diff, .zip. *Measurement method:* Upload/download test và kiểm tra checksum.
- **NFR36 - Report Export Formats:** Report template xuất PDF/HTML để xem trên trình duyệt không cần app phụ. *Measurement method:* Test mở report trên trình duyệt mặc định máy tính trắng.
- **NFR37 - Storage Portability:** Tên folder và file tuân thủ POSIX-compliant (chỉ dùng `[a-zA-Z0-9_-]`) để đảm bảo không lỗi khi lưu trữ cross-platform hoặc cloud. *Measurement method:* Script validate định dạng tên file đạt 100% pass.
- **NFR38 - Referral Data Boundary:** Package referral tạo ra không bị trộn lẫn thông tin private (nếu khách không chia sẻ). *Measurement method:* Audit ZIP package trước khi gửi partner.
- **NFR39 - Large File Upload Resilience:** Upload web intake (ở Phase 2) hỗ trợ Resume hoặc cảnh báo khi mạng không ổn định với file > 100MB. *Measurement method:* Thử nghiệm tắt mạng giữa chừng và resume quá trình upload.
