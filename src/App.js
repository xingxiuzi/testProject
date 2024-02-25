import './App.less';
import LeftSideBar from './components/leftSideBar';
import RightSide from './components/rightSide';
import Popup from './components/popup';
function App() {
  
  return (
    <div className="App">
      <LeftSideBar/>
      <RightSide/>
      <Popup/>
    </div>
  );
}

export default App;
