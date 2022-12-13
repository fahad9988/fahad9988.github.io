import React from "react";
import "./Stats.scss";
const Stats = () => {
  return (
    // streak 
    <div>
      <div className="hi"  >
        <a href="https://github.com/fahad9988">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=fahad9988"
          />
        </a>
      </div>
 
      <div className="wow">
        <a href="https://github.com/fahad9988">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=fahad9988"  //launguages
          />
        </a>
        <a href="https://github.com/fahad9988">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=fahad9988&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;