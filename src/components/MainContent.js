import React from "react";
import "../styles/MainContent.css";
import data from "../data";
import Card from "./Card";

const MainContent = () => {
  return (
    <div className="main">
      <h1>Top sights in Chiang Mai</h1>
      {data.map((data, key) => (
        <Card
          key={key}
          title={data.title}
          location={data.location}
          googleMapsUrl={data.googleMapsUrl}
          open={data.open}
          close={data.close}
          description={data.description}
          imageUrl={data.imageUrl}
        />
      ))}
    </div>
  );
};

export default MainContent;
