import './App.css';
import React, { useState } from 'react'

const App = (props) => {

  const [state, setState] = useState(props)
  const reset = () => setState(props)


  return (
    <>
      <div>現在の{ state.name }は{ state.price }円です</div>
      <button onClick={() => setState({...state, price: state.price + 1}) }>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1}) }>-1</button>
      <button onClick={ reset }>reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
