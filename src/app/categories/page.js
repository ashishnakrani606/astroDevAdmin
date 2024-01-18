"use client"
import React, { useState ,useEffect} from "react"
import Layout from "@/layouts/layout";
import Link from 'next/link'
import Popupform from "../add-category/page"
import axios from "axios";

const Category = () => {
  const [categoryitem, setCategoryItem] = useState([ ]); 
  useEffect (  () => {   
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get(process.env.APP_URL/"api/categories");
        setCategoryItem(response.categories);
        console.log(response ,"RESPONSE")
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    console.log(fetchData(), "hello")
  }, []);
 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  }; 

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // const [isLoading, setIsLoading] = useState(1);

  // useEffect(() => { 
  //   setTimeout(() => {
  //     setIsLoading(isLoading + 10);
  //   }, 2000);

  // }, [isLoading]);

  return (
    <Layout>
      {/* <TabList /> */}
      <div className="">
        <div className="flex justify-between items-center mb-7">
          <h4 className="text-base font-semibold"> Categories </h4>
          <div className="flex sm:items-center items-center sm:gap-4">
            {/* <Link href="/add-category">dfsgiuh</Link> */}
            <button class="category-btn btn transition-all duration-500 whitespace-nowrap text-white bg-blacklight dark:bg-secondary-purpleb rounded dark:text-blacklight dark:hover:bg-[#b8b8e6] hover:bg-opacity-90 text-xs px-2 py-[5px] leading-[18px]" onClick={openPopup}> Add Category</button>
            {isPopupOpen && <Popupform onClose={closePopup} />}
            {/* <Popupform/> */}
          </div>
        </div>
        <div className="main-info-box">
          <div className="w-full rounded-2xl">
            <div className="mb-2">
              <div className="overflow-x-auto">
                <div className="">
                  <div className="w-full">
                    {categoryitem?.map((item, index) => (
                      <div key={index} className="max-w-[100%] gap-x-2 border-b pb-4 mb-4 border-b-black/20 dark:border-b-white/20 flex justify-between items-center">
                      <div className="sm:flex block items-center">
                        <div className="text-black text-sm leading-[18px] text-left py-0 pr-1 dark:text-white min-w-[150px]">
                            {item.categorydata}
                        </div>
                        </div>
                        <div className="flex sm:flex-row flex-col justify-end gap-2">
                          <div className="md:p-2 p-1 border  hover:!border-[#fb2d8d] transition-all duration-500  border-black/20 dark:border-white/20 rounded">
                          <svg className="m-auto" fill="#99a3ad" width="20px" height="20px" viewBox="-2.5 -2.5 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-pencil"><path d='M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z' /></svg>
                          </div>
                          <div className="sec-close-btn md:py-2 md:px-2.5 py-1 px-1.5 border flex items-center justify-center hover:!border-[#fb2d8d] transition-all duration-500  border-black/20 dark:border-white/20 rounded">
                          <svg width="15px" fill="#99a3ad" height="15px" viewBox="0 0 15 15" version="1.1" id="cross" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"/></svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <div style={{ display: CategoryData.length <= isLoading ? "none" : "block"}}>
              <svg aria-hidden="true" className="mx-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;