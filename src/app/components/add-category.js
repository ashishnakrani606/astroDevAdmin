"use client"
import React, { useState, useRef } from "react"

function category({ onClose }) {
  const [category, setAddCategory] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
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

  const handleSave = async () => {
    if(!category){
      alert("title and descrption are require.");
      return;
    }
    console.log("category", category)

    try{
      const res = await fetch(`http://localhost:3000/api/categories`, {  
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ category }),
       
    });
    if (res.ok){
      router.push("/categories");
          }else{
            throw new Error ("failed to a create topic")    
          }
  }
  catch (error){
      console.log(error)
  } 
    

}
  // form Validate start
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });
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
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="fixed top-[0%] left-[0%] w-full h-[100vh] backdrop-blur-md z-50">
      <div className="popup-form w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[600px] rounded-2xl border shadow-lg lg:p-6 p-4 bg-white">
        <button className='flex items-center justify-center text-base ml-auto p-1 h-auto border border-[#fff] hover:border hover:!border-[#000000] transition-all duration-500 border-black/20 rounded-full' onClick={onClose}>
          <svg className='dark:fill-white' fill="#000000" width="25px" height="25px" viewBox="-6 -6 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-close"><path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z' /></svg>
        </button>
        <h2 className="2xl:text-4xl sm:text-3xl text-xl font-semibold text-center mt-5 text-black"> Add Category </h2>
        <form  className="w-full xl:max-w-[700px] md:max-w-[660px] border lg:mt-6 mt-4 rounded-md mx-auto border-none">
          <div className="flex flex-col xl:gap-3 gap-2 w-full">
            <div className="">
              <input type="text" id="name" name="name" value={category} placeholder="Add Category Name  " className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm rounded-md border border-slate-100 bg-stone-100"  onChange={(e) => {
              setAddCategory(e.target.value)
            }}/>
              <span style={{ color: 'red', display: "block", marginTop: '2px' }}>{errors.name}</span>
            </div>
            <div className="flex justify-end gap-x-2 mt-2">
              <button onClick={handleSave} className="w-full max-w-[180px] p-2 border-2 border-green-600 hover:border-green-500 !bg-green-600 hover:!bg-green-500 rounded-md font-medium text-white transition lg:text-lg text-md tracking-wide block"> Save </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default category;