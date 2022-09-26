import React, { useEffect, useState } from 'react';
import FlagCard from './FlagCard';
import style from "./flag.module.css"
const Home=()=>{
  const [flag,setFlag]=useState([]);
  const flagdata=async()=>{
    let output=await fetch('https://restcountries.com/v3.1/all');
    let mainmodel=await output.json();
    setFlag(mainmodel); 
  };
  useEffect(() => {
    flagdata();
  }, []);
  console.log(flag);
  return (
    <>
    <h1 style={{backgroundColor:'navy', marginTop:'-0px', height:'60px' , color:'white'}}>Masai Country Finder</h1>
 <div className={style.box1}>
    {flag.length ? flag.map((mainmodel,ind)=><FlagCard key={ind} mainmodel={mainmodel}/>):''}</div>
   </>
  );
};

export default Home;