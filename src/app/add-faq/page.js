"use client"
import {useState} from 'react'
import dynamic from 'next/dynamic';
import Button from "../../../src/app/components/ui/Button";

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)
import Layout from "@/layouts/layout";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewDraft = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSave = async () => {
      console.log("result", title, "description", description)
      let result = await fetch('http://localhost:5000/add-data', {
        method: 'post',
        body: JSON.stringify({ title, description }),
        headers: {
          'content-type': 'application/json'
        }
      })
      result = await result.json()
      console.warn(result);
  
    }
    const goBack = () => {
      window.history.back();
    };
    
    return (
        <>
            <Layout>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <button className='flex items-center justify-center text-base px-2 py-1 border-2 border-transparent hover:!border-[#000] transition-all duration-500  border-black/20 dark:border-white/20 rounded' onClick={goBack}>
                            <svg fill="#000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" /></svg>Edit Faq</button>
                        <span className='ml-7 text-base p-2'>Edit</span>
                    </div>
                    <div>
                        <svg width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none" /><g id="Shopicon"><path fill='#FFF' d="M6.595,42.22h34.81V18.314H44v-12H4v12h2.595V42.22z M37.595,38.409h-27.19V18.314h27.19V38.409z M8,10.314h32v4H8V10.314z" />
                            <rect x="17.115" y="23.43" width="13.77" height="3.77" /></g></svg>
                    </div>
                </div>
                <div className='container !px-1'>
                    <div className='md:max-w-[75%] max-w-[100%] w-full bg-[#f7f7f7] xl:px-10 xl:py-8 px-7 py-6 rounded-2xl mt-24 mx-auto'>

                        <h1 className='mx-auto'><input className='bg-inherit xl:text-[34px] md:text-[28px] dark:text-black text-[22px] w-full font-medium border-b-2 pb-2' type="text" onChange={(e) => {
                            setTitle(e.target.value)
                        }} value={title} placeholder='Add title' /></h1>
                        <div className='lg:mt-6 md:mt-4 mt-3'>
                            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='description here' value={description} onChange={(e) => {
                                setDescription(e.target.value)
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

export default NewDraft