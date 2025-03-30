"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useState } from "react";
import Loader from "@/components/Common/Loader";
const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: any) => {
  e.preventDefault();
  setLoading(true);

  const data = new FormData(e.currentTarget);
  const value = Object.fromEntries(data.entries());

  try {
    // Bước 1: Đăng ký tài khoản (lưu ý: backend nên trả về token sau khi đăng ký)
    const registerRes = await fetch("http://localhost:3000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    const registerData = await registerRes.json();

    if (!registerRes.ok) {
      throw new Error(registerData.message || "Đăng ký thất bại");
    }

    // // ✅ Lấy token từ response
    // const token = registerData.access_token || registerData.token;
    // if (!token) throw new Error("Không lấy được token sau khi đăng ký");

    // Bước 2: Tạo patient (user) bằng token
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
      gender: "female", // Có thể cho chọn trong form nếu muốn
    };

    const patientRes = await fetch("http://localhost:3000/api/v1/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(patientPayload),
    });

    const patientData = await patientRes.json();
    if (!patientRes.ok) {
      throw new Error(patientData.message || "Tạo bệnh nhân thất bại");
    }

    await Swal.fire({
      title: "Thành công",
      text: "Đăng ký tài khoản thành công",
      icon: "success",
      confirmButtonText: "Đăng nhập ngay",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("http://localhost:8080/");
      }
    });
  } catch (err: any) {
    await Swal.fire("Lỗi", err.message, "error");
  } finally {
    setLoading(false);
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
      <h1 className="text-2xl text-primary">Đăng Ký</h1>
      <div className="mb-4 text-sm text-grey">Nhập thông tin tài khoản bên dưới: </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Tài Khoản"
            name="username"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Mật Khẩu"
            name="password"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Tên Đầy đủ                                                        "
            name="fullName"
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Số điện thoại"
            name="phoneNumber"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="date"
            name="Ngày Sinh"
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
           <button
            type="submit"
            className="flex w-full text-white items-center text-18 font-medium justify-center rounded-md bg-primary px-5 py-3 text-darkmode transition duration-300 ease-in-out hover:bg-transparent hover:text-white border-primary border "
          >
            Đăng Ký {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className="text-body-secondary mb-4 text-black text-base">
        Bạn có đồng ý với nội quy của chúng tôi sau khi tạo tại khoản chứ?{" "}
        <a href="/#" className="text-primary hover:underline">
          Nội Quy
        </a>{" "}
        và{" "}
        <a href="/#" className="text-primary hover:underline">
          Quy Định
        </a>
      </p>

      <p className="text-body-secondary text-black text-base">
        Đã có tài khoản?
        <Link href="/" className="pl-2 text-primary hover:underline">
          Đăng Nhập
        </Link>
      </p>
    </>
  );
};

export default SignUp;
