import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Nav from './nav';


/* 
  https://stackoverflow.com/questions/58197800/set-the-data-in-react-context-from-asynchronous-api-call
*/
const Context = React.createContext({});
const ExampleContext = init => useContext(Context);

export function ExampleProvider({children}) {

  const [data, setData] = useState(null);
  const [loading,setLoading]=useState(false);

  const getExampleFunc = async ()=>{
      setLoading(true)
      const newText = await callExampleApi();
      setData(newText)
      setLoading(false)
  }

  useEffect(()=> {
    getExampleFunc()
  },[])


    return (
      <ExampleContext.Provider value={{loading,list:data}}>
        {children}
      </ExampleContext.Provider>
    )
}


/*
  https://thewebdev.info/2021/03/14/how-to-use-react-context-api-with-multiple-values-for-providers/
*/

const CountContextA = React.createContext("countA");
const CountContextB = React.createContext("countB");

const DescendantA = () => {
const { count, setCount} = useContext(CountContextA);


  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Click DescendantA {count[0]}</button>
    </>
  );
};

const DescendantB = () => {
const {count2, setCount2} = useContext(CountContextB);


  useEffect(() => {
  }, [])

  function incrementCount() {
    setCount2((count2) => count2 + 1);

  }

  return (
    <>
      <button onClick={() => incrementCount()}>Click DescendantA {count2}</button>
    </>
  );
};



export default function MainTask3({authorized}) {
  const [count, setCount] = useState([10,30,50,70,90]);
  const [count2, setCount2] = useState(20);


  return (
      <>
        <div className="container">
          <Nav/>
          <CountContextA.Provider value={{ count, setCount}}>
            <DescendantA />
          </CountContextA.Provider>


          <CountContextB.Provider value={{count2, setCount2}}>
            <DescendantB/>
          </CountContextB.Provider>
        </div>
    </>
  );
}
