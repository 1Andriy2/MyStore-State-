import React, { useState } from 'react'
import './App.css'
import useStore from './hooks/use-store'
import { store } from './Store'

export default function App() {

  const [mascount, setMasCount] = useState([])
  const newmascount = useStore(state => state.counters)
  function AddButton(){
    store.setState(prev => {
      return {...prev, counters: [...prev.counters, 0]}
    })
  }

  function handleClick(i){
    store.setState(prev => {
      prev.counters[i] += 1
      return {...prev, counters: [...prev.counters]}
    })
  }
  console.log(newmascount);

  return (
    <div className="App">
      <p>[{newmascount == "[]" ? "[]" : newmascount.map((n, i) => `index: ${i} count: ${n},`)}]</p>
      <button onClick={AddButton}>Add link</button>
      {newmascount && newmascount.map((n, i) => <button onClick={() => handleClick(i)} key={i}>{n}</button>)}
    </div>
  )
}


