import { Link } from "react-router-dom";

const Button = ({label, classStyles}) => {
    return ( 
        <Link to='/products'>
            <button className={classStyles}>{label}</button>
        </Link>
     );
}
 
export default Button;