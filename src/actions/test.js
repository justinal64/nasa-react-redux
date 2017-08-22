import axios from "axios";

export default function test() {
  console.log("console.log from the test action");

  return {
    // Return plain object with props
    type: "TEST", // Action Type
    payload: "Test" // Action Payload(cargo)
  };
}
