import "./ItemListContainer.css"

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