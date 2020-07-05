import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form 
      userIsRegistered={userIsRegistered}
     value="Login" 
      />:<Form 
      value="Register" 
      userIsRegistered={userIsRegistered}
       /> }
    </div>
  );
}

export default App;
