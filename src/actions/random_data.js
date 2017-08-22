import axios from "axios";

export default function randomData() {
  console.log("ANOTHER_TEST");
  const END_POINT = `https://randomuser.me/api/?results=10`;
  const request = axios.get(END_POINT);
  return {
    // Return plain object with props
    type: "ANOTHER_TEST", // Action Type
    payload: request // Action Payload(cargo)
  };
}
