// CRUD - create, read, update, delete

const express = require("express");
const router = express.Router();
const dogsController = require("../controllers/dogs.controllers");

// middleware that is specific to this router
router.use((req, res, next) => {
  const { name } = req.body;

  if (name !== "markus") throw new Error("Noup");

  req.user = {
    name: "markus",
    role: "Owner",
  };

  console.log("Time: ", Date.now());
  next();
});

const getMiddleware = (req, res, next) => {
  console.log("Getting DB result for req.user");
  next();
};

router.get("/", getMiddleware, dogsController.read);
router.post("/:name", dogsController.create);
router.put("/:name", dogsController.update);
router.delete("/:name", dogsController.delete);

module.exports = router;
