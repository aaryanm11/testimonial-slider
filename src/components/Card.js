import React from "react";
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'



const Card=(props)=>{
    let review =props.review
return(
    <div className="flex flex-col md:relative">
<div className="absolute top-[-7rem] z-[10] mx-auto">
    <img  className="aspect-square rounded-full w-[140px] h-[140px] z-25 " src={review.image}/>
    <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
</div>
<div className="text-center mt-7">
    <p className="text-2xl font-bold tracking-wider capitalize ">{review.name}</p>
    <p className="text-sm uppercase text-violet-300">{review.job}</p>
</div>

<div className="mx-auto mt-5 text-violet-400">
<FaQuoteLeft></FaQuoteLeft>
</div>

<div className="mt-4 text-center text-slate-500">
    {review.text}
</div>

<div className="mx-auto mt-5 text-violet-400">
    <FaQuoteRight></FaQuoteRight>
</div>



    </div>
)
}
export default Card