import "./ChatListItem.css";

function ChatListItem({ onClick }) {
  return (
    <div className="chatListItem" onClick={onClick}>
      <img className="chatListItem-avatar" src="./images/avatar.png" alt="" />
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">Rodrigo Brito</div>
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
