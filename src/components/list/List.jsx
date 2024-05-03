import "./list.css";

import React from "react";
import UserInfo from "./userInfo/UserInfo.jsx";
import ChatList from "./chatList/ChatList.jsx";

function List() {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
}

export default List;
