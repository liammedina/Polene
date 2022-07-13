import "./ItemListContainer.css";
import "./CartWidget";
import ItemsDatabase from "./Database.jsx";

function ItemListContainer(props) {
    
    let promiseItems = new Promise ((resolve, reject) => {
        setTimeout( 
            () => {
                resolve({ItemsDatabase});
            },2000);
    });

    ItemsDatabase.then(
        (respuesta) => {
            console.log(respuesta);
        }
    )

    return (
        <>
            <div className="background">
                <p className="proxText">{props.greeting}</p>
            </div>

        </>
    );
}
 
export default ItemListContainer;
