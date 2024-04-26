import mystyles from "../App.module.css";
const ButtonContnr = ({onBtnClick}) => {
    const myButton = ['C',"*","/","%", "1",  "2", "3", "4","5","6","7","8","9","0","-" ,"=","+"]
    return (
        <>
       { myButton.map((btnItem) => (
        <button className={mystyles.mybtn} onClick={()=> onBtnClick(btnItem)}>{btnItem}</button>
        ) )

        }
       
        

        </>
    );

}
export default ButtonContnr;