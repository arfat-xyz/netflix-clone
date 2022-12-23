import React from "react";
import "./Banner.css";
const Banner = () => {
  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">Movie name</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>
          <div className="banner__description">
            {truncate(
              `This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description`,
              150
            )}
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
};

export default Banner;
