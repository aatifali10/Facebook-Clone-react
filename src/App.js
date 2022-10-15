import "./index.css";
import Header from "./component/header/Header";
import LeftSideBar from "./component/leftside/LeftSideBar";
import Feed from "./component/feed/Feed";
import RightSidebar from "./component/rightsidebar/RightSidebar";
import Login from "./component/login/Login";

function App() {
  const user = null;
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app-body">
            <LeftSideBar />
            <Feed />
            <RightSidebar />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
