import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form 
      
     value="Login" 
      />:<Form 
      value="Register" 
       /> }
    </div>
  );
}

export default App;
