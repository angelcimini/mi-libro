import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='gridContainer'>
        <div><Sidebar/></div>
        <div className='borderColor'><Dashboard /></div>
      </div>
      <footer>Componente footer</footer>
    </div>
  );
}

export default App;
