// import React, { useEffect, useState } from 'react'
// import './CategoryUpdate.css'
// import{useParams}from 'react-router-dom'

// export default function CategoryUpdate() {
//   const {id}= useParams();
//  const[values,setValues]=useState({
//         id:id,
//         name:'',
//         photo:''
//  })

//   const doSomething = async() =>{
//     const response = await fetch('http://127.0.0.1:8000/api/categoryList/'+id);
//         const result = await response.json();
//        setValues({...values, name:result.category_name, photo:result.photo})
//     }
    
//     useEffect(() =>{
//      doSomething();
//     },[])

//   return (
//     <form action="#" class="update-form">
//         <div class="form-group">
//             <label for="inputField">Input Field:</label>
//             <input type="text" id="inputField" name="inputField" required value={values.name}/>
//         </div>
//         <div class="form-group">
//             <label for="fileField">File Field:</label>
//             <input type="file" id="fileField" name="fileField" accept=".jpg, .jpeg, .png" required value={values.photo}/>
//         </div>
//         <button type="submit">Submit</button>
//     </form>
//   )
// }

import React, { useEffect, useState } from 'react';
import './CategoryUpdate.css';
import { useParams } from 'react-router-dom';

export default function CategoryUpdate() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    category_name: '',
    file: null // Initialize photo as null
  });
console.log(values)
  const doSomething = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/categoryList/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch category with id ${id}`);
      }
      const result = await response.json();
      setValues({ ...values, category_name: result.category_name });

    } catch (error) {
      console.error(error);
      // Handle error (e.g., display error message to user)
    }
  };

  useEffect(() => {
    doSomething();
  }, [id]); // Make sure to include id in the dependency array

  const handleFileChange = (event) => {
    const photo = event.target.files[0]; // Get the selected file
    setValues({ ...values, file:photo }); // Update photo state with the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const formData = new FormData();
      formData.append('id', values.id);
      formData.append('category_name', values.category_name);
      formData.append('file', values.file);
  
      const response = await fetch('http://127.0.0.1:8000/api/categoryUpdate', {
        method: 'POST',
        body: formData,
        headers: {
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json'
          headers: {"Content-Type": "multipart/form-data"}
        }
      });

  };

  return (
    <form onSubmit={handleSubmit} className="update-form">
      <div className="form-group">
        <label htmlFor="inputField">Input Field:</label>
        <input type="text" id="inputField" name="inputField" required value={values.category_name} onChange={e=>setValues({...values,category_name:e.target.value})}/>
      </div>
      <div className="form-group">
        <label htmlFor="fileField">File Field:</label>
        {/* Display the filename if a file is selected */}
        {/* {values.photo && <p>Selected file: {values.photo.name}</p>} */}
        <input type="file" id="fileField" name="fileField" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}



