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
    <div className="cal-div" style={{width:"90%"}} >
      <GitHubCalendar
        style={{ margin: "auto",width:"100%" }}
        username="fahad9988"
        transformData={selectLastHalfYear}
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