  "use client"
import React, { useState, useEffect  } from "react"
import Button from "./../../app/components/ui/Button";
import { useRouter } from 'next/navigation';
import Loadercomponenets from "../components/loder/index";


function category({ onClose }) {
  const [categorydata, setcategorydata] = useState("");
  const [loader, setLoader] = useState(false);  
  const router = useRouter();


  const fetchDataAndSave = async () => {
    setLoader(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/categories`,
      // const res = await fetch(`http://localhost:3000/api/categories`,
       {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ categorydata }),
      });
      console.log(categorydata);
      if (res.ok) {
        router.push("/categories");
        location.reload();       
        closePopup();
      } else {
        throw new Error("Failed to create category");
      }
    } catch (error) {
      console.log(error);
    }
  };

const handleSave = async () => {
  if (!categorydata) {
    alert("Title and description are required.");
    return;
  }

  // Execute the common logic
  await fetchDataAndSave();
};



// useEffect(() => {
//   const fetchData = async () => {    

//     try{
//       const res = await fetch(`http://localhost:3000/api/categories`, {  
//         method: 'post',
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify({ categorydata }),
//       });
//       console.log(categorydata)
//       if (res.ok){
//       // router.push("/categories");
//       // location.reload();   

//       router.push("/categories").then(() => location.reload());
//           }else{
//             throw new Error ("failed to a create topic")    
//           }}
//            catch (error){
//       console.log(error)
//   }};
//   fetchData();
// }, []); 

useEffect(() => {
  const fetchData = async () => {
    try {
      // Your fetch data logic here
      // Note: Make sure to replace this with your actual fetch logic
      console.log("Fetching data...");
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);


  // form Validate start
  // const [formData, setFormData] = useState({
  //   name: '',
  //   description: '',
  // });
  // const [errors, setErrors] = useState({
  //   name: '',
  //   description: '',
  // });
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  //   setErrors({
  //     ...errors,
  //     [name]: '', // Clear the error when the user starts typing again
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   let hasErrors = false;
  //   const newErrors = { ...errors };

  //   if (formData.name.trim() === '') {
  //     newErrors.name = 'Add Subtitle Required*';
  //     hasErrors = true;
  //   }
  //   if (hasErrors) {
  //     setErrors(newErrors);
  //   } else {
  //     console.log('Form submitted:', formData);
  //   }
  // };
  
  // form Validate end


  return (
    <div className="fixed top-[0%] left-[0%] w-full h-[100vh] backdrop-blur-md z-50">
      <div className="popup-form w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[600px] rounded-2xl border shadow-lg lg:p-6 p-4 bg-white">
        <button className='flex items-center justify-center text-base ml-auto p-1 h-auto border border-[#fff] hover:border hover:!border-[#000000] transition-all duration-500 border-black/20 rounded-full' onClick={onClose}>
          <svg className='jam jam-close dark:fill-white' fill="#000000" width="25px" height="25px" viewBox="-6 -6 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z' /></svg>
        </button>
        <h2 className="2xl:text-4xl sm:text-3xl text-xl font-semibold text-center mt-5 text-black"> Add Category </h2>
        <div  className="w-full xl:max-w-[700px] md:max-w-[660px] border lg:mt-6 mt-4 rounded-md mx-auto border-none">
          <div className="flex flex-col xl:gap-3 gap-2 w-full">
            <div className="">
            <input onChange={(e) => {
              setcategorydata(e.target.value)
            }} value={categorydata} type="text" id="name" name="name"  placeholder="Add Category Name" className="focus:outline-none text-black w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm rounded-md border border-slate-100 bg-stone-100" />                            
              {/* <span style={{ color: 'red', display: "block", marginTop: '2px' }}>{errors.name}</span> */}
            </div>
            <div className="flex justify-end gap-x-2 mt-2">
              {/* <button onClick={handleSave} className="w-full max-w-[180px] p-2 border-2 border-green-600 hover:border-green-500 !bg-green-600 hover:!bg-green-500 rounded-md font-medium text-white transition lg:text-lg text-md tracking-wide block"> Save </button> */}
              <button
              onClick={handleSave}
                  type="submit"
                  className="md:!text-lg !text-base !py-2 !px-10  !bg-green-600 hover:!bg-green-500 !text-white rounded-md">
                  {loader && <Loadercomponenets />}
                  {!loader && "Save"}
                </button>
              
              {/* <Button
                name={"Save"} 
                secondary={"false"}
                color={"blacklight"}
                onClick={() => {
                  handleSave();
                 
                }}
                // onClick={handleSave}
                className={
                  "md:!text-lg !text-base !py-2 !px-10  !bg-green-600 hover:!bg-green-500 !text-white"
                }
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default category;