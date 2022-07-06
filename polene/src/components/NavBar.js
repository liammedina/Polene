import CartWidget from "./CartWidget";
const NavBar = () => {
    return (
        <nav className="App-nav">
            <img src="./logosmall.png"></img>
                <ul className="App-items">
                <li className="link"><a>COLECCIÓN</a></li>
                <li className="link"><a>STORE</a></li>
                <li className="link"><a>BOUTIQUE</a></li>
                <li className="link"><a>CONTACTO</a></li>
                <CartWidget />
            </ul>
        </nav>
    )
}
export default NavBar;
