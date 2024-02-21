import { Link } from "react-router-dom";

export default function Navlink({ to, children }) {
   return <Link to={to}>{children}</Link>;
}
