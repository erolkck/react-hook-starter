import React, { useState, useEffect } from 'react'
// varsayılan olarak her yeniden oluşturma işleminden sonra çalışır
// temizleme işlevi
// ikinci parametre
const UseEffectBasics = () => {
  const[value,setValue] = useState(0)
  
  useEffect(()=>{
    console.log('useEffect cagrildi');
    if(value >= 1) {
    document.title = `yeni mesajlar:(${value})`
    }
  },[value])

  console.log('bilesen islendi');
  return( 
  <>
<h1>{value}</h1>
<button className='btn' onClick= {()=> setValue((p)=> p+1)}>Tiklayin</button>

  </>
  )
}

export default UseEffectBasics
