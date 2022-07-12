import "./ItemListContainer.css"
import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <>
            <div className="background">
                <p className="proxText">{props.greeting}</p>
            </div>
        </> 
    );
}
 
export default ItemListContainer;
