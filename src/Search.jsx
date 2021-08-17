import React,{useState} from 'react';
import Sresult from './Sresult.jsx';
const Search=()=>{
    const[img,setimg]=useState("");
    const inputEvent=(event)=>{
    setimg(event.target.value);
    }
  return (
    <>
    <div className="searchbar">
    <input type="text" placeholder="Search Anything" value={img} onChange={inputEvent}/>
    </div>
    //if nothing is written in search bar show nothing else img
    {img===""? null:<Sresult name={img}/>}
    
    </>
  );
}
export default Search;