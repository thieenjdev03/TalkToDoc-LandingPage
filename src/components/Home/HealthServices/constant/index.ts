import { CalendarDays, BriefcaseMedical, Microscope, Video, Pill, HandHeart, Pipette } from "lucide-react";

interface ServiceItem {
    icon: React.ElementType;
    title: string;
    link?: string;
}

export const services: ServiceItem[] = [
    { icon: CalendarDays, title: "Đặt khám theo bác sĩ", link: "#doctor-section" },
    { icon: BriefcaseMedical, title: "Đặt khám chuyên khoa", link: "#specialty-section" },
    { icon: Pipette, title: "Đặt lịch xét nghiệm", link: "#test-section" },
    { icon: Microscope, title: "Đặt lịch tiêm chủng", link: "#vaccine-section" },
    { icon: Video, title: "Gọi video với bác sĩ", link: "#video-section" },
    { icon: Pill, title: "Đặt thuốc", link: "#medicine-section" },
    { icon: HandHeart, title: "Tư vấn dinh dưỡng", link: "#nutrition-section" },
];
