import "dotenv/config";
import app from "./index.js";
const port = 3000;

app.listen(port, () => {
  console.log(`the server listening on ${port}`);
});

export default app;
