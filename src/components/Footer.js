import * as React from "react";
import {useState} from "react";
import { Link } from "gatsby";
// import * as styles from "./Header.module.scss";
import Nav from "./Nav"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(0)
    return (
        <footer className="bg-gray-800 text-white text-center py-2">
            &copy; 2021 Maki Goto
        </footer>
    )
}

export default Header