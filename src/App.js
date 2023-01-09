
import{ useState} from 'react'
import { Header } from './componentes/Header';
import './App.css';
import { Main } from './componentes/Main';
import { Footer } from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
      const [page, setPage] = useState('inicio')
  return (
    <div>
      <Header setPage={setPage}/>
      <Main page={page}/>
      <Footer/>
    </div>
  );
}

export default App;
