import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MoviesContext } from "../contexts/moviesContext"; 
import { TextField } from "@mui/material";

function AddReviewPage() {
  const { id } = useParams();           
  const navigate = useNavigate();       
  const [content, setContent] = useState("");

  const { addReview } = useContext(MoviesContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addReview(id, content);    
    navigate(`/home`);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Add a Review for Movie ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex", flexDirection:"column"}}>
          <label>Comment Content:</label>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxRows={20}
            cols={50}
            sx={{width:'500px',margin:"10px"}}
        />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReviewPage;
