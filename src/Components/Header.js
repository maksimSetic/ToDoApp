import React from "react";
import Button from "./Button";

const Header = (props) => {
  //PROPS USED IN A PARENT COMPONENT ( onClick,color,text) SENT AS PROPS TO BUTTON.JS - the child component
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button
        onClick={props.onAdd}
        color={props.showAdd ? "red" : "green"}
        text={props.showAdd ? "Zatvori" : "Dodaj"}
        onClick={props.onAdd}
      />
    </header>
  );
};

export default Header;
