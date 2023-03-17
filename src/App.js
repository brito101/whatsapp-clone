import "./App.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import ChatListItem from "./components/ChatListIem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: "Bob",
      image:
        "https://www.rodrigobrito.dev.br/themes/web/assets/images/avatar.webp",
    },
    {
      chatId: 2,
      title: "Alice",
      image:
        "https://www.rodrigobrito.dev.br/themes/web/assets/images/avatar.webp",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src="./images/avatar.png" alt="" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
