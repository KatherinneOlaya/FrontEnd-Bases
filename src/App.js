import './App.css'
import Sidebar from './components/components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        {/* Aquí puedes agregar más contenido */}
        <Sidebar/>
        <MainDash/>
        <RightSide/> 
          
        <div></div>
      </div>
    </div>
  );
}

export default App;