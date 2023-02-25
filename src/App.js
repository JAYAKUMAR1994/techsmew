
import { Route, Routes } from 'react-router';

import Home from './Home';
import Success from './Success';

function App() {
  return (
    <div className="App">
      
      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Main" element={<Success/>}/>
        </Routes>        
      
    </div>
  );
}

export default App;
