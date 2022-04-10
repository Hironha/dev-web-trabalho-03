import express from 'express';
import cors from 'cors';

import { articleRouter } from 'routes/article';

const app = express();

const port = process.env.PORT || 4000;

// set middlewares for all routes
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.urlencoded({ extended: false }));

app.use('/articles', articleRouter);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
