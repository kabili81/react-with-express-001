import { useEffect, useState } from 'react'

import './App.css'

function App() {
const [basket, setBasket] = useState([])
const [users, setUsers] = useState([])

useEffect(() => {
  fetch(`http://localhost:4321/basket`)
  .then(resp => resp.json())
  .then(basketFromServer => setBasket(basketFromServer))
}, [])

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(resp => resp.json())
  .then(usersFromAnotherServer => setUsers(usersFromAnotherServer))
}, [])

  return (
    <div className="App">
     <h1>Your Basket</h1> 
     <ul>
     { basket.map(item => <li>
        <h2>{item.title}</h2>
        <h3>Quantity: {item.quantity}</h3>
        <h3>Price: {item.quantity * item.price }</h3>
        </li>)}
        
        <h1>Users</h1>
        <ul>
          {
            users.map(user => (<li>{user.name}</li>))
          }
     </ul>
     </ul>
    </div>
  )
}

export default App
