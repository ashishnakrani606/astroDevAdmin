"use client";
import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthLogo from "../../assets/images/icon/authlogo.svg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();

  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
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
        alert("user created successfully...!!!");
        router.push("/forget-password");
      } else {
        setLoading(false);
        alert("user not creat check api");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="auth-bg h-screen w-screen flex justify-center items-center">
        <div className="max-w-[660px] w-full mx-auto text-black my-10 pt-8 pb-14 px-14 rounded-xl bg-white">
          <Image src={AuthLogo} className="mb-14 cursor-pointer"/>
          <div className="mb-8 text-center cursor-pointer mt-4">
            <h2 className="text-2xl">Forget Password</h2>
          </div>
          <p>
            Don't worry it happens. just enter your email below and we will send
            an email to you.
          </p>
          <form onSubmit={submit}>
            <div className="mt-5 mb-8">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder=""
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="text-red-500">{errors?.email}</span>
            </div>
            <button
              type="submit"
              className="bg-black rounded-md cursor-pointer block max-w-[660px] w-full px-2 py-3 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
