import { useState } from 'react'
import Counter from './components/counterApp/Counter'
import FormDataUsage from './components/dynamicFormValidation/FormDataUsage'
import ModalUsage from './components/modalExamples/ModalUsage'
// import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Counter />
      <FormDataUsage />
      <ModalUsage />
    </>
  )
}

export default App;
