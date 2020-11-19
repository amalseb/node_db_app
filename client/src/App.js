import {useEffect, useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [productId, setproductId] = useState(0)
  const [productName, setproductName] = useState('')
  const [productStock, setproductStock] = useState(0)
  const [productList, setProductList] = useState([])

  useEffect(()=> {
    Axios.get('http://localhost:3030/unicento_update').then((response)=>{
      setProductList(response.data)
    });
  },[]);

  const submitProduct = () => {
    Axios.post('http://localhost:3030/unicento_insert',{
      productId: productId,
      productName: productName,
      productStock: productStock,
    });
    setProductList([
      ...productList,
      {
        productId: productId,
        productName: productName,
        productStock: productStock,
      },
    ]);
    
    document.getElementById('productId').value = ''
    document.getElementById('productName').value = ''
    document.getElementById('productStock').value = ''

  };
  
  return (
    <div className="App">
      <h1>Sample Unicento Product Insert</h1>
    
        <div className='un_products_form'>
          <label>Id</label> <input type="number" id="productId" name="productId" onChange={
            (e)=>{
              setproductId(e.target.value);
            }
          }/>
          <label>Product name </label><input type="text" id="productName" name="productName" onChange={
            (e)=>{
              setproductName(e.target.value);
            }
          }/>
          <label>Product stock </label><input type="number" id="productStock" name="productStock" onChange={
            (e)=>{
              setproductStock(e.target.value);
            }
          }/>
          <button onClick={submitProduct}>Submit</button>
          <table>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Stock</th>
                  <th>Qty</th>
                </tr>
          {productList.map((val)=>{
            return (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.product_name}</td>
                  <td>{val.stock}</td>
                  <td><input type="number" name="qty" min="1" max={val.stock}></input></td>
                  <button>Buy</button>
                  <button>Add Stock</button>
                  <button>Delete Stock</button>
                </tr>
              
          )})}
          </table>
        </div>
      
    </div>
  );
}

export default App;
