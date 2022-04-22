import { Link } from "react-router-dom";
function CustomLinkHeader({to , children }){

    return (
        <li> <Link to={to}>{children}</Link></li>
    )
}
export default CustomLinkHeader ;