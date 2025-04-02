import { AiOutlineArrowUp } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

import "../Assets/CSS/Top.scss";

const  Top = () => {
  return (
    <div className="top_container" animation-name="move-up">
      <HashLink to="#accueil">
        <AiOutlineArrowUp className="top_svg" />
      </HashLink>
    </div>
  );
}
 
export default Top;