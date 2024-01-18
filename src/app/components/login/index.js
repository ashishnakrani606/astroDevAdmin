"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLayout from "@/layouts/authlayout";
import Auth from "../../components/ui/auth";
import Button from "../../components/ui/Button";
import Google from "@/assets/images/icon/google.svg";
import { setCookie } from "cookies-next";
import Loadercomponenets from "../../components/loder/index";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const loginSubmitForm = async () => {
    setLoader(true);
    try {
      const response = await signIn("credentials", { 
        email,
        password,
        redirect: false,
      });
      console.log("Authentication response:", response);

      if (response && response.error) {
        setLoader(false);
        setError("Invalid wrong information");
        return;
      } else {
        setCookie('logged', 'true');
        console.log("setCookie",setCookie)
        router.replace("/"); 
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      setError("Invalid wrong information");
      console.log("error", error);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("plese fill email and password");
    } else {
      setError("");
      loginSubmitForm();
    }
  };

  return (
    <>
          <AuthLayout className={"flex justify-center"}>
        <div className="w-full max-w-[680px] sm:pt-[186px] sm:pb-[100px] py-[100px]">
          <Auth className={"md:relative !top-0"}>
            <div className="pt-5 flex items-center flex-col">
              <h2 className="text-2xl font-semibold pb-2 text-blacklight">
                Log in 
              </h2>
              <p className="text-sm text-black/40 ">
                Continue to your Becho Store
              </p>
              <Button
                outline={"true"}
                secondary={"true"}
                className="flex items-center !py-1 px-2 text-sm my-[30px]"
              >
                <div className="p-[7px] mr-1">
                  <Image src={Google} className="w-4 h-4" alt="" />
                </div>
                <span className="text-black">Continue with Google</span>
              </Button>
              <div className="relative flex items-center">
                <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
                <p className="px-[21px] text-xs leading-[18px] whitespace-nowrap text-blacklight">
                  Or with Email
                </p>
                <span className="sm:w-[136px] w-[75px] h-[1px] bg-black/10"></span>
              </div>
            </div>
            <form className="mt-5" onSubmit={formSubmit}>
              <div className="flex flex-col mb-2">
                <input
                  className="bg-white dark:border-white/10 border border-black/10 rounded-lg px-5 mb-2 break-words !py-2.5 text-black outline-none "
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-2">
                <input
                  className=" bg-white border border-black/10 rounded-lg px-5 mb-2 break-words !py-2.5 text-sm outline-none text-black"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                  type="submit"
                  className="py-3 text-base btn transition-all duration-500 px-2 rounded-lg leading-[18px] dark:text-white
                  text-white bg-blacklight dark:bg-secondary-purpleb dark:hover:bg-[#b8b8e6] hover:bg-opacity-90 w-full">
                  {loader && <Loadercomponenets />}
                  {!loader && "Log in"}
                </button>
              {error && (
              <div className="bg-red-500 text-white text-sm py-1 rounded-sm mt-2 text-center mb-4">
                {error}
              </div>
            )}

              <div className="mb-2 text-sm text-red-950 cursor-pointer">
                Forgot Password ?{" "}
                <Link href="/forget-password" className="!text-blue-700">
                  {" "}
                  Reset Here
                </Link>
              </div>  
              <Link
                href={`/register`}
                className="text-center text-sky-900 text-sm"
              >
                {" "}
                Do not have an account ? Register{" "}
              </Link>
            </form>
          </Auth>
        </div>
      </AuthLayout>
    </>
  );
};

export default login;
