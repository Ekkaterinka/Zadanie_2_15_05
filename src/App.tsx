import React from 'react'
import './App.css'
import {Listing} from './components/Listing'
import { Lists } from './components/data'


function App() {
  const lists = {Lists}
  

  return (
    <>
     <div className="item-list" >
      <Listing lists = {lists}/>
      </div>
    </>
  )
}

export default App
