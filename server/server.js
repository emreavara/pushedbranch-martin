import "dotenv/config";
import app from "./src/index.js";
const port = 3000;
app.listen(port, () => {
  console.log(`the server listening on ${port}`);
});

export default app;
