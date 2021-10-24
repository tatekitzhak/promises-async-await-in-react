import React, {useState, useReducer, useEffect} from 'react';

const initialState = {
  counter: 0
};
const reducer = (state, action)=>{
      switch (action.type) {
        case 'Inc':
          return { counter: state.counter + action.value};
        case 'Dec':
          return {counter: state.counter - action.value};
        case 'Reset':
          return initialState;
        default:
          return state;

      }
}
function Fetch2() {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    async function fetchDataAndCategories(url1, url2) {
      try{
        const [dataResponse, categoriesResponse] = await Promise.all([
          fetch(url1),
          fetch(url2)
        ]);

        const data = await dataResponse.text();
        const categories = await categoriesResponse.json();

        return [data, categories];

      }catch(error) {
        console.log('Fetch error: ', error);
        
      }
      
    }

    fetchDataAndCategories('https://jsonplaceholder.typicode.com/posts/1','https://jsonplaceholder.typicode.com/posts/2').then(function ([data, categories]) {
      console.log("data:",data)
      console.log("categories:", categories)
    }).catch(error=>{
      console.log("error fetchDataAndCategories:", error)
    })

  },[])

  return(
    <>
      <h1>  {data.counter} </h1>
      <button onClick={()=>dispatch({type: 'Inc', value: 2})}> Inc: </button>
      <button onClick={()=>dispatch({type: 'Dec', value: 2})}> Decr: </button>
      <button onClick={()=>dispatch({type: 'Reset'})}> Reset: </button>
    </>
  )

}

export default Fetch2;
