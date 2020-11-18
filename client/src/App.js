import {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [productId, setproductId] = useState(0)
  const [productName, setproductName] = useState('')
  const [productStock, setproductStock] = useState(0)
  const submitProduct = () => {
    Axios.post('http://localhost:3030/unicento_insert',{
      productId: productId,
      productName: productName,
      productStock: productStock,
    }).then((response)=>{
      console.log(response)
      alert('successfully inserted to unicento');
    })
  };
  
  return (
    <div className="App">
      <h1>Sample Unicento Product Insert</h1>
    
        <div className='un_products_form'>
          <label>Id</label> <input type="number" name="productId" onChange={
            (e)=>{
              setproductId(e.target.value);
            }
          }/>
          <label>Product name </label><input type="text" name="productName" onChange={
            (e)=>{
              setproductName(e.target.value);
            }
          }/>
          <label>Product stock </label><input type="number" name="productStock" onChange={
            (e)=>{
              setproductStock(e.target.value);
            }
          }/>
          <button onClick={submitProduct}>Submit</button>
        </div>
      
    </div>
  );
}

export default App;
