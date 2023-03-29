import "./App.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import ChatListItem from "./components/ChatListIem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";

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
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };
    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          user={user}
          chatList={chatList}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img
            className="header-avatar"
            src={user.avatar ? user.avatar : "./images/avatar.png"}
            alt=""
          />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn" onClick={handleNewChat}>
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
              active={activeChat.chatId === chatList[key].chatId}
              key={key}
              data={item}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
