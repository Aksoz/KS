import './App.css';
import Giris from './components/giris';
import Kayit from './components/kayit';
import Navbar from './components/navbar';
import Sozlesme from './components/sozlesme';
import SozKart from './components/sozkart';
function App() {
  return (
      <div>
        <Navbar/>
        <Kayit/>
        <Giris/>
      </div>

  )
}

export default App;
