import React from 'react'
import { useState,useEffect } from 'react';

export default function Subcategory() {

     let[Subcategory,setSubcategory]=useState([]);

      let getSubcategory=async()=>{
        const response = await fetch('http://127.0.0.1:8000/api/xyz');
        const result = await response.json();
        console.log(result)
        setSubcategory(result)
    }

    const handleDelete= async(id)=>{
      console.log(id)
      try {
        await fetch(`http://127.0.0.1:8000/api/categoryDelete/${id}`,{
        method: 'DELETE',
        });
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
    // useEffect()=>{

    // }
   
    useEffect(()=>{
        getSubcategory()
    },[])

    let subCate=Subcategory.map((catedata,i)=>{
        return(
             <tr key={i}>
             {/* <th scope="row" ></th> */}
             <td className="w-25">{catedata.category_name}
             </td>
             <td className='ad-set'>{catedata.sub_category_name}</td>
             <td><button type="button" className="btn btn-primary">Update</button></td>
             <td><button type="button" className="btn btn-danger" onClick={()=>handleDelete(catedata.id)}>Delete</button></td>
           </tr>

        )
      })

  return (
    <div className="container">
    <div className="row">
      <div className="col-12">
          <table className="table table-image table table-striped">
            <thead>
              <tr>
                <th scope="col">category name</th>
                <th scope="col">sub categoryname</th>
              </tr>
            </thead>
            <tbody>
              {subCate}
            </tbody>
          </table>   
      </div>
    </div>
  </div>
  )
}
