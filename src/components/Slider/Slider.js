import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import "./Slider.scss";
import { useState } from "react";
export default function Slider() {
    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const handleNextImage = ()=>{

    currentSlide === data.length - 1? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1)
  }

  const handlePrevImage = ()=>{

    currentSlide === 0? setCurrentSlide(data.length - 1) : setCurrentSlide(currentSlide - 1);
  }
 
  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={handlePrevImage} style={{cursor:"pointer"}}>
            <WestOutlinedIcon style={{color: 'grey'}}/>
        </div>
        <div className="icon" style={{cursor:"pointer"}}>
            <EastOutlinedIcon style={{color: 'grey'}} onClick={handleNextImage}/>
        </div>
        
      </div>
    </div>
  );
}
