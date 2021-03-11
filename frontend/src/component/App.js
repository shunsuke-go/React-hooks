import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers/index'
import EventForm from './EventForm'
import AppContext from '../contexts/AppContext'
import EventTable from './EventTable'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className='container-fluid'>
          <EventForm />
          <EventTable />
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App
