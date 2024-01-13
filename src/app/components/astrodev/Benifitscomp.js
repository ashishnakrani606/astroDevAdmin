import React, { useState, useEffect } from "react"

const Benefitscomp = () => {
  const [isLoading, setIsLoading] = useState(1);

  const Sessions = [
    {
      title: "Coffee: The Universal Brew"
    },
    {
      title: "Why Mohali Is the Perfect Location for Your Coworking Space Needs"
    },
    {
      title: "A Day in the Life at BiggBang Coworking: What to Expect"
    },
    {
      title: "Customized Workspace Solutions at BiggBang Coworking"
    },
    {
      title: "Why Mohali Is the Perfect Location for Your Coworking Space Needs"
    },
    {
      title: "The Role of Coworking Spaces in Fostering Innovation and Creativity in Mohali"
    },
    {
      title: "Comparing Office Spaces for Rent in Mohali"
    },
    {
      title: "A Day in the Life at BiggBang Coworking: What to Expect"
    },
    {
      title: "Customized Workspace Solutions at BiggBang Coworking"
    },
    {
      title: "Why Mohali Is the Perfect Location for Your Coworking Space Needs"
    },
    {
      title: "The Role of Coworking Spaces in Fostering Innovation and Creativity in Mohali"
    },
    {
      title: "Comparing Office Spaces for Rent in Mohali: Traditional Offices vs Coworking Spaces"
    }
  ];
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(isLoading + 10);
    }, 2000);

  }, [isLoading]);
  return (
    <>
      <div className="flex justify-between items-center mb-4 pb-2 bg-[#f7f7f7] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.30)] md:py-3 md:px-4 py-2 px-3 rounded-md">
        <h3 className="xl:text-2xl md:text-xl text-md font-semibold text-black"> Benefits </h3>
        <a href="/benefits" className="xl:text-sm text-xs transition w-fit text-blue-600 hover:text-black font-semibold w-full flex justify-end"> Mange benefits </a>
      </div>
      <div className="">
        <div className="w-full rounded-2xl">
          <div className="overflow-x-auto">
            <div className="">
              <div className="w-full">
                {Sessions.slice(0, 10 + isLoading).map((item, index) => (
                  <div key={index} className="max-w-[100%] gap-2 text-black border-b xl:pb-3 xl:mb-3 pb-3 mb-3 last:mb-0 last:pb-0 last:border-b-0 border-b-black/20 flex justify-between items-center">
                    <div className="text-black xl:text-base text-sm font-semibold overflow-hidden leading-[18px] text-left py-0 pr-1 dark:text-black min-w-[150px] flex">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: Sessions.length <= isLoading ? "none" : "block" }}>
            <svg aria-hidden="true" className="mx-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefitscomp;