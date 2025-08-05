import React from 'react'
import { TodoCreateProvider } from './TodoCreateContext'
import TodoWithContext from './TodoWithContext'

function AppContextAPI() {
  return (
    <div>
        <TodoCreateProvider>
            <TodoWithContext />
        </TodoCreateProvider>
    </div>
  )
}

export default AppContextAPI;