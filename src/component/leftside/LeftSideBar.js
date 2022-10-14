// import { Avatar } from "@mui/material";
import React from "react";
import "./leftsidebar.css";
import Friends from "../../images/Friends.png";
import groups from "../../images/groups.png";
import watch from "../../images/watch.png";
import Events from "../../images/Event.webp";
import SiderbarOption from "./SiderbarOption";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Afridi from "../../images/Shahid.jpg";

const LeftSideBar = () => {
  return (
    <div className="sidebar">
      <SiderbarOption src={Afridi} title="Aatif Ali" />
      <SiderbarOption
        src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
        title="Covid 19 Information center"
      />
      <SiderbarOption src={Friends} title="Friends" />
      <SiderbarOption src={groups} title="Groups" />
      <SiderbarOption src={Events} title="Watch" />
      <SiderbarOption src={watch} title="Events" />
      <SiderbarOption Icon={ExpandMoreIcon} title="See More" />
    </div>
  );
};

export default LeftSideBar;
