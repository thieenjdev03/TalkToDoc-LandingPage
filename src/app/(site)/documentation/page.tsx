import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TalkToDoc - Tài Liệu Hướng Dẫn",
    description: "Tài liệu hướng dẫn sử dụng TalkToDoc. Tìm hiểu cách sử dụng các tính năng và dịch vụ của nền tảng tư vấn y tế trực tuyến.",
    keywords: "TalkToDoc, hướng dẫn, tài liệu, cách sử dụng, support, API documentation"
};

export default function Page() {
    return (
        <>
        <Documentation/>
        </>
    );
};
