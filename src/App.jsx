import './App.css'
import myImage from './assets/text-img.svg';
function App() {

  return (
    <>
        <div className="container">
          <div className="navbar">
            <a className='products' href="#">Products</a>
            <a className='use' href="#">Use cases</a>
            <a className='resources' href="#">Resources</a>
            <a className='about' href="#">About us</a>
            <a className='login' href="#">Log in</a>
            <button className='btn'>Request a demo</button>
          </div>
        </div>

        <div className="hero__container">
            <h1>Next generation</h1>
            <p>Welcome to the next generation of mobile commerce and <br/> customer engagement. Meet your mobile customers where they <br/> want to be met.</p>
            <img src={myImage} alt="Tasvir" />
          </div>
    </>
  )
}

export default App
