import React, { useEffect } from "react";
import { inversify, container } from "../../inversify.config";
import { IMessageService , NotSolid } from "../../interface";
const notSolidInstance = new NotSolid();
const MyComponent = () => {
  //the dependency (IMessageService) is decoupled from the component.
  //The component relies on the abstraction (interface) rather than a specific implementation.
  // This makes it easier to switch or
  // replace the implementation in the future,
  //as the component is not directly tied to a specific class

  //In comparison, if dependency injection was not considered,
  // the component would need to directly create an instance of EmailService or SMSService inside the component.
  // This would create a tighter coupling between the component and the concrete implementation, 
  //making it harder to switch implementations or maintain flexibility in the codebase.

  const myDependency = container.get<IMessageService>(
    inversify.IMessageService
  );

    
  useEffect(() => {
    
    myDependency.sendMessage("sahand")
    notSolidInstance.sendMessage('sahand')
  }, []);

  return <div>My Component</div>;
};

export default MyComponent;
