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
import SignUpForm from './components/SignUpForm'
import SwitchSignUpType from './components/SwitchSignUpType'

interface BasePayload {
  fullName: string
  username: string
  password: string
  email: string
  phoneNumber: string
  birthDate: string
  isActive: boolean
  isVerified: boolean
  avatarUrl: string | null
}

interface PatientPayload extends BasePayload {
  address: string
  gender: string
}

interface DoctorPayload extends BasePayload {
  licenseNo?: string
  specialties?: string[]
  experienceYears?: number
  hospital?: string
  position?: string
  rank?: string
}

const SignUp = ({ setIsSignUpOpen }: { setIsSignUpOpen: (isOpen: boolean) => void }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const [selectedType, setSelectedType] = useState<'doctor' | 'patient' | null>(null);
 
  return (
    <>
      <div className="mb-4 text-center mx-auto inline-block">
        <Logo />
      </div>

      {selectedType === null ? (
        <SwitchSignUpType setIsSignUpOpen={setIsSignUpOpen} onSelectType={setSelectedType} />
      ) : (
        <>
          <SignUpForm
            setIsSignUpOpen={setIsSignUpOpen}
            type={selectedType}
            email={email}
            setEmail={setEmail}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}

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
