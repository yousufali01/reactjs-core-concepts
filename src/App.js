import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'laptop', price: 20000},
    {name: 'phone', price: 10000},
    {name: 'watch', price: 50000},
    {name: 'tablet', price: 750000}
  ]
  return (
    <div className="App">



      
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      
      {/* <Product name="laptop" price="1,000000 Tk"></Product>
      <Product name="Phone" price="75,000 Tk"></Product>
      <Product name="watch" price="5,000 Tk"></Product> */}



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
function Product(props){
  return(
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}


export default App;
