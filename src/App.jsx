//import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MyRoutes from "./components/MyRoutes"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <NavigationBar />
        <MyRoutes/>
      </ThemeProvider>
    </div>   
  );
}

export default App;
