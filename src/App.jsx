import React from 'react'
import Counter from './components/counterApp/Counter'
import FormDataUsage from './components/dynamicFormValidation/FormDataUsage'
import ModalUsage from './components/modalExamples/ModalUsage'
import AccordionUsage from './components/accordionExamples/AccordionUsage'
import DropdownUsage from './components/dropdownMenuExamples/DropdownUsage'
import GetFetchUsers from './components/APIFetchAndSideEffects/GetFetchUsers'
import PostFormDataAPI from './components/APIFetchAndSideEffects/PostFormDataAPI'
// import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Counter />
      <FormDataUsage />
      <ModalUsage />
      <AccordionUsage />
      <DropdownUsage />
      <GetFetchUsers />
      <PostFormDataAPI />
    </>
  )
}

export default App;
