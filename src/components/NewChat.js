import "./NewChat.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

function NewChat({ user, chatList, show, setShow }) {
  const [list, setList] = useState([
    {
      id: 123,
      name: "Bob",
      avatar:
        "https://www.rodrigobrito.dev.br/themes/web/assets/images/avatar.webp",
    },
    {
      id: 12345,
      name: "Alice",
      avatar:
        "https://www.rodrigobrito.dev.br/themes/web/assets/images/avatar.webp",
    },
    {
      id: 12346,
      name: "Bob",
      avatar:
        "https://www.rodrigobrito.dev.br/themes/web/assets/images/avatar.webp",
    },
    {
      id: 12347,
      name: "Alice",
      avatar:
        "https://www.rodrigobrito.dev.br/themes/web/assets/images/avatar.webp",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat-head">
        <div className="newChat-backButton">
          <ArrowBackIcon style={{ color: "#fff" }} onClick={handleClose} />
        </div>
        <div className="newChat-headTitle">Nova Conversa</div>
      </div>
      <div className="newChat-list">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img className="newChat-itemAvatar" src={item.avatar} alt="" />
            <div className="newChat-itemName">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewChat;
