
import mystyles from "../App.module.css";
function Display  ({displayVal}) {
    return(
    <input className={mystyles.display} type='text'  value={displayVal} readOnly/>
    );
};
 export default Display;