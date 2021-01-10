import React, { useState, useEffect } from "react";
import "./common.css";
import Data from "../../sample.json";
import axios from "axios";
import Loader from "../Loader";

const Serie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const results = await axios("http://localhost:3000/sample.json", {});
      } catch (error) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderGift = () => {
    if (isLoading) {
      return <Loader />;
    }
  };

  const renderError = () => {
    if (isError) {
      return (
        <div className="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
      );
    }
  };

  return (
    <>
      <div className="serieContainer">
        <div className="loading">{renderGift()}</div>
        <div className="error">{renderError()}</div>
        {Data.entries.map((item) => {
          if (item.programType === "series" && item.releaseYear >= 2010) {
            return (
              <>
                <div className="seria-item">
                  <div className="seria-item-wrapper">
                    <img src={item.images.PosterArt.url} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                </div>
              </>
            );
          }
        })}
        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default Serie;
