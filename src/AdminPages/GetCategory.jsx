// import React from 'react'
// import { useState, useEffect } from 'react'
// import CategoryList from './CategoryList';

// export default function GetCategory() {

//     let[finalCategory,setFinalCategory]=useState([]);

//     let Category=finalCategory.map((categories,index)=>{
//         return(
//             <CategoryList catedata={categories} />
//         )
//       })

//     let getCategory=async()=>{
//       const response = await fetch('http://127.0.0.1:8000/api/categoryList');
//       const result = await response.json();
//       console.log(result)
//       setFinalCategory(result)
//   }
  
//   useEffect(()=>{
//       getCategory()
//   },[])

//      return (
//         <div>{finalCategory}</div>
//       )
// }
import React from 'react'

export default function GetCategory() {
  return (
    <div>abc</div>
  )
}
