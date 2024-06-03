import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import "./Slider.scss";
import { useState } from "react";
export default function Slider() {
    const[currentImage, setCurrentImage] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const handleNextImage = ()=>{

    currentImage === data.length - 1? setCurrentImage(0) : setCurrentImage(currentImage + 1)
  }

  const handlePrevImage = ()=>{

    currentImage === 0? setCurrentImage(data.length - 1) : setCurrentImage(currentImage - 1);
  }
  console.log(currentImage)
  return (
    <div className="slider">
      <div className="container">
        <img src={data[currentImage]} alt="" />
        {/* <img src={data[1]} alt="" />
        <img src={data[currentImage]} alt="" /> */}
      </div>
      <div className="icons">
        <div className="icon" onClick={handleNextImage} style={{cursor:"pointer"}}>
            <WestOutlinedIcon/>
        </div>
        <div className="icon" style={{cursor:"pointer"}}>
            <EastOutlinedIcon onClick={handlePrevImage}/>
        </div>
        
      </div>
    </div>
  );
}
