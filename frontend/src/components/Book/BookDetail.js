


import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    price: 0,
    image: '',
    available: false,
  });
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        setInputs(response.data.book);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };
    fetchHandler();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type ,checked} = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setInputs((prevBook) => ({
      ...prevBook,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/books/${id}`, inputs);
      navigate('/books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
         <div>
          {inputs && (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight="auto"
                marginTop={10}
              >
                <FormLabel>Name</FormLabel>
                <TextField
                  value={inputs.name}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="name"
                />
                <FormLabel>Author</FormLabel>
                <TextField
                  value={inputs.author}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="author"
                />
                <FormLabel>Description</FormLabel>
                <TextField
                  value={inputs.description}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="description"
                />
                <FormLabel>Price</FormLabel>
                <TextField
                  value={inputs.price}
                  onChange={handleChange}
                  type="number"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="price"
                />
                <FormLabel>Image</FormLabel>
                <TextField
                  value={inputs.image}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="image"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Available"
                />
    
                <Button variant="contained" type="submit">
                  Update Book
                </Button>
              </Box>
            </form>
          )}
        </div>
      );
};

export default BookDetail;
