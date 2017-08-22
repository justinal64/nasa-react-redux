import React from "react";

const DisplayUsers = props => {
  const userData = Object.keys(props.data).map((user, index) => {
    return (
      <li key={index}>
        Name: {props.data[index].name.first} {props.data[index].name.last}
        Gender: {props.data[index].gender}
        Phone Number: {props.data[index].phone}
      </li>
    );
  });

  return (
    <div>
      <ul>
        {userData}
      </ul>
    </div>
  );
};

export default DisplayUsers;
