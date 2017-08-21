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
      <h6 className="astronomy-title">
        {title}
      </h6>

      {renderContent()}

      <p>
        {explanation}
      </p>

      <span>
        {date}, {copyright}
      </span>
    </div>
  );
};

export default AstronomyCard;
