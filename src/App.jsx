import Counter from './counstari'
import './App.css'
import Friends from './Friends'
import Users from './User'
function App() {
function handelClick(){
  alert('button clicked Now')
}

const handelClick1 = ()=> {
  alert ('click now btn 2')
}

const addTofive = (num)=> {
  alert ( num + 10)
}

  return (
    <>
      <h3>React Core conception 2</h3>
       <Friends></Friends>
      <Users></Users>

    <Counter></Counter>
      
      <button onClick={handelClick}>Click Me</button>
    <button onClick={handelClick1}> click Now</button>

    <button onClick={()=>{alert('hey just me btn')}}>Just me</button>
    <button onClick={ ()=> {addTofive(50)} } >Five</button>
    </>
  )
}

export default App
