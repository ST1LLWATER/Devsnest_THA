// const http = require("http");
const fs = require("fs");
// const requests = require("requests");
const nodeFetch = require("node-fetch");
const express = require("express");

const homeFile = fs.readFileSync("./public/index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace(
    "{%tempval%}",
    (orgVal.main.temp - 273).toFixed(2)
  );
  temperature = temperature.replace(
    "{%tempmax%}",
    (orgVal.main.temp_max - 273).toFixed(2)
  );
  temperature = temperature.replace(
    "{%tempmin%}",
    (orgVal.main.temp_min - 273).toFixed(2)
  );
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);

  return temperature;
};

const app = express();

// http
// 5 - GET POST PUT DELETE PATCH

app.use(express.static("public"));

app.get("/o", async (req, res) => {
  const apiResponse = await nodeFetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Mussoorie&appid=d0e499fb7d9968879c29a43c3689851d",
    {
      method: "GET",
    }
  ).then((r) => r.json());
  console.log(apiResponse);

  const arrData = [apiResponse];
  const realTimeData = arrData
    .map((val) => replaceVal(homeFile, val))
    .join(" ");

  res.send(realTimeData);
});

app.listen(5123, () => {
  console.log("Server Started");
});

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     requests(
//       "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=d0e499fb7d9968879c29a43c3689851d"
//     )
//       .on("data", (chunk) => {
//         const objData = JSON.parse(chunk);
//         const arrData = [objData];
//         // console.log(arrData[0].main.temp - 273);
//         const realTimeData = arrData
//           .map((val) => replaceVal(homeFile, val))
//           .join("");
//         console.log(realTimeData);
//         res.write(realTimeData);
//       })
//       .on("end", (err) => {
//         if (err) return console.log("connection closed due to errors", err);

//         res.end();
//       });
//   }
// });

// server.listen(8000, "127.0.0.1");
