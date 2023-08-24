import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeStore';

 
function App() {

  return (

<>  

{/* Wrap Our Components to access Globally Properties */}
<ThemeProvider>

<Navbar/>
<Hero/>

</ThemeProvider>



</>
  );
}

export default App;
