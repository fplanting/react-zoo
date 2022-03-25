import { Link } from "react-router-dom";
import { Button } from "./Button";

export const NotFound = () => {
    return <div>
        <h1>404</h1>
        <p>Sidan fungerar inte, vänligen gå <Link className="link" to="/">tillbaka</Link></p>

    </div>;
}