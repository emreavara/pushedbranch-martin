import "dotenv/config";
import app from "./index.js";
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`the server listening on ${port}`);
});

export default app;
