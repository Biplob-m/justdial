import React from 'react'
import { useState, useEffect } from 'react'
import AdminBody from './AdminBody'
import AdminSidebar from './AdminSidebar'
import CategoryList from './CategoryList'
import GetCategory from './GetCategory'
import Subcategory from './Subcategory'
import AddCategory from './AddCategory'
import './Admin.css'

export default function Admin() {

  let[finalCategory,setFinalCategory]=useState([]);

      let getCategory=async()=>{
        const response = await fetch('http://127.0.0.1:8000/api/categoryList');
        const result = await response.json();
        console.log(result)
        setFinalCategory(result)
    }
 

    useEffect(()=>{
        getCategory()
    },[])

  // ***********************Admin Sidebar**********************

  let[options,setOptions]=useState([]);

  let getOptions=async()=>{
    const response = await fetch('http://127.0.0.1:8000/api/optionlist');
    const result = await response.json();
    // console.log(result)
    // const fResult=(result.name)
    setOptions(result)
  }

  useEffect(()=>{
    getOptions()
},[])

// ************************Setting Option Value**************************

let [value,setValue]=useState('')

useEffect(()=>{
  // e.preventdefault();
  if( value !==""){
    // console.log("helloghf")
    // console.log(value)
  }
  // console.log("abc")
  console.log(value)
},[value])


  return (
    <>
    <div className="container-fluid">
        <div className="row" style={{height:100+'vh'}}>
             <div className="col-sm-2 bg-dark p-0 ad-side">
            <AdminSidebar option={options} setValue={setValue}/>
            </div>
            <div className="col-sm-10 bg-light" >
            
            {(value == '2')
          ?<><AdminBody catelist={finalCategory}/> <Subcategory/></>
          :  <><AddCategory onload={getCategory}/><CategoryList finalcategory={finalCategory} onload={getCategory}/></>}
           
            </div>
        </div>
    </div>
   </>
  )
}
