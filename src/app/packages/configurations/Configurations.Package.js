import Database from "../../../database";
import { Protocols } from "../../helpers";

export async function updateConfigurations(args) {
  Object.keys(args).forEach((key) => {
    if (!args[key]) {
      delete args[key];
    }
  });

  try {
    const updatedConfigurations = await Database.Configurations.update(args, {
      where: {
        id: 1,
      },
      returning: true,
    });
    return Protocols.appResponse({ data: updatedConfigurations[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
}

export async function showConfigurations() {
  try {
    const configurations = await Database.Configurations.findAll();
    return Protocols.appResponse({ data: configurations[0] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
}
