import React, { useState } from "react";
import "./style.css";
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="card" key={val.id}>
                  <div className="card_img">
                    <img src={val.image} />
                  </div>
                  <div className="card_header">
                    <h2>{val.title}</h2>

                    <p>{val.description}</p>
                    <p>{val.category}</p>

                    <p>{val.price}</p>
                    <div className="btn">Add to cart</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
