"use client";
import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPassword({
  params,
}) {
  const searchParam = useSearchParams();
  const [authState, setAuthState] = useState({
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      setLoading(true);
      const res = await fetch(`/api/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: params.email,
          signature: searchParam.get("signature"),
          password: authState.password,
          password_confirmation: authState.cpassword,
        }),
      });

      if (res.ok) {
        setLoading(false);
        alert("user created successfully...!!!");
        router.push("/login");
      } else {
        setLoading(false);
        alert("user not created, check API");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="auth-bg h-screen w-screen flex justify-center items-center">
        <div className="max-w-[580px] w-full mx-auto text-black my-10 pt-8 pb-14 px-6 rounded-xl bg-white">
          <div className="mb-8 text-center cursor-pointer">
            <h2 className="text-2xl">Reset Password ?</h2>
          </div>
          <form onSubmit={submit}>
            <div className="mt-5 mb-5">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) =>
                  setAuthState({ ...authState, password: event.target.value })
                }
              />
            </div>
            <div className="mt-5 mb-5">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your confirm password"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) =>
                  setAuthState({ ...authState, cpassword: event.target.value })
                }
              />
            </div>
            <div className="mt-5 mb-5">
              <button
                type="submit"
                className="bg-black rounded-md cursor-pointer block max-w-[580px] w-full px-2 py-2.5 text-white"
              >
                Submit
              </button>
            </div>
            <div className="mt-5 text-center">
              <Link href="/login" className="text-black">
                {" "}
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
