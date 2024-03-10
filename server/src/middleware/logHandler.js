import fs from "fs";

function logHandler(req, res, next) {
      const log = `${new Date().toISOString()} - ${req.method} - ${req.url}\n`;
      console.log("log", log);
      fs.appendFile("server.log", log, (err) => {
        if (err) console.error(err);
      });
      next();
}

export default logHandler;