import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars1.githubusercontent.com/u/36932507?s=460&u=b613fd8d8aaf29b373e9b1353d23faa2c30509d2&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon className="sidebar__headerRightIcon" />
          </IconButton>
          <IconButton>
            <ChatIcon className="sidebar__headerRightIcon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="sidebar__headerRightIcon" />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
