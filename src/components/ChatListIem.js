import "./ChatListItem.css";

function ChatListItem({ onClick, active, data }) {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatListItem-avatar" src={data.image ? data.image: "./images/avatar.png"} alt="" />
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">{ data.title }</div>
          <div className="chatListItem-date">17/03/2023 19:00</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Oi, cara de boi!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
