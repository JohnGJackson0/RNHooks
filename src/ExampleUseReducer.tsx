import React, { useReducer } from "react";
import { Button, Text } from "react-native";

/*
benefit of use reducer, the state only changes in ways that 
you define

redux took this pattern

complex/nested components
*/


/*
use case

dispatch({type:ACTION.ADD_TODO, payload:{name:name}})
//refer with action.payload.name
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      //append new todo to todo array ...todos contains all other todo items
      return [...todos, newTodo(name)]
  }
}

*/

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ExampleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <Text>State: {state.count} </Text>
      <Button
        title="increment"
        onPress={() => {
          {
            dispatch({ type: ACTIONS.INCREMENT });
          }
        }}
      ></Button>

      <Button
        title="decrement"
        onPress={() => {
          {
            dispatch({ type: ACTIONS.DECREMENT });
          }
        }}
      ></Button>
    </>
  );
};

export default ExampleUseReducer;
