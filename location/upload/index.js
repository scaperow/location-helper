"use strict";

const axios = require("axios").default;
const querystring = require("querystring");

/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
  console.log('initializing');
  callback(null, ''); 
};
*/

module.exports.handler = function (event, context, callback) {
  // const data = `title:坐标上来了\r\ndesp:${JSON.stringify(event)}`;
  //   console.log(data);
  //   const options = {
  //     protocol: 'https:',
  //     port: 443,
  //     hostname: "sctapi.ftqq.com",
  //     path: "SCT170875Tyke0jF3eiIQxonihXKPpHpve.send",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //   };

  //   const req = https
  //     .request(options, (res) => {
  //       let data = "";

  //       console.log("Status Code:", res.statusCode);

  //       res.on("data", (chunk) => {
  //         data += chunk;
  //       });

  //       res.on("end", () => {
  //         callback();
  //       });
  //     })
  //     .on("error", (err) => {
  //       console.log(err);
  //       console.log("Error: ", err.message);
  //       callback(err);
  //     });

  //   req.write(data);
  //   req.end();

  axios
    .get(`https://sctapi.ftqq.com/SCT170875Tyke0jF3eiIQxonihXKPpHpve.send`, {
      params: {
        title: 'abc',
        desp: JSON.stringify(event)
      },
    })
    .then(() => {
      callback("success");
    })
    .catch((error) => {
      console.log(error);
      callback(error);
    })
    .then(() => {
      console.log("ended");
      callback();
    });
};
