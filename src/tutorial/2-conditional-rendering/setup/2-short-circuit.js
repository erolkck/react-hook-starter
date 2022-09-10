import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
const [text,setText] = useState('')
const [isError,setIsError] = useState(false)
 

  return ( <>
  <h1>{text || 'Erol' } </h1>
  <button className='btn' onClick={()=>setIsError((s)=>!s)}
  >toggle error</button>
  {isError && <h1>Error.....</h1>}
  {isError ? (<p>hata var...</p>) : (

<div>
  <h2>hata yok</h2>
</div>
  )
  
  
  }
  

  
  </>
  )
}

export default ShortCircuit;


  {/* {if(){console.log('hello world')}} return olmadigi icin calismaz */}
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // console.log(secondValue)