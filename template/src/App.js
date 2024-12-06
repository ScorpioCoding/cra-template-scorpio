import logo from "./assets/img/scorpiocoding-banner.png";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-slogan">
          <h3>{process.env.REACT_APP_SITE_NAME}</h3>
          <code>npx create-react-app `some-app-name` --template scorpio</code>
        </div>
      </header>
    </div>
  );
}

export default App;
