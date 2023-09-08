const express = require("express");
const app = express();
const port = 3050;

const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const time = new Date();
  const day = time.getDay();

  const response = {
    slack_name: "Ella Omoni",
    current_day: daysOfWeek[day],
    utc_time: time.toISOString(),
    track: "backend",
    github_file_url: "https://github.com/ellaomoni/HNGx_projects/blob/master/index.js",
    github_report_url: " https://github.com/ellaomoni/HNGx_projects/blob/master ",
    status_code: 200,
  };

  try {
    res.status(200).json(response);
  } catch (err) {
    console.log(err, "Error");
    res.status(400).json({
      message: "page not found",
    });
  }
});

server.listen(port, () => {
  console.log("listening on port " + 3050);
});
