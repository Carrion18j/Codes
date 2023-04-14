import React from 'react'
import { ExpenceItem } from './components'
import './Data'
import { expencess } from './Data'

const App = () => {
  return (
    <section className=' bg-slate-700'>
      <ExpenceItem tital={expencess[0].tital} date={expencess[0].date} price={expencess[0].price}></ExpenceItem>
      <ExpenceItem tital={expencess[1].tital} date={expencess[1].date} price={expencess[1].price}></ExpenceItem>
    </section>
  )
}

export default App