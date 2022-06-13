import './App.css';
import logo from './img/fc.png';


const picture = () => {
  return (
  <div className='frame'>
      <div className='pic pic1'>
        <div className='alt'>HEY</div>
      </div>
      <div className='pic pic2'>
        <div className='alt'>LETS</div>
      </div>
      <div className='pic pic3'>
        <div className='alt'>GIVE</div>
      </div>
      <div className='pic pic4'>
        <div className='alt'>ALL</div>
      </div>
      <div className='pic pic5'>
        <div className='alt'>YOU CAN</div>
      </div>

    </div> 
    );
  }
const navbar = () =>{
  return(
    <div className='navbar'>
      <div className='logo'><img className='impic' src={logo} /></div>
      <div className='block'></div>
      <div className='data'></div>
    </div>
  )
}

function App() {
  return (
    <div>
      <div>{navbar()}</div>
      <div>{picture()}</div>
    </div>
  );
}

export default App;
