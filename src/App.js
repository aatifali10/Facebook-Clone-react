import "./index.css";
import Header from "./component/header/Header";
import LeftSideBar from "./component/leftside/LeftSideBar";
import Feed from "./component/feed/Feed";
import RightSidebar from "./component/rightsidebar/RightSidebar";

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="app-body">
        <LeftSideBar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
