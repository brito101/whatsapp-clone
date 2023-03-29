import "./Login.css";
import Api from "../Api";

function Login({ onReceive }) {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Erro!");
    }
  };

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com o Facebbok</button>
    </div>
  );
}

export default Login;
