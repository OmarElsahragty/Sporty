import Database from "../../../infrastructure/database";
import { Protocols } from "../../helpers";

// **==========================================================================
// **                         Configurations
// **==========================================================================
export const showConfigurations = async () => {
  try {
    return Protocols.appResponse({
      data: await Database.Configurations.findByPk(1),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const updateConfigurations = async (args) => {
  try {
    const updatedConfigurations = await Database.Configurations.update(args, {
      where: { id: 1 },
      returning: true,
    });
    return Protocols.appResponse({ data: updatedConfigurations[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
