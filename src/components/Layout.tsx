import { Link, Outlet } from "react-router-dom";
import Zoo from '../Zoo.png';
import './Layout.css';

export const Layout = () => {
    return (
        <div>
    <header>
        <div className="headerImg">
            <img src={Zoo} />
            </div>
    </header> 

    <main>
        <Outlet></Outlet>
    </main>
    </div>
    );
};