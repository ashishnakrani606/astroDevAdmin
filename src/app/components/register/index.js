"use client";
import Loadercomponenets from "../../components/loder/index";
import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/authlayout";
import Auth from "../../components/ui/auth";
import Image from "next/image";
import Google from "@/assets/images/icon/google.svg";
import Button from "../../components/ui/Button";
import { useRouter } from "next/navigation";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const userCreateAPI = async () => {
    try {
      setLoader(false);
      console.log("loder", setLoader);
      const res = await fetch(`api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });
      if (res.ok) {
        setLoader(false);
        // alert("user created successfully...!!!");
        router.push("/login");
      } else {
        setLoder(false);
        alert("user not creat check api");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const userExits = async () => {
    try {
      setError("");
      setLoader(true);
      const res = await fetch(`api/userExists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const { user } = await res.json();
      if (user) {
        setLoader(false);
        setError("user already use plese use anyother email id");
      } else {
        userCreateAPI();
      }
    } catch (error) {
      setLoader(false);
      console.log("error", error);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    userExits();
    // userCreateAPI();
  };

  return (
    <>
      <AuthLayout className={"flex justify-center"}>
        <div className="flex justify-center w-full max-w-[680px] sm:pt-[186px] sm:pb-[100px] py-[100px] mx-auto">
          <Auth className={"!top-0 md:relative "}>
            <div className="pt-2.5 flex items-center flex-col">
              <h2 className="text-2xl font-semibold pb-2 text-blacklight">
                Register From
              </h2>
              <p className="text-sm text-black/40 ">
                Start your free trial with Becho
              </p>
              <Button
                outline={"true"}
                className="flex items-center !py-1 px-2 text-sm my-[30px]"
              >
                <div className="p-[7px] mr-1">
                  <Image src={Google} className="w-4 h-4" alt="" />
                </div>
                <span className="text-blacklight">Continue with Google</span>
              </Button>
              <div className="relative flex items-center mb-4">
                <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
                <p className="px-[21px] text-xs leading-[18px] whitespace-nowrap text-black/40">
                  Or with Email
                </p>
                <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
              </div>
              <form className="w-full" onSubmit={formSubmit}>
                <div className="bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg px-5 mb-4 break-words !py-2.5 dark:bg-white">
                  <input
                    className="outline-none w-full text-black"
                    type="Name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg px-5 mb-4 break-words !py-2.5 dark:bg-white">
                  <input
                    className="outline-none w-full text-black"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg px-5 mb-4 break-words !py-2.5 dark:bg-white">
                  <input
                    className="outline-none w-full text-black"
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
                  {!loader && "Register"}
                </button>

                {error && (
                  <div className="bg-red-500 text-white text-sm py-1 rounded-sm mt-2 text-center">
                    {error}
                  </div>
                )}
                <Link
                  href={"/login"}
                  className="text-center text-sky-900 text-sm"
                >
                  {" "}
                  Already have an account ? Login{" "}
                </Link>
              </form>
            </div>
          </Auth>
        </div>
      </AuthLayout>
    </>
  );
};

export default register;
