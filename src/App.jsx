import React from 'react'
import Counter from './components/counterApp/Counter'
import FormDataUsage from './components/dynamicFormValidation/FormDataUsage'
import ModalUsage from './components/modalExamples/ModalUsage'
import AccordionUsage from './components/accordionExamples/AccordionUsage'
import DropdownUsage from './components/dropdownMenuExamples/DropdownUsage'
import GetFetchUsers from './components/APIFetchAndSideEffects/GetFetchUsers'
import PostFormDataAPI from './components/APIFetchAndSideEffects/PostFormDataAPI'
import FetchInfiniteScrollPagination from './components/APIFetchAndSideEffects/FetchInfiniteScrollPagination'
import ImageInfinteScroll from './components/APIFetchAndSideEffects/ImageInfinteScroll'
import InfiniteScrollAPIFetchAxios from './components/APIFetchAndSideEffects/InfiniteScrollAPIFetchAxios'
import FormValidation from './components/dynamicFormValidation/FormValidation'
import TabExample from './components/tabsComponentExample/TabExample'
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
      <FetchInfiniteScrollPagination />
      {/* <ImageInfinteScroll />  uncomment to see how it works */}
      {/* <InfiniteScrollAPIFetchAxios /> */}
      <FormValidation />
      <TabExample />
    </>
  )
}

export default App;
