//import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Page from "./components/Page";
import MyRoutes from "./components/MyRoutes"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <MyRoutes/>
    </div>   
  );
}

export default App;
