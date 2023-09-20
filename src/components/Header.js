import './Header.css';
import Link from "./Link";

function Header({logo}) {
    return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link
                    title='https://react.org'
                    url='Learn React'
                />
            </header>
    );
}

export default Header;
