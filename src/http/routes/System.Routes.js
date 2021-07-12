import express from "express";
import { Authenticate } from "../middlewares";
import { systemController } from "../controllers";

const router = express.Router();

// **==========================================================================
// **                         Configurations
// **==========================================================================
router.get(
  "/configurations",
  Authenticate(),
  systemController.getConfigurations
);
router.put(
  "/configurations",
  Authenticate(true),
  systemController.modifyConfigurations
);

// **==========================================================================
// **                             Cites
// **==========================================================================
router.get("/cites", Authenticate(), systemController.getCites);
router.get("/city/:id", Authenticate(), systemController.getCity);
router.post("/city", Authenticate(true), systemController.createCity);
router.put("/city/:id", Authenticate(true), systemController.modifyCity);
router.delete("/city/:id", Authenticate(true), systemController.deleteCity);

// **==========================================================================
// **                            Regions
// **==========================================================================
router.get("/regions", Authenticate(), systemController.getRegions);
router.get("/region/:id", Authenticate(), systemController.getRegion);
router.post("/region", Authenticate(true), systemController.createRegion);
router.put("/region/:id", Authenticate(true), systemController.modifyRegion);
router.delete("/region/:id", Authenticate(true), systemController.deleteRegion);

// **==========================================================================
// **                            Sports
// **==========================================================================
router.get("/Sports", Authenticate(), systemController.getSports);
router.get("/Sport/:id", Authenticate(), systemController.getSport);
router.post("/Sport", Authenticate(true), systemController.createSport);
router.put("/Sport/:id", Authenticate(true), systemController.modifySport);
router.delete("/Sport/:id", Authenticate(true), systemController.deleteSport);

export default router;
