import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TalkToDoc - Đăng Nhập",
  description: "Đăng nhập vào TalkToDoc để truy cập các dịch vụ tư vấn y tế trực tuyến. Kết nối với bác sĩ chuyên nghiệp mọi lúc, mọi nơi.",
  keywords: "TalkToDoc, đăng nhập, login, tư vấn y tế, bác sĩ trực tuyến"
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
