import React from "react";

import "./MyWork.css";
import theme from "../../Assets/theme_pattern.svg";
import mywork_data from "../../Assets/mywork_data";

function MyWork() {
  return (
    <div id="work" className="MyWork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={work.w_img} alt="" />
            </div>
            <h3>{work.w_name}</h3>
            <div className="portfolio__item-cta">
              <a href={work.w_github} className="btn">
                Github
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MyWork;
