import express from "express";
import * as entityServices from "../services/entityServices";
import * as response from "../shared/response/http.response";
const router = express.Router();

router.get("/", async (_req, res) => {
  const status = await entityServices.find();
  return response.Ok(res, status);
});

router.post("/", async (req, res) => {
  const name = req.body.name;
  const city = req.body.city;
  const status = await entityServices.findByNameOrCity(name, city);
  return response.Ok(res, status);
});

router.post("/create", async (req, res) => {
  const status = await entityServices.create(req.body);
  return response.Ok(res, status);
});

router.put("/:id", async (req, res) => {
  const status = await entityServices.update(+req.params.id, req.body);
  return response.Ok(res, status);
});

export default router;
