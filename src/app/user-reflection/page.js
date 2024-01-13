"use client"
import React, { useState, useRef } from "react"
import Layout from "@/layouts/layout";

function userReflection() {
  // image selector start
  const [previewImage, setPreviewImage] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
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

  return (
    <Layout >
      <div className="xl:mt-10 md:mt-8 mt-6">
        <div className="">
          <h2 className="2xl:text-4xl sm:text-3xl text-xl font-semibold text-center"> User Reflections: Navigating the Cosmos with AstroDev </h2>
          <form onSubmit={handleSubmit} className="w-full xl:max-w-[800px] md:max-w-[660px] shadow-lg border md:p-5 p-4 rounded-lg lg:mt-6 mt-4 mx-auto">
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
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Add Name*" className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm border-x-0 rounded-md border-t-0 border-b-1 border-b-zinc-500 bg-stone-100" />
                  <span style={{color: 'red', display: "block" ,marginTop: '2px'}}>{errors.name}</span>
                </div>
                <div className="">
                  <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleInputChange} placeholder="Add profession*" className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm rounded-md border-x-0 border-t-0 border-b-1 border-b-zinc-500 bg-stone-100" />
                  <span style={{color: 'red', display: "block" ,marginTop: '2px'}}>{errors.profession}</span>
                </div>
              </div>
            </div>
            <textarea placeholder="Enter Description" className="xl:h-[160px] lg:h-[140px] h-[120px] w-full xl:mt-3 xl:px-4 mt-2 px-3 xl:py-3 py-2 xl:text-base text-sm rounded-md text-md border-x-0 border-t-0 border-b-1 border-b-zinc-500 bg-stone-100" />
            <button type="submit" className="w-full max-w-[200px] p-2 border-2 border-green-600 hover:border-green-500 !bg-green-600 hover:!bg-green-500 rounded-md xl:mt-2 mt-1 font-medium text-white transition lg:text-lg text-md tracking-wide block mx-auto"> Save </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default userReflection;