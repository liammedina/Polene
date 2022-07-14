import React from "react";

function ItemList (props){
    
    return (
        <>
        <div>Lista de Items</div>
        {props.item.map( (cadaItem) =>{
        return (
            <div key={cadaItem.id} className="cardProduct">
                <img className="cardImage" src={cadaItem.img}/>
                <div className="cardInfo">
                    <p className="textTitle">{cadaItem.title}</p>
                    <p className="textCategory">{cadaItem.category}</p>
                </div>
                <div>
                    
                    <p>{cadaItem.description}</p>
                </div>
            </div>
        );
        })}
        </>
    );
}

export default ItemList;