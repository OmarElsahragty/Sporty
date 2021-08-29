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
  systemController.configurations.getConfigurations
);
router.put(
  "/configurations",
  Authenticate(true),
  systemController.configurations.modifyConfigurations
);

// **==========================================================================
// **                             Cites
// **==========================================================================
router.get("/cites", Authenticate(), systemController.cites.getCites);
router.get("/city/:id", Authenticate(), systemController.cites.getCity);
router.post("/city", Authenticate(true), systemController.cites.createCity);
router.put("/city/:id", Authenticate(true), systemController.cites.modifyCity);
router.delete(
  "/city/:id",
  Authenticate(true),
  systemController.cites.deleteCity
);

// **==========================================================================
// **                            Regions
// **==========================================================================
router.get("/regions", Authenticate(), systemController.regions.getRegions);
router.get("/region/:id", Authenticate(), systemController.regions.getRegion);
router.post(
  "/region",
  Authenticate(true),
  systemController.regions.createRegion
);
router.put(
  "/region/:id",
  Authenticate(true),
  systemController.regions.modifyRegion
);
router.delete(
  "/region/:id",
  Authenticate(true),
  systemController.regions.deleteRegion
);

// **==========================================================================
// **                            Sports
// **==========================================================================
router.get("/Sports", Authenticate(), systemController.sports.getSports);
router.get("/Sport/:id", Authenticate(), systemController.sports.getSport);
router.post("/Sport", Authenticate(true), systemController.sports.createSport);
router.put(
  "/Sport/:id",
  Authenticate(true),
  systemController.sports.modifySport
);
router.delete(
  "/Sport/:id",
  Authenticate(true),
  systemController.sports.deleteSport
);

export default router;
