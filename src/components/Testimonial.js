import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
const Testimonial=(props)=>{
    let reviews=props.reviews
    let [index,setIndex]=useState(0)
function leftShiftHandler(){
if(index-1<0){
    setIndex(reviews.length-1)
}
else{
    setIndex(index-1)
}
}

function rightShiftHandler(){
if(index+1>=reviews.length){
    setIndex(0)
}
else{
    setIndex(index+1)
}
}

function surpriseHandler(){
 let randomIndex=Math.floor(Math.random()*reviews.length)
 setIndex(randomIndex)
  
}

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review={reviews[index]}></Card> 

            <div className="flex gap-3 mx-auto mt-10 text-3xl font-bold text-violet-400">
    <button onClick={leftShiftHandler}
     className="cursor-pointer hover:text-violet-500"><FiChevronLeft/></button>
    <button onClick={rightShiftHandler}
    className="cursor-pointer hover:text-violet-500"><FiChevronRight/></button>
</div>

<div className="mt-6">
    <button onClick={surpriseHandler}
    className="px-10 py-2 text-lg font-bold text-white transition-all duration-200 rounded-md cursor-pointer bg-violet-400 hover:bg-violet-500">Surpise me</button> 

</div>
        </div>
    )
}

export default Testimonial