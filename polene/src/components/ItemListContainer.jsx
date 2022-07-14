import "./ItemListContainer.css";
import "./CartWidget";
import {ItemsDatabase} from "./Database.jsx";
import {useEffect, useState} from "react";
import ItemList from "./ItemList";

function ItemListContainer(props) {
    
    const [item, setItem] = useState([]);

    useEffect(()=>{const promiseItems = new Promise ((resolve, reject) => {
        setTimeout( 
            () => {resolve({ItemsDatabase});
            },2000);
        });
        promiseItems.then((respuesta) => {
            setItem (ItemsDatabase);
        })
    }, []
    )

    return (
        <>
            <ItemList item={item}/>

        </>
    );
}
 
export default ItemListContainer;
