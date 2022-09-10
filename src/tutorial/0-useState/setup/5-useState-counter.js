import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)
  // const handleUpdate = ()=>{
  //   setValue((p)=>p+)
  //   setValue((p)=>p+1)

  //   console.log(value);    
  // }
  const  reset =()=> {
    setValue(0)
  }
  
 const karmasikArtis =() =>{
  setTimeout(()=>{
    // setValue(value +1)
    setValue((p)=>{
      return p+1
    })
    
  },2000)
 }

  return(
     <>
  
    <section style={{margin: '4rem 0'}}>
    <h2>Normal Sayac</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue((p)=>p -1)}>azalt</button>
    <button className='btn' onClick={reset} >reset</button>
    <button className='btn' onClick={()=>setValue((p)=>p +1)}>arttir</button>

    </section>


    <section style={{margin: '4rem 0'}}>
    <h2>Karmasik Sayac</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={karmasikArtis}>Sonra Arttir</button>
    {/* <button className='btn' onClick={reset} >reset</button>
    <button className='btn' onClick={()=>setValue((p)=>p +1)}>arttir</button> */}

    </section>




  </>
  )
};

export default UseStateCounter;
