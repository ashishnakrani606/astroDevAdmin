"use client"
import React, { useState } from 'react'
import Button from "../../components/ui/Button";
import Layout from "@/layouts/layout";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRouter } from 'next/navigation';

const EditBenefitForm = ({id, title, description}) => {
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();


  const handleSave = async () => {
    try {
        // console.warn(newTitle, newDescription);

        const res = await fetch(`http://localhost:3000/api/benefits/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newTitle, newDescription }),
        });

        if (!res.ok) {
            throw new Error(`Failed to save data. Status:`);
        }
        router.push("/benefits");
        // result = await result.json();
        console.warn(result);
    } catch (error) {
        console.error('Error in handleSave:', error);
    }
};


const goBack = () => {
  window.history.back();
};
  return (
    <>
      <Layout>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <button className='flex items-center justify-center text-base px-2 py-1 h-auto border border-[#fff] hover:border hover:!border-[#000000] transition-all duration-500  border-black/20 dark:border-white/20 rounded' onClick={goBack}>
              <svg fill="#000" width="20px" height="20px" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" /></svg>
              Posts
            </button>
            <span className='ml-7 text-base p-2'>Edit</span>
          </div>
        </div>
        <div className='container !px-1 text-black'>
          <div className='md:max-w-[75%] max-w-[100%] w-full bg-[#f7f7f7] xl:px-10 xl:py-8 px-7 py-6 rounded-2xl mt-24 mx-auto'>

            <h1 className='mx-auto'><input className='bg-inherit xl:text-[34px] md:text-[28px] dark:text-black text-[22px] w-full font-medium border-b-2 pb-2' type="text" onChange={(e) => {
              setNewTitle(e.target.value)
            }} value={newTitle} placeholder='Edit title' /></h1>
            <div className='lg:mt-6 md:mt-4 mt-3'>
              <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Edit description here' value={newDescription} onChange={(e) => {
                setNewDescription(e.target.value)
              }} className='text-base border rounded-md dark:bg-white dark:text-black lg:px-5 lg:py-4 p-3 w-full lg:text-[18px] text-[16px] focus:outline-none focus:!border-[#e5e5e5]'>
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

export default EditBenefitForm;