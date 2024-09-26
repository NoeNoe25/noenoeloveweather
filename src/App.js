
import "./App.css";
import Weather from "./search_engine";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="design"> 
         
         <Weather defaultCity="Mawlamyine"/>

        <div class="row">
            <div class="col-12">
            <footer>
            This project was coded by Noe Noe,
            <a href="https://github.com/NoeNoe25/Refined_Weather_Project">
              is open-sourced on Github
            </a>
            and{" "}
            <a href="https://benevolent-tanuki-f00e59.netlify.app">
              {" "}hosted on Netlify{" "}
            </a>
          </footer>
            </div>

          </div>
   
          
        </div>
      </div>
    </div>
  );
}

export default App;
