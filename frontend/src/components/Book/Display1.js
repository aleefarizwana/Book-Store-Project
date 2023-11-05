import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Display = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
 
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button sx={{ mt: "auto" }}>
        Add to Cart
      </Button>
     
      
    </div>
  );
};

export default Display;