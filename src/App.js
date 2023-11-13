import { Route, Routes } from 'react-router-dom';
import './App.css';
import Doc from './component/Doc';
import Description from './page/Description';

function App() {
  return (
    <div className="App">
    <Routes>
      
      <Route path='/' element={<Doc/>}/>
      <Route path='/description' element={<Description/>}/>
      </Routes>
    </div>
  );
}

export default App;
