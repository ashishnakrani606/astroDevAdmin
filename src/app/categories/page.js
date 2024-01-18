"use client"
import React, { useState ,useEffect} from "react"
import Layout from "@/layouts/layout";
import Popupform from "../add-category/page";
import axios from "axios";

const Category = () => {
  const [categoryitem, setCategoryItem] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/categories`);
        // const {data: response} = await axios.get("http://localhost:3000/api/categories");
        console.log('Server response:', response);
        setCategoryItem(response.category);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);    
 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  }; 

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const Removeitem = async (itemId) => {
    const confirmDelete = window.confirm("Are you sure?");
    
    if (confirmDelete) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}api/categories?id=${itemId}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          window.location.reload();
          console.log("Item deleted successfully");
        } else {
          console.error("Failed to delete item");
        }
      } catch (error) {
        console.error("Error during delete operation", error);
      }
    }
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
                          <div className="md:p-2 p-1 border cursor-pointer hover:!border-[#fb2d8d] transition-all duration-500  border-black/20 dark:border-white/20 rounded">
                          <svg className="m-auto" fill="#99a3ad" width="20px" height="20px" viewBox="-2.5 -2.5 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-pencil"><path d='M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z' /></svg>
                          </div>
                          <div  onClick={() => Removeitem(item._id)} className="cursor-pointer sec-close-btn md:py-2 md:px-2.5 py-1 px-1.5 border flex items-center justify-center hover:!border-[#fb2d8d] transition-all duration-500  border-black/20 dark:border-white/20 rounded">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;