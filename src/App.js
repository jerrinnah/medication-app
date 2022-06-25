import { useNavigate  } from 'react-router-dom';
import logo from './logo-full.png';
import banner from './banner-bg.png'
import bannerGirl from './banner-girl.png'
import { Button } from './components/button/button';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
   <>
    <div className="App">
      <header className="App-header">
        
        <div className="banner">
        <img src={logo} className="App-logo" alt="logo" />
          <img className="banner-img" src={banner} alt="banner" />
          <img className="bannerGirl" src={bannerGirl} alt="banner" />
        </div>
        <div className="text__section">
          
            <h1 className='cta__title'>We are what we do</h1>
            <p className='cta__para'>Thousand of people are using silent moon for smalls meditation </p>  

        </div>

        <div className='footer__cta'>
          <Button onClick={()=> navigate('signup')}
          type="button"
          buttonStyle={"btn--primary--solid"}
          buttonSize={"btn--long"}
          >SIGN UP</Button>

          <p>ALREADY HAVE AN ACCOUNT? <span onClick={()=> navigate('signin')}> LOG IN</span></p>
        </div>


      </header>

      
    </div>
    {/* <Router>
      <Routes>
        <Route path='/'/>
      </Routes>
    </Router> */}
    </>
  );
}



export default App;
 