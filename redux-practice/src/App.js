import './App.css';
import Child1 from './components/Child1';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

function App() {

  const data=useSelector((c)=>{
     return c.show.value;
  }
)
  return (
    <div className="App">
      <h1>parent-{data}</h1>
      <Child1/>
    </div>
  );
}

export default App;
