import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)


const PersonContext = React.createContext()
//  iki bilesen - provider consumer ---

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const kaldirilmisKisi = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{kaldirilmisKisi,people}}>
      <h3>context Api / use context</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const anaVeri = useContext(PersonContext)
  console.log(anaVeri)
  return (
    <>
      {anaVeri.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, }) => {
  const {kaldirilmisKisi} = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => kaldirilmisKisi(id)}>kaldir</button>
    </div>
  )
}

export default ContextAPI
