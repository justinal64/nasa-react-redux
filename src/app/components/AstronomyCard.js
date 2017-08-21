import React from "react";

const AstronomyCard = props => {
  const {
    title,
    url,
    hdurl,
    explanation,
    date,
    copyright,
    media_type
  } = props.data;

  function renderContent() {
    switch (media_type) {
      case "video":
        return (
          <iframe
            allowFullScreen
            frameBorder="0"
            height="520"
            width="720"
            src={url}
          />
        );

      case "image":
        return <img src={url} alt={title} />;

      default:
        return null;
    }
  }

  return (
    <div className="astronomy-card">
      {renderContent()}
      <div className="img-details">
        <h2 className="astronomy-title">
          {title}
        </h2>

        <p>
          {explanation}
        </p>

        <span>
          {date}, {copyright}
        </span>
      </div>
    </div>
  );
};

export default AstronomyCard;
