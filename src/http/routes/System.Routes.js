import express from "express";
import { Authenticate, isAdmin } from "../middlewares";
import { systemController } from "../controllers";

const router = express.Router();

// **==========================================================================
// **                         Configurations
// **==========================================================================
router.get("/configurations", Authenticate, systemController.getConfigurations);
router.put("/configurations", isAdmin, systemController.modifyConfigurations);

// **==========================================================================
// **                             Cites
// **==========================================================================
router.get("/cites", Authenticate, systemController.getCites);
router.get("/city/:id", Authenticate, systemController.getCity);
router.post("/city", isAdmin, systemController.createCity);
router.put("/city/:id", isAdmin, systemController.modifyCity);
router.delete("/city/:id", isAdmin, systemController.deleteCity);

// **==========================================================================
// **                            Regions
// **==========================================================================
router.get("/regions", Authenticate, systemController.getRegions);
router.get("/region/:id", Authenticate, systemController.getRegion);
router.post("/region", isAdmin, systemController.createRegion);
router.put("/region/:id", isAdmin, systemController.modifyRegion);
router.delete("/region/:id", isAdmin, systemController.deleteRegion);

// **==========================================================================
// **                            Sports
// **==========================================================================
router.get("/Sports", Authenticate, systemController.getSports);
router.get("/Sport/:id", Authenticate, systemController.getSport);
router.post("/Sport", isAdmin, systemController.createSport);
router.put("/Sport/:id", isAdmin, systemController.modifySport);
router.delete("/Sport/:id", isAdmin, systemController.deleteSport);

export default router;
