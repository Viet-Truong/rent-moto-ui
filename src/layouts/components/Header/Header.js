import { Link } from "react-router-dom";

import config from "~/config";
import image from "~/assets/image";

function Header() {
    return (
        <div className="header">
            <Link to={config.routes.home} className={"logo-link"}>
                <img src={image.logo} alt="Website logo" />
            </Link>
        </div>
    );
}

export default Header;
