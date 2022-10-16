const daysContainer = document.querySelector(".days-cont");

const mockdata = [
    {
        title: "Good grief standup",
        startTime: "Sat Jan 15 2022 3:40:00 GMT+0530",
        endTime: "Sat Jan 15 2022 05:30:00 GMT+0530"
    },
    {
        title: "Good grief standup",
        startTime: "Sat Jan 15 2022 5:00:00 GMT+0530",
        endTime: "Sat Jan 15 2022 05:50:00 GMT+0530"
    },
    {
        title: "Daily Standup",
        startTime: "Sat Jan 15 2022 17:00:00 GMT+0530",
        endTime: "Sat Jan 15 2022 20:00:00 GMT+0530"
    },
    {
        title: "Yoga Sessions",
        startTime: "Sat Jan 15 2022 10:15:00 GMT+0530",
        endTime: "Sat Jan 15 2022 11:00:00 GMT+0530"
    },
    {
        title: "Refinement",
        startTime: "Sat Jan 15 2022 1:30:00 GMT+0530",
        endTime: "Sat Jan 15 2022 3:00:00 GMT+0530"
    },
    {
        title: "Book reading session",
        startTime: "Sat Jan 15 2022 6:40:00 GMT+0530",
        endTime: "Sat Jan 15 2022 9:00:00 GMT+0530"
    }
];

for (let i = 0; i < 24; i++) {
    const day = document.createElement("div");
    day.className = "hours";
    day.style.top = `${60 * i}px`;

    let timePattern = i + ":00";
    i <= 9 ? (day.innerHTML = "0" + timePattern) : (day.innerHTML = timePattern);

    daysContainer.appendChild(day);
}

mockdata.forEach((dataItem) => {
    const startHour = new Date(dataItem.startTime).getHours();
    const endHour = new Date(dataItem.endTime).getHours();
    const startMins = new Date(dataItem.startTime).getMinutes();
    const endMins = new Date(dataItem.endTime).getMinutes();

    const scheduleDesc = document.createElement("div");
    scheduleDesc.className = "descriptionBox";
    scheduleDesc.style.top = `${60 * startHour + startMins}px`;

    scheduleDesc.style.height = `${60 * (endHour - (startHour + 1)) + (60 - startMins) + endMins
        }px`;
    const heading = document.createElement("h5");
    heading.innerHTML = dataItem.title;
    const data = document.createElement("p");
    data.innerHTML = `
    ${startHour < 10 ? "0" + startHour : startHour}:${startMins < 10 ? "0" + startMins : startMins
        } -
    ${endHour < 10 ? "0" + endHour : endHour}:${endMins < 10 ? "0" + endMins : endMins
        }
  `;

    scheduleDesc.appendChild(heading);
    scheduleDesc.appendChild(data);
    daysContainer.appendChild(scheduleDesc);
});
