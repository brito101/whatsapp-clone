import "./ChatWindow.css";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ChatWindow() {
  return (
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-header-info">
          <img
            className="chatWindow-avatar"
            alt=""
            src="https://www.rodrigobrito.dev.br/themes/web/assets/images/avatar.webp"
          />
          <div className="chatWindow-name">Rodrigo Brito</div>
        </div>
        <div className="chatWindow-header-buttons">
          <div className="chatWindow-btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chatWindow-body"></div>
      <div className="chatWindow-footer"></div>
    </div>
  );
}

export default ChatWindow;
