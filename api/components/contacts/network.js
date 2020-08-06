const express = require("express");
const response = require("../../../network/response");
const controller = require("./index");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const list = await controller.list();
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contact = await controller.get(req.params.id);
    response.success(req, res, contact, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.post("/", async (req, res) => {
  try {
    const contact = await controller.insert(req.body);
    response.success(req, res, contact, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

module.exports = router;
