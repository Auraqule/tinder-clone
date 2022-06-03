import React from "react";
import "./Footer.css";
import { IconButton } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
const Footer = () => {
  return (
    <footer>
      {/* reload */}
      <IconButton>
        <div className="icon__container">
          <RotateLeftIcon fontSize="medium" style={{ color: "orange" }} />
        </div>
      </IconButton>
      {/* exit */}
      <IconButton>
        <div className="icon__container">
          <CloseIcon fontSize="medium" style={{ color: "red" }} />
        </div>
      </IconButton>
      {/* star */}
      <IconButton>
        <div className="icon__container">
          <StarIcon fontSize="medium" style={{ color: "blue" }} />
        </div>
      </IconButton>
      {/* love */}
      <IconButton>
        <div className="icon__container">
          <FavoriteIcon fontSize="medium" style={{ color: "green" }} />
        </div>
      </IconButton>
      <IconButton>
        <div className="icon__container">
          <FlashOnIcon fontSize="medium" style={{ color: "purple" }} />
        </div>
      </IconButton>
    </footer>
  );
};

export default Footer;
