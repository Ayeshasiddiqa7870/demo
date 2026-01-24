import './App.css';
function App(){
  return(
<div class="parentClass">
 <h1>Add Customer</h1>
<div className="add-custumer">
<input type="text" name="name" placeholder="Name" required/>
<input type="email" name="email" placeholder="Email" required/>
<input type="tel" name="phone" placeholder="Phone" required/>
<button >Add Customer</button>
</div>
<br />
<hr />
<br />
<h1>Add Mobile</h1>
<div className="add-mobile">
  <input type="text" name="brandUuid" placeholder="Brand ID" required/>
  <input type="text" name="modelName" placeholder="Model Name" required/>
  <input type="number" name="price" placeholder="Price" step="0.01" required/>
<button >Add Mobile</button>
</div>
<br />
<hr />
<br />
<h1>Create Transactions</h1>
<div className="create-transaction">
  <input type="text" name="customerUuid" placeholder="Customer ID" required/>
  <input type="tel" name="phone" placeholder="Phone" required/> 
  <input type="number" name="quantity" placeholder="Quantity" min="1" required/>
  <button >Create Transactions</button>
</div>
<br />
<hr />
<br />


<h1>Total Sales</h1>
<div className="total-sales">
<button >Total Sales</button>
</div>
<br />
<hr />
<br />

<h1>Customer Purchases</h1>
<div className="customer-purchases">
  <input type="text" name="customerUuid" placeholder="Customer ID" required/>
<button >Get Purchases</button>

</div>
</div>
  );


}
export default App;