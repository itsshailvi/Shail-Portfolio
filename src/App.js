import logo from './logo.svg';
import './App.css';
import { Box1 } from './Components/Box1';
import { Box2 } from './Components/Box2';
import { Box3 } from './Components/Box3';
import { Box4 } from './Components/Box4';
import { Box5 } from './Components/Box5';
import { Footer } from './Components/Footer';
import { BoxMiddle } from './Components/BoxMiddle';

function App() {
  return (
    <div className="App">
      <Box1 />
      <div style={{display:'flex', minHeight: '500px', borderStyle: 'solid', borderWidth: '0px 50px', borderColor: 'white', overFlow: 'hidden'}}>
        <Box2 />
        <Box3/>
      </div>
      <BoxMiddle/>
      <Box4/>
      <Box5/>
      <Footer/>
    </div>
  );
}

export default App;
