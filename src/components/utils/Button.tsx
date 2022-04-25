import { ReactChild } from "react";
import classes from "./Button.module.css";

interface ButtonProps{
  children: ReactChild 
}

const Button:React.FC<ButtonProps> = ({children}) => {
  const buttonHandler = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={classes.button}
      onClick={buttonHandler}
     
    >
      {children}
    </button>
  );
};

export default Button;
