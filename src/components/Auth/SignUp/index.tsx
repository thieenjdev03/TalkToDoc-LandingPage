"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useEffect, useState } from "react";
import Loader from "@/components/Common/Loader";
import axios from "axios";
const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [otpCooldown, setOtpCooldown] = useState(0);

  useEffect(() => {
    if (otpCooldown > 0) {
      const timer = setTimeout(() => setOtpCooldown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpCooldown]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const value = Object.fromEntries(formData.entries());
    const emailValue = email;
    const otpValue = otp;

    try {
      // BƯỚC 1: Xác minh OTP
      const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/otp/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue, otp: otpValue }),
      });

      const verifyData = await verifyRes.json();

      if (!verifyRes.ok) {
        await Swal.fire("Lỗi", verifyData.message || "OTP không hợp lệ", "error");
        return;
      }

      // BƯỚC 2: Chuẩn hóa data gửi tạo patient
      const patientPayload = {
        fullName: value.fullName,
        username: value.username,
        password: value.password,
        email: value.email,
        status: "isActive",
        isActive: true,
        avatarUrl: null,
        phoneNumber: value.phoneNumber,
        isVerified: true,
        address: "Chưa cập nhật",
        birthDate: value.birthDate || "1990-01-01",
        gender: "female", // có thể mở rộng chọn
      };

      const registerRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/patients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientPayload),
      });

      const registerData = await registerRes.json();

      if (!registerRes.ok) {
        await Swal.fire({
          title: "Đăng ký thất bại",
          text: registerData.message || "Vui lòng kiểm tra lại thông tin",
          icon: "error",
          confirmButtonText: "Thử lại",
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
        return;
      }

      await Swal.fire({
        title: "Thành công",
        text: "Đăng ký tài khoản thành công",
        icon: "success",
        confirmButtonText: "Đăng nhập ngay",
        customClass: {
          popup: "swal2-popup-success__primary",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("https://dashboard.talktodoc.online/");
        }
      });
    } catch (err: any) {
      console.error(err);
      await Swal.fire("Lỗi hệ thống", err.message || "Đã xảy ra lỗi", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Vui lòng nhập email hợp lệ");
      return;
    }

    try {
      setIsSendingOtp(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/otp/send`,
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      )

      if (res.status === 200) {
        toast.success("OTP đã được gửi đến email!");
        setOtpSent(true);
        setOtpCooldown(60); // 60s timeout
      } else {
        Swal.fire("Lỗi", (res as any)?.message, "error");
        toast.error("Không thể gửi OTP!");
      }
    } catch (err) {
      toast.error("Có lỗi xảy ra khi gửi OTP");
    } finally {
      setIsSendingOtp(false);
    }
  };

  return (
    <>
      <div className="mb-4 text-center mx-auto inline-block">
        <Logo />
      </div>

      {/* <SocialSignUp /> */}

      {/* <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
          OR
        </span>
      </span> */}
      <h1 className="text-4xl text-primary font-bold mb-4">Đăng Ký</h1>
      <div className="mb-4 text-sm text-grey">Nhập thông tin tài khoản bên dưới: </div>
      <form onSubmit={handleSubmit}>
      <div className="mb-[12px]">
          <input
            type="text"
            placeholder="Họ và tên *"
            name="fullName"
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[12px]">
          <input
            type="text"
            placeholder="Số điện thoại *"
            name="phoneNumber"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[12px]">
          <input
            type="date"
            name="Ngày Sinh"
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[12px]">
          <input
            type="text"
            placeholder="Tài khoản đăng nhập *"
            name="username"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
       
        <div className="mb-[12px]">
          <input
            type="password"
            placeholder="Mật Khẩu *"
            name="password"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[12px]">
          <input
            type="password"
            placeholder="Mật khẩu nhập lại *"
            name="password"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsOtpVerified(false); // reset nếu thay đổi email
            }}
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
          <button
            type="button"
            onClick={handleSendOtp}
            disabled={isSendingOtp || otpCooldown > 0}
            className={`px-2 py-1 text-nowrap text-sm rounded-md text-white transition ${otpCooldown > 0 || isSendingOtp
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-black'
              }`}
          >
            {isSendingOtp
              ? "Đang gửi..."
              : otpCooldown > 0
                ? `Gửi lại sau ${otpCooldown}s`
                : "Gửi OTP"}
          </button>
        </div>
        
        <div className="mb-[12px]">
          <input
            type="text"
            placeholder="Nhập mã OTP *"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            disabled={loading}
            className={`flex w-full text-white items-center text-18 font-medium justify-center rounded-md px-5 py-3 text-darkmode transition duration-300 ease-in-out border 
    ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary hover:bg-transparent hover:text-white border-primary'
              }`}
          >
            Đăng Ký {loading && <Loader />}
          </button>
        </div>
      </form>

      <div className="flex items-start gap-2 mb-4 ">
        <input
          id=""
          type="checkbox"
          required
          className="mt-1 accent-primary p-4"
        />
        <label htmlFor="" className="text-body-secondary text-black text-base">
          Tôi đồng ý với{' '}
          <Link href="/#" className="text-primary hover:underline">
            Nội Quy
          </Link>{' '}
          và{' '}
          <Link href="/#" className="text-primary hover:underline">
            Quy Định
          </Link>{' '}
          của chúng tôi sau khi tạo tài khoản
        </label>
      </div>

      <p className="text-body-secondary text-black text-base">
        Đã có tài khoản?
        <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL || "/"} className="pl-2 text-primary hover:underline">
          Đăng Nhập
        </Link>
      </p>
    </>
  );
};

export default SignUp;
