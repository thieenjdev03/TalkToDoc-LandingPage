import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TalkToDoc - Đăng Ký",
  description: "Đăng ký tài khoản TalkToDoc để sử dụng dịch vụ tư vấn y tế trực tuyến. Miễn phí tạo tài khoản và trải nghiệm ngay.",
  keywords: "TalkToDoc, đăng ký, sign up, tạo tài khoản, tư vấn y tế"
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Đăng Ký" />

      <SignUp />
    </>
  );
};

export default SignupPage;
