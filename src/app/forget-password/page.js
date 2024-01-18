"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthLogo from "../../assets/images/icon/authlogo.svg";
import Loadercomponenets from "../components/loder/index";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submit = async (event) => {
    event.preventDefault();

    // Validate email
    if (!email) {
      setErrors({ email: "Please enter your email." });
      return;
    }

    if (!validateEmail(email)) {
      setErrors({ email: "Invalid email format. Please enter a valid email." });
      return;
    }

    setLoading(true);

    try {
      // Fetch and handle response
      const res = await fetch(`api/forget-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (res.ok) {
        setLoading(false);
        alert("Password reset email sent successfully!");
        router.push("/forget-password");
      } else {
       
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };
  return (
    <>
      <div className="auth-bg h-screen w-screen flex justify-center items-center">
        <div className="max-w-[660px] w-full mx-auto text-black my-10 pt-8 pb-14 px-14 rounded-xl bg-white">
          <Image src={AuthLogo} className="mb-14 cursor-pointer" />
          <div className="mb-8 text-center cursor-pointer mt-4">
            <h2 className="text-2xl">Forgot Password</h2>
          </div>
          <p>
            Don't worry, it happens. Just enter your email below, and we will
            send an email to you.
          </p>
          <form onSubmit={submit}>
            <div className="mt-5 mb-8">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder=""
                className={`w-full h-10 p-2 border rounded-md outline-red-400 ${
                  errors?.email ? "border-red-500" : ""
                }`}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrors({}); // Clear email error when user starts typing
                }}
              />
              <span className="text-red-500">{errors?.email}</span>
            </div>
            <button
              type="submit"
              className="py-3 text-base btn transition-all duration-500 px-2 rounded-lg leading-[18px] dark:text-white
                  text-white bg-blacklight dark:bg-secondary-purpleb dark:hover:bg-[#b8b8e6] hover:bg-opacity-90 w-full"
            >
              {loading && <Loadercomponenets />}
              {!loading && "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
