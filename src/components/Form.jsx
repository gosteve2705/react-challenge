import React from "react";
import Button from "./Button";
import Input from "./Input";
function createForm(props) {
  return (
    
    <form className="form">
      <Input type="text" placeholder="Username" />  
      {props.userIsRegistered ? 
      <Input type="password" placeholder="Password" /> :
    <div>
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
    </div> }
      <Button value={props.value}  />
    </form>
  );
}



export default createForm;
