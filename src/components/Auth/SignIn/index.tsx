"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);
  const loginUser = (e: any) => {
    e.preventDefault();
    setLoading(true);

    fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: loginData.email,
        password: loginData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          toast.error(data.error);
          setLoading(false);
          return;
        }

        toast.success("Đăng nhập thành công!");
        setLoading(false);
        router.push("http://localhost:8080/");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Đăng nhập thất bại!");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="mb-4 text-center mx-auto inline-block">
        <Logo />
      </div>

      {/* <SocialSignIn /> */}

      {/* <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-black dark:text-white">
          OR
        </span>
      </span> */}
      <h1 className="mb-4 text-2xl text-primary">Đăng Nhập</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Tên Đăng Nhập" 
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Mật Khẩu"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-primary w-full py-3 rounded-lg text-white text-18 font-medium border border-primary hover:text-white hover:bg-transparent"
          >
            Đăng Nhập {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-primary text-black dark:hover:text-primary"
      >
        Quên mật khẩu?
      </Link>
      <p className="text-body-secondary text-black text-base">
        Chưa có tài khoản?{" "}
        <Link href="/" className="text-primary hover:underline">
          Đăng Ký
        </Link>
      </p>
    </>
  );
};

export default Signin;