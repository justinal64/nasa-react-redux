import React from "react";

const UserCard = props => {
  function renderContent() {
    // switch (media_type) {
    //   case "video":
    //     return (
    //       <iframe
    //         allowFullScreen
    //         frameBorder="0"
    //         height="520"
    //         width="720"
    //         src={url}
    //       />
    //     );
    //   case "image":
    //     return <img src={url} alt={title} />;
    //   default:
    //     return null;
    // }
  }

  const test = Object.keys(props.data).map((user, index) => {
    return (
      <p key={index}>
        First Name: {props.data[index].name.first}
        Last Name: {props.data[index].name.last}
        Gender: {props.data[index].gender}
        Phone Number: {props.data[index].phone}
      </p>
    );
  });

  return (
    <div>
      <ul>
        {test}
      </ul>
    </div>
  );
};

export default UserCard;
