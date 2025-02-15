import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Avatar } from "@mui/material";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigate = useNavigate();
  const name = localStorage.getItem('username')
  const displayName = name ?? ""; 
  const firstChar = displayName.charAt(0)
  //generate color for avatar
  const generateColor=() =>{
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomHex = Math.floor(Math.random() * 16).toString(16);
      color += randomHex;
    }
    return color;
  }
  const menuOptions = [
    { label: "Home", path: "/home" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "upcoming", path: "/movies/upcoming" },
    { label: "NowPlaying", path: "/movies/nowplaying" },
    { label: "popular", path: "/movies/popular" },
    {
      label: "Trending",
      submenu: [
        { label: "Day", path: "/trending/day" },
        { label: "This Week", path: "/trending/week" },
      ],
    },
    {
      label:"My Reviews",
      path: "/reviews",
    },
    {
      label:"Log Out",
      path: "/logout",
    },
    {
      label:<Avatar sx={{backgroundColor:generateColor}}>{firstChar}</Avatar>,
    }
  ];

  const handleMenuSelect = (pageURL) => {
    if (pageURL==="/logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      navigate("/login");
      setSubMenuOpen(false);
      return;
    }
    navigate(pageURL);
    setSubMenuOpen(false);
  };
  
  const handleSubMenuOpen = () =>{
    setSubMenuOpen(!subMenuOpen)
  }

  

  return (
     <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          <div>
            {menuOptions.map((opt) =>
              opt.submenu ? (
                <div key={opt.label} style={{ display: "inline-block", position:"relative" }}>
                  <Button
                    color="inherit"
                    onClick={handleSubMenuOpen}
                    aria-haspopup="true"
                    endIcon={
                      subMenuOpen ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )
                    }
                  >
                    {opt.label}
                  </Button>
                  {subMenuOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#fff",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "4px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        zIndex: 1300,
                      }}
                    >
                      {opt.submenu.map((subOpt) => (
                        <MenuItem
                          key={subOpt.label}
                          onClick={() => handleMenuSelect(subOpt.path)}
                          style={{color:"black"}}
                        >
                          {subOpt.label}
                        </MenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              )
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;