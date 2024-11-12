
import { useState } from 'react'
import './App.css'

function App() {
 const [color,setColor]=useState('olive');
 function changeColor(newColor){
  setColor((prevColor)=>(prevColor==newColor? 'olive': newColor));
 }
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
    <button 
    onClick={()=>changeColor('black')}
    className='outline-none mx-2 px-4 py-2 rounded-full shadow-lg  text-white'
    style={{backgroundColor:'Black'}}
    >Black</button>
    <button 
     onClick={()=>changeColor('blue')}
    className='outline-none px-4 py-2 rounded-full shadow-lg text-white'
    style={{backgroundColor:'Blue'}}
    >Blue</button>
    <button
     onClick={()=>changeColor('yellow')}
     className='outline-none px-4 py-2 rounded-full shadow-lg text-black'
     style={{backgroundColor:'Yellow'}}>Yellow</button>
    

    </div>

    </div>
    
    </div>
    
    </>
  )
}

export default App
