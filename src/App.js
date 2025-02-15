 
import './App.css';
import GlobalStyle from './GlobalStyle.js';
import NossaEquipe from './componetes/NossaEquipe/NossaEquipe.js';
 
import Contatos from './componetes/contatos/index.jsx';
import Footer from './componetes/footer/index.jsx';
import Mapa from './componetes/mapa/index.jsx';
import Section1 from './componetes/section1/index.jsx';
import Topo from './componetes/topo/topo.jsx';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
      <Topo/>
      <Section1/>
     
      <NossaEquipe/>
    
      <Mapa/>  
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;
