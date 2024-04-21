import React from "react";
import { useState,useEffect } from "react";
import './AddCategory.css'

export default function AddCategory({onload}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [categoryName, setCategoryName] = useState(null);

  useEffect(()=>{
    onload()
},[])

  const handleSubmit = async (event) => {
    // event.preventDefault();

    // Create a FormData object
    const formData = new FormData();

    // Append file to the formData object here
    formData.append("selectedFile", selectedFile);
    formData.append("catname", categoryName);

    const response = await fetch("http://127.0.0.1:8000/api/categoryAdd", {
      method: "POST",
      body: formData,
      headers: {
        headers: { "Content-Type": "multipart/form-data" },
      },
    });
    const result = await response.json();
    console.log(result);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryName = (event) => {
    setCategoryName(event.target.value);
  };
  return (
    <div className="abc">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleCategoryName} />

        <input type="file" onChange={handleFileSelect} />
        <input type="submit" value="Upload File" />
      </form>
    </div>
  );
}
