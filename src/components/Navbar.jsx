import { useState } from "react";

function Navbar(){
    const [open, setOpen] = useState(false);

    const changeTheme = (e)=>{
        const themeStyle = e.target.value;

    }

    return(
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact Me</a></li>
                <li>            
            <a href="">Blog [Work in Progress]</a>

            </li>
            <button id="theme-switcher" value={"dark"}>THEMES</button>
                
            </ul>
            
        </nav>
    )
}
export default Navbar;