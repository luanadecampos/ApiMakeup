import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import './precos.css';


const api = axios.create({
    baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',

});
    
class App extends Component {
    state = {
        makeup: [],
        produto_category:[]
    };

async componentDidMount() {
    const response = await api.get('');
    this.setState({makeup:response.data})
}
render(){
    const marc = this.state.makeup;
    console.log(this.state.makeup);
    

    var marca = marc ?
    marc.map(m => (
<div className="flex-item">
      <h4> {m.name}</h4>
      <img src={m.image_link} />
      <p className="descricao">{m.description}</p>
      <p className="preco">R$: {m.price}</p>
      <a target="_blank" href={m.product_link} className="produto">Compre Aqui</a>

</div>
)
): "";

return(

    <div className= "App">

            <div className="compras">
            <ol>
                <h1>Minhas Compras <img className="carri" src="https://images.vexels.com/media/users/3/200098/isolated/lists/7ad7c76da9a0cd7d2b01b64b2590617b-shopping-cart-icon-icone-de-carrinho-de-compras.png" align="right"  ></img></h1>
            </ol>
            </div>
            <div className="pesquisar">
                    <p><img className="mayb"  src="https://images-americanas.b2w.io/spacey/2018/09/17/conjunto_Maybelline_logo_v2.png" align="left" ></img></p> 
                    <br></br>
                    <br></br>
                    <label for="pesq" > </label> 
                    <input className="pesque" type ="Search" placeholder="Oque você deseja encontar?"></input>
                    <button className="buttonPesq">Pesquisar</button> 
                    
     
            <div className='header'>
                 <div className="carrinho">
                    <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Marca</li>
                   
                    </ul>

           
     { <div className="container">{marca}

     </div>}
            <div className="email">
                   <p><label for="email">Escreva seu email para receber nossas promoções: </label>
                   <input type ="Email" placeholder="email"></input>
                   <button className="button">Enviar</button></p> 
                </div>
 
</div>
</div>
</div>
</div>
                      
)}
}
export default App;