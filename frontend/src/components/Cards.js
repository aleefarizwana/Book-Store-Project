import React from 'react';
import '../styles/cards.css'
import { useState } from "react";
// import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Cards = ({item, handleClick}) => {
    const {title, author,description,price,img} = item;

    const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div >
            <p>{title}</p>
            <p>{author}</p>
            <p>{description}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} className='add'  >Add to Cart</button>

            <div>
            <h1>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <StarIcon 
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <StarBorderIcon
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <form>
          <textarea placeholder={handlePlaceHolder()}></textarea>
        <div className='sub'>
          <button type='submit' className={` ${!number && "disabled"} `}>Submit</button>
          </div>
          </form>
          

        </div>
    </div>
  )
}

export default Cards