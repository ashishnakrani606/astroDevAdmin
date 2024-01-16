"use client"
import React, { useState, useRef } from "react"
import Layout from "@/layouts/layout";
import Link from "next/link";
import TextEditer from "../components/ui/TextEditer";

function EditUserReflection({ onClose }) {
  // image selector start
  const [previewImage, setPreviewImage] = useState(null);

  const [isOpenUser, setIsOpenUser] = useState(false);
  const handleFileChange = (event) => {

    const file = event.target.files[0];

    // Create a preview URL for the selected file
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // image selector start
  // form Validate start
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear the error when the user starts typing again
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let hasErrors = false;
    const newErrors = { ...errors };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name Is Required*';
      hasErrors = true;
    }
    if (!formData.profession) {
      newErrors.profession = 'Profession Is Required*';
      hasErrors = true;
    }
    if (hasErrors) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
    }
  };
  // form Validate end

  const closeUser = () => {
    setIsOpenUser(false);
  };

  return (
    <Layout >
      <div className="fixed top-[0%] left-[0%] w-full p-8 h-[100vh] backdrop-blur-md z-50">
        <div className="popup-form w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] xl:max-w-[900px] md:max-w-[660px] sm:max-w-[500px] shadow-lg border rounded-2xl lg:p-6 p-4 bg-white">
          <button className='flex items-center justify-center text-base ml-auto p-1 h-auto border border-[#fff] hover:border hover:!border-[#000000] transition-all duration-500 border-black/20 rounded-full' onClick={onClose}>
            <svg className='dark:fill-white' fill="#000000" width="30px" height="30px" viewBox="-6 -6 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-close"><path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z' /></svg>
          </button>
          <h2 className="2xl:text-4xl sm:text-3xl text-xl font-semibold text-center text-black mt-5"> Navigating the Cosmos with AstroDev </h2>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex sm:flex-row flex-col items-center">
              <div className="fileUpload xl:mr-[15px] sm:mr-[10px] mr-0 rounded-full sm:mb-0 mb-2 xl:w-[125px] xl:h-[106px] sm:w-[90px] sm:h-[76px] w-[80px] h-[80px]">
                <input type="file" id="profileimge" name="profileimge" value={formData.profileimge} className="!block" onChange={handleFileChange} />
                <span className="xl:text-[14px] text-[12px]"> Upload image </span>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                  />
                )}
              </div>
              <div className="flex flex-col xl:gap-3 gap-2 w-full">
                <div className="">
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Add Name*" className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm rounded-md !border-1 border border-slate-100 bg-stone-100" />
                  <span style={{ color: 'red', display: "block", marginTop: '2px' }}>{errors.name}</span>
                </div>
                <div className="">
                  <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleInputChange} placeholder="Add profession*" className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm rounded-md !border-1 border border-slate-100 bg-stone-100" />
                  <span style={{ color: 'red', display: "block", marginTop: '2px' }}>{errors.profession}</span>
                </div>
              </div>
            </div>
            <div className='main-editor'><TextEditer className="mt-4 !bg-slate-300 bg-stone-100 dark:bg-stone-100 rounded-md !border-[#e7e7e7]" placeholder={"Enter Description"} /></div>
            <div className="flex justify-end gap-x-2 mt-2">
              <button type="submit" className="w-full max-w-[200px] p-2 border-2 border-green-600 hover:border-green-500 !bg-green-600 hover:!bg-green-500 rounded-md xl:mt-3 mt-2 font-medium text-white transition lg:text-lg text-md tracking-wide block"> Save </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditUserReflection;