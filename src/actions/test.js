import axios from "axios";

export default function test() {
  return {
    // Return plain object with props
    type: "TEST", // Action Type
    payload: "Test" // Action Payload(cargo)
  };
}
