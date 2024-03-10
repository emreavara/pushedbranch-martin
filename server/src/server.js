import 'dotenv/config';
import app from './index.js';
const port = 3030;
app.listen(port, () => {
    console.log(`the server listening on ${port}`)
})

export default app;