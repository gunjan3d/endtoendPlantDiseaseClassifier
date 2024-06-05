
import './App.css';
// import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import Footer from './components/Footer';
import Input from './components/Input';

function App() {
  // const IncreaseCount = () => {
  //   setcount(count + 1);
  //   console.log(count);
  // }
  // const [count, setcount] = useState(0);
  return (
    <>
      <Navbar />
      <HomePage/>
      <Input/>
      {/* <div className='m-5 flex justify-center'>
        <div className='m-25'>
          <p className='mx-14 my-3 flex justify-center'>{count}</p>
          <button className='bg-blue-500 text-white p-3 rounded-md' onClick={IncreaseCount}>click to increase</button>
        </div>
      </div> */}
      <Footer/>
    </>
  );
}

export default App;
