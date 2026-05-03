import { z } from "zod";

export const servicePackageSchema = z.object({
  id: z.enum(["basic", "pro", "premium"]),
  name: z.enum(["Basic", "Pro", "Premium"]),
  label: z.string().min(1),
  bestFor: z.string().min(1),
  outcome: z.string().min(1),
  sla: z.string().min(1),
  boundary: z.string().min(1),
  accent: z.enum(["blue", "green", "slate"]),
});

export const servicePackagesSchema = z.array(servicePackageSchema).length(3);

export type ServicePackage = z.infer<typeof servicePackageSchema>;

export const servicePackages = servicePackagesSchema.parse([
  {
    id: "basic",
    name: "Basic",
    label: "Triage report",
    bestFor: "Phù hợp khi drone có cảnh báo, log lỗi hoặc hành vi lạ cần đọc nhanh.",
    outcome: "Nhận report chẩn đoán, mức rủi ro và bước tiếp theo dựa trên bằng chứng đã gửi.",
    sla: "Report trong tối đa 3 ngày làm việc sau khi đủ dữ liệu bắt buộc.",
    boundary: "Không bao gồm bay test ngoài trời, sửa phần cứng hoặc xác nhận drone được phép bay.",
    accent: "blue",
  },
  {
    id: "pro",
    name: "Pro",
    label: "Repair handoff",
    bestFor: "Phù hợp khi Basic cho thấy lỗi có thể xử lý an toàn tại lab.",
    outcome: "Nhận đề xuất sửa, cấu hình hoặc log diagnosis sâu hơn với phạm vi rõ ràng.",
    sla: "Lịch xử lý được xác nhận sau khi kỹ thuật viên xem bằng chứng và rủi ro.",
    boundary: "Các thao tác ngoài lab hoặc có rủi ro pháp lý sẽ chuyển qua partner gate.",
    accent: "green",
  },
  {
    id: "premium",
    name: "Premium",
    label: "Dataset and support",
    bestFor: "Phù hợp với WebODM, dataset demo hoặc support nhỏ cho đội vận hành.",
    outcome: "Nhận đánh giá chất lượng dataset, support retainer nhẹ hoặc referral phù hợp.",
    sla: "Phạm vi và lịch được chốt riêng theo dữ liệu, số drone và mục tiêu vận hành.",
    boundary: "Không thay thế khảo sát chính quy, giấy phép bay hoặc thẩm định pháp lý.",
    accent: "slate",
  },
]);

export const serviceBoundaryDisclaimers = [
  "Report kỹ thuật dựa trên dữ liệu bạn gửi, không phải flight clearance, giấy phép bay hoặc chứng nhận an toàn bay.",
  "Basic không bao gồm bay test ngoài trời; mọi yêu cầu bay, mapping hoặc phun thuốc đi qua partner gate.",
  "Workshop là lab thực hành kỹ thuật, không cấp bằng bay hoặc thay thế huấn luyện được cấp phép.",
];
