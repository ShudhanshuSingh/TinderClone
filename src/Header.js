import React from "react";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import "./Header.css";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function Header({ backbutton }) {
  return (
    <div className="app__header">
      {backbutton ? (
        <Link to="/">
          <IconButton>
            <ArrowBackIosIcon className="accountIcon" />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon className="accountIcon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="tinder__logo"
          src="https://policies.tinder.com/static/b0327365f4c0a31c4337157c10e9fadf/a74a0/tinder_full_color_watermark.png"
          alt="tinder-logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ChatIcon className="chatIcon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
