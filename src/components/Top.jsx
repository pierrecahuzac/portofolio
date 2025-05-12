import { AiOutlineArrowUp } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

import "../assets/styles/Top.scss";

const  Top = ({isOpen}) => {
  
  return (
    <div className={isOpen ? "top_container-hidden" : "top_container"} animation-name="move-up">
      <HashLink to="#accueil">
        <AiOutlineArrowUp className="top_svg" />
      </HashLink>
    </div>
  );
}
 
export default Top;