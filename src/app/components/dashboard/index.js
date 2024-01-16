"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const dashboard = () => {
  // const { data: session } = useSession();

  return (
    <>
      {/* <div className="max-w-[500px] w-full mx-auto text-black my-10 py-5 px-6 rounded-xl bg-white">
        <div className="text-center cursor-pointer">
          <h2 className="text-[32px]">Dashboard</h2>
          <div className="bg-whitetext-black dark:bg-black/40 dark:border-white/10 border border-black/10 px-5 mb-4 break-words py-2.5 dark:bg-white success p-3 mt-4 text-left rounded-md">
            Name : <span className="text-black">{session?.user?.name}</span>
          </div>
          <div className="bg-white text-black dark:bg-black/40 dark:border-white/10 border border-black/10 px-5 mb-4 break-words py-2.5 dark:bg-white success p-3 mt-4 text-left rounded-md">
            Email : <span className="text-black">{session?.user?.email}</span>
          </div>
          <Link href="/login" className="max-w-[150px] w-full rounded-md">
            <button
              className="bg-black text-white font-bold py-3 max-w-[150px] w-full rounded-lg"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default dashboard;
