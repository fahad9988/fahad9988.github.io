import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./Stats.scss"
const Calender = () => {
 
  return (
    <div className="cal-div" style={{width:"90%"}} >
      <GitHubCalendar
        style={{ margin: "auto",width:"100%" }}
        username="fahad9988"
        blockSize={27}
        fontSize={15}
        color="darkblue"
        hideTotalCount="false"
        blockMargin={4}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </div>
  );
};

export default Calender;