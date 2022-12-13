import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./Stats.scss"
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div style={{width:"80%",margin:"auto",marginBottom:"100px",}} >
      <GitHubCalendar
        style={{ margin: "auto",width:"100%" }}
        username="fahad9988"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={15}
        color="darkblue"
        hideTotalCount="false"
        
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </div>
  );
};

export default Calender;