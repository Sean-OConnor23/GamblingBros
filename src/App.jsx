//import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Page from './components/Page'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <NavigationBar></NavigationBar>
        <Page></Page> 
      </div>
    </BrowserRouter>
  );
}

export default App;
