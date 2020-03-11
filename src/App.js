import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alomgir','Mannna','Riaz'];
  const products = [{name: 'Photoshop', price: '$90.99'},
                    {name: 'Illustrator', price: '$60.99'},
                    {name: 'PDF Reader', price: '$6.99'}, 
                    {name: 'Premiere Elements', price: '$240.99'}]
  
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React Person</p>
       <Counter />
       <Users />
       {
         products.map(product => <Product product={product} />)
       }
       <ul>
         {nayoks.map(nayok => <li>{nayok}</li>)}
  {products.map(product => <li>{product.name}</li>)}
       </ul>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(7);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
    <h1>count: {count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    </div>
  )
  
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundcolor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} = props.product;
    return(
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy now</button>
      </div>
    )
}
function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
         <h1>Name: {props.name}</h1>
          <h3>hello world</h3>
    </div>
   
  ) 
}

export default App;
