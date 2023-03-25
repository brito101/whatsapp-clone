import "./ChatWindow.css";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import MessageItem from "./MessageItem";

function ChatWindow() {
  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([1,2,3]);

  const handleEmojiClick = ({ emoji }) => {
    setText(text + emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleSendClick = () => {
   
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

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
      <div className="chatWindow-body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} />
        ))}
      </div>
      <div
        className="chatWindow-emojiArea"
        style={{ height: emojiOpen ? "450px" : "0px" }}
      >
        <EmojiPicker
          searchDisabled={true}
          skinTonesDisabled={true}
          onEmojiClick={handleEmojiClick}
        />
      </div>
      <div className="chatWindow-footer">
        <div className="chatWindow-pre">
          <div
            className="chatWindow-btn"
            style={{ width: emojiOpen ? "40px" : "0" }}
          >
            <CloseIcon
              style={{ color: "#919191" }}
              onClick={handleCloseEmoji}
            />
          </div>
          <div className="chatWindow-btn">
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
              onClick={handleOpenEmoji}
            />
          </div>
        </div>
        <div className="chatWindow-inputArea">
          <input
            className="chatWindow-input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow-pos">
          {text === "" ? (
            <div className="chatWindow-btn" onClick={handleMicClick}>
              <MicIcon style={{ color: listening ? "#126ECE" : "#919191" }} />
            </div>
          ) : (
            <div className="chatWindow-btn" onClick={handleSendClick}>
              <SendIcon style={{ color: "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
