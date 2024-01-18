"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import Button from "./../../app/components/ui/Button";
import { useRouter } from 'next/navigation';
import Layout from "@/layouts/layout";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewBenefit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
    

  const handleSave = async () => {
    if(!title || !description){
      alert("title and descrption are require.");
      return;
    }
    console.log(title , description)
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/benefits`, {  
        method: 'post',
        mode: 'cors',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ title, description}),
       
    });
    if (res.ok){
      router.push("/benefits");
          }else{
            throw new Error ("failed to a create topic")    
          }
  }
  catch (error){
      console.log(error)
  } 
    
//     let result = await fetch(`api/benefits`, {
//       method: 'post',
//       body: JSON.stringify({ title, description }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//     if (result.ok){
// Router.push("/benefits");
//     }else{
//       throw new Error ("failed to a create topic")    
//     }
//     result = await result.json()
//   }
}
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Layout>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <button className='flex items-center justify-center text-base px-2 py-1 h-auto text-black border border-[#fff] hover:border hover:!border-[#000000] transition-all duration-500  border-black/20 dark:border-white/20 rounded' onClick={goBack}>
              <svg fill="#000" width="20px" height="20px" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" /></svg>
              Posts
            </button>            
          </div>
        </div>
        <div className='container !px-1'>
          <div className='md:max-w-[75%] max-w-[100%] w-full bg-[#f7f7f7] xl:px-10 xl:py-8 px-7 py-6 rounded-2xl mt-24 mx-auto'>

            <h1 className='mx-auto'><input className='bg-inherit xl:text-[34px] md:text-[28px] text-black text-[22px] w-full font-medium border-b-2 pb-2 focus:outline-none' type="text" onChange={(e) => {
              setTitle(e.target.value)
            }} value={title} placeholder='Add title' /></h1>
            <div className='lg:mt-6 md:mt-4 mt-3'>
              <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='description here' value={description} onChange={(e) => {
                setDescription(e.target.value)
              }} className='text-base border rounded-md dark:bg-white text-black lg:px-5 lg:py-4 p-3 w-full lg:text-[18px] text-[16px] focus:outline-none focus:!border-[#e5e5e5]'>
              </textarea>
            </div>
            <div className='main-editor'>
            </div>
            <div className='lg:mt-4 mt-3'>
              <Button
                name={"Save"} 
                secondary={"false"}
                color={"blacklight"}
                onClick={handleSave}
                className={
                  "md:!text-lg !text-base !py-2 !px-10  !bg-green-600 hover:!bg-green-500 !text-white"
                }
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  ) 
}

export default NewBenefit;