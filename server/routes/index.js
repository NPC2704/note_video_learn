const userRouter = require("./user");
const postRouter = require("./post");
const initRoutes = (app) => {
  app.use("/api/auth", userRouter);
  app.use("/api", postRouter);
};

module.exports = initRoutes;
