import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DetailsIcon from '@mui/icons-material/Details';

function MyReviewsPage() {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username || !token) {
      setError("You are not logged in.");
      return;
    }

    const fetchUserReviews = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/reviews/${username}`, {
          headers: {
            Authorization: `${token}`, 
          },
        });
        if (!response.ok) {
          const errData = await response.json();
          setError(errData.error || "Failed to fetch user reviews.");
          return;
        }
        const userData = await response.json();

        setReviews(userData.reviews || []);
      } catch (err) {
        setError("Network error while fetching reviews.");
      }
    };

    fetchUserReviews();
  }, [username, token]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>My Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Movie ID</TableCell>
                    <TableCell align="right">MovieName</TableCell>
                    <TableCell align="right">Content</TableCell>
                    <TableCell align="right">Details</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {reviews.map((r) => (
                    <TableRow
                    key={r._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="r">
                        {r.movie}
                    </TableCell>
                    <TableCell align="right">{r.movieName}</TableCell>
                    <TableCell align="right">{r.content}</TableCell>
                    <TableCell align="right">
                        <Link to={`/movies/${r.movieId}`}>
                            <DetailsIcon style={{ cursor:"pointer", color: "purple"}}/>
                        </Link>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      )}
      
    </div>
    
  );
}

export default MyReviewsPage;
