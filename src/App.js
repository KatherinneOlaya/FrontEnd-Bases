import './App.css'
import Sidebar from './components/components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        {/* Aquí puedes agregar más contenido */}
        <Sidebar/>
        <MainDash/>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;