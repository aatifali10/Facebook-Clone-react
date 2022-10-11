import "./index.css";
import Header from "./component/header/Header";
import LeftSideBar from "./component/leftside/LeftSideBar";

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="app-body">
        <LeftSideBar />
      </div>
    </>
  );
}

export default App;
