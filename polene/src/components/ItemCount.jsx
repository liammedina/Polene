import React, { useState } from "react";
import "./itemCount.css";
import swal from "sweetalert";

const ItemCount = () => {

    const [count, setCount] = useState (1);
    const stock = 20

        function handleSubstract() {
            if(count > 1) {
            setCount(count - 1)
        };
    };

        function handleAdd () { 
            if(count < stock){
            setCount(count +1)
            };
        }

        function addItem (){
            swal(
            {icon: 'success',
            title: "El producto de ha agregado al carrito",
            timer: 2000
            })
        };
    return(
        
        <div className="containerCount">
            <p className="textCount">ELIJE TUS PRODUCTOS</p>
            <div  className="ClickCount">
                <button className="buttonItem" onClick={handleSubstract}> - </button>
                <span className="counter">{count}</span>
                <button className="buttonItem" onClick={handleAdd}> + </button>
            </div>
            <button onClick={addItem} className="addButton">AGREGAR PRODUCTOS</button>
        </div>
    )
};
export default ItemCount;
