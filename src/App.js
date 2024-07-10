 
import './App.css';
import Weather from './Weather';
import Footerm from './footerm';

export default function App() {
  return (
    <div className="App">
       <div className="container">
          <Weather defcity="glasgow"/>
        <footer>
          <Footerm />
        </footer>  
      </div>
    </div>
  );
}

 
