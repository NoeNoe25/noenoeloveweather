
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
            <br/>
            <footer>
            This project was coded by Noe Noe,&nbsp; 
            <a href="https://github.com/NoeNoe25/noenoeloveweather">
              is open-sourced on Github
            </a>
            &nbsp;and{" "}
            <a href="https://app.netlify.com/sites/noenoeloveweather/overview">
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
