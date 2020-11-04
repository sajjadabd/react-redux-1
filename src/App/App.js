import React , { Fragment } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { INCREMENT , DECREMENT , NAME_CHANGE } from '../store/actions';

function App() {

  const centerStyle = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height : '20vh'
  }


  const { value , name } = useSelector(state => {
    return {
      ...state.counterReducer,
      ...state.nameReducer
    }
  })
  

  const dispatch = useDispatch();

  const decrement = () => {
    dispatch({ type: DECREMENT })
  }

  const increment = () => {
    dispatch({ type: INCREMENT })
  }

  const handleChange = (e) => {
    dispatch({ type: NAME_CHANGE , payload : { name : e.target.value } })
  }

  return (
    <Fragment>
      <div style={centerStyle}>
        <button onClick={decrement}>-</button>
        {value}
        <button onClick={increment}>+</button>
      </div>
      <div style={centerStyle}>
        <div>
          <input 
          type="text" 
          placeholder="Enter Your Name" 
          onChange={handleChange}
          />
        </div>
        <div>Hello, {name}</div>
      </div>
    </Fragment>
  );
}

export default App;