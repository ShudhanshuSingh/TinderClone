import React from "react";
import "./SwipeButtons.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import StarRateIcon from "@material-ui/icons/StarRate";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  return (
    <div className="swipe__buttons">
      <IconButton className="swipebuttons__repeat" fontSize="large">
        <ReplayIcon />
      </IconButton>
      <IconButton className="swipebuttons__close" fontSize="large">
        <CloseIcon />
      </IconButton>
      <IconButton className="swipebuttons__star" fontSize="large">
        <StarRateIcon />
      </IconButton>
      <IconButton className="swipebuttons__fav" fontSize="large">
        <FavoriteIcon />
      </IconButton>
      <IconButton className="swipebuttons__flash" fontSize="large">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
