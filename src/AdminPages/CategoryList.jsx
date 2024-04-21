import React from 'react'
import { useState,useEffect } from 'react';
import './Admin.css'
import CategoryUpdate from './CategoryUpdate';
import { Link } from 'react-router-dom';
 


export default function CategoryList({finalcategory,onload}) {

  const [deletedItemId, setDeletedItemId] = useState('');

  useEffect(()=>{
    onload()
},[deletedItemId])

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await fetch(`http://127.0.0.1:8000/api/categoryDelete/${id}`,{
      method: 'DELETE',
      });
      // setDeletedItemId(id);
    // const result = await response.json();
    // console.log(result);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

    let Category=finalcategory.map((catedata,i)=>{
        return(
             <tr key={i}>
             <th scope="row" ></th>
             <td className="w-25"><img src={catedata.photo}  className="img-fluid img-thumbnail" />
             </td>
             <td className='ad-set'>{catedata.category_name}</td>
             <td><Link type="button" className="btn btn-primary" to={`/admin/abc/${catedata.id}`}>Update</Link></td>
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
                <th scope="col">Sl No</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {Category}
            </tbody>
          </table>   
      </div>
    </div>
  </div>
  )
}
