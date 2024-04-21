import React from "react";
import { useState } from "react";

export default function AdminBody({ catelist }) {
  // State variables for dropdown and text field
  const [selectedOption, setSelectedOption] = useState("");
  const [textInput, setTextInput] = useState("");

  // Event handler for dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Event handler for text field change
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Find the selected option object by its name
    const selectedOptionObject = catelist.find(
      (option) => option.category_name === selectedOption
    );
    if (selectedOptionObject) {
      // Process form data as needed
      console.log("Selected option ID:", selectedOptionObject.id);
      console.log("Text input:", textInput);
      
    } else {
      console.error("Selected option not found");
    }
    const formData = new FormData();

    // Append file to the formData object here
    formData.append("category", selectedOptionObject.id);
    formData.append("subCateName", textInput);

    const response = await fetch("http://127.0.0.1:8000/api/subCateAdd", {
      method: "POST",
      body: formData,
      headers: {
        headers: { "Content-Type": "multipart/form-data" },
      },
    });
    setSelectedOption('');
    setTextInput('');
    const result = await response.json();
    console.log(result);

    
  };

  return (
    <>
      <center className="todo-container">
        <h1>Add Sub_Category</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row kg-row">
            <div className="col-4">
              <label for="dropdownField">Choose Category</label>
              <select
                class="form-control"
                id="dropdownField"
                onChange={handleDropdownChange}
              >
                <option value="">Select...</option>
                {catelist.map((list, i) => (
                  <option key={list.id}>{list.category_name}</option>
                ))}
              </select>
            </div>
            <div className="col-4">
              <label for="inputField">Sub CategoryName</label>
              <input
                type="text"
                class="form-control"
                id="inputField"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-2">
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
