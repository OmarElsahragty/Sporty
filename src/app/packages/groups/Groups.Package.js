import Database from "../../../infrastructure/database";
import { Filter, Pagination, Protocols, Sorting } from "../../helpers";

// **==========================================================================
// **                             Groups
// **==========================================================================
export const showGroups = async ({ pageNumber, pageSizeLimit, ...args }) => {
  try {
    const Groups = await Database.Groups.findAndCountAll({
      attributes: ["id", "name", "gender", "interests", "picture"],
      include: [
        {
          model: Database.Regions,
          as: "groupRegion",
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
          include: [
            {
              model: Database.Cites,
              as: "city",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
            },
          ],
        },
      ],
      ...Pagination(
        { where: Filter(args), order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
    }).then(async (data) => {
      if (data && data.rows) {
        await Promise.all(
          data.rows.map(async (element) => {
            if (element && element.dataValues) {
              const interests = [];
              await Promise.all(
                element.dataValues.interests.map(async (interestId) => {
                  const interestData = await Database.Sports.findByPk(
                    interestId,
                    {
                      attributes: {
                        exclude: ["createdAt", "updatedAt", "deletedAt"],
                      },
                    }
                  );
                  interests.push(interestData.dataValues);
                })
              );

              const membersCount = await Database.GroupMembers.count({
                where: { groupId: element.dataValues.id },
              });

              element.dataValues = {
                ...element.dataValues,
                membersCount,
                interests,
              };
            }
          })
        );
      }
      return data;
    });

    return Protocols.appResponse({ data: Groups });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showMyGroups = async (
  { pageNumber, pageSizeLimit, ...args },
  userId
) => {
  try {
    const Groups = await Database.GroupMembers.findAndCountAll({
      attributes: ["approved"],
      ...Pagination(
        { where: { userId, ...Filter(args) }, order: Sorting(args) },
        pageNumber,
        pageSizeLimit
      ),
      include: [
        {
          attributes: ["id", "name", "gender", "interests", "picture"],
          model: Database.Groups,
          as: "group",
          include: [
            {
              model: Database.Regions,
              as: "groupRegion",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
              include: [
                {
                  model: Database.Cites,
                  as: "city",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"],
                  },
                },
              ],
            },
          ],
        },
      ],
    }).then(async (data) => {
      if (data && data.rows) {
        await Promise.all(
          data.rows.map(async (element) => {
            if (
              element &&
              element.dataValues &&
              element.dataValues.group &&
              element.dataValues.group.dataValues
            ) {
              const interests = [];
              await Promise.all(
                element.dataValues.group.dataValues.interests.map(
                  async (interestId) => {
                    const interestData = await Database.Sports.findByPk(
                      interestId,
                      {
                        attributes: {
                          exclude: ["createdAt", "updatedAt", "deletedAt"],
                        },
                      }
                    );
                    interests.push(interestData.dataValues);
                  }
                )
              );

              const membersCount = await Database.GroupMembers.count({
                where: { groupId: element.dataValues.group.dataValues.id },
              });

              element.dataValues.group = {
                ...element.dataValues.group.dataValues,
                membersCount,
                interests,
              };
            }
          })
        );
      }

      return data;
    });

    return Protocols.appResponse({ data: Groups });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const showGroup = async (groupId, userId) => {
  try {
    const currentUser = await Database.GroupMembers.findOne({
      where: { groupId, userId },
      attributes: ["approved"],
      include: [
        {
          attributes: ["arabicName", "englishName", "permissions"],
          model: Database.GroupRoles,
          as: "groupRole",
        },
      ],
    });

    const group = await Database.Groups.findByPk(groupId, {
      attributes: {
        exclude: ["region", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Database.Regions,
          as: "groupRegion",
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
          include: [
            {
              model: Database.Cites,
              as: "city",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
            },
          ],
        },
      ],
    });

    if (group && group.dataValues) {
      const interests = [];
      await Promise.all(
        group.dataValues.interests.map(async (interestId) => {
          const interestData = await Database.Sports.findByPk(interestId, {
            attributes: {
              exclude: ["createdAt", "updatedAt", "deletedAt"],
            },
          });
          interests.push(interestData.dataValues);
        })
      );

      return Protocols.appResponse({
        data: group
          ? {
              ...group.dataValues,
              currentUser,
              interests,
            }
          : null,
      });
    }

    return Protocols.appResponse({
      data: null,
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const createGroup = async (args, userId) => {
  try {
    return Protocols.appResponse({
      data: await Database.Groups.create(
        { GroupMembers: { userId, approved: true }, ...args },
        {
          include: [
            {
              model: Database.GroupMembers,
              as: "GroupMembers",
            },
          ],
        }
      ),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const modifyGroup = async (id, args) => {
  try {
    const updatedGroup = await Database.Groups.update(args, {
      where: { id },
      returning: true,
    });

    return Protocols.appResponse({ data: updatedGroup[1] });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const deleteGroup = async (id) => {
  try {
    const group = await Database.Groups.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    return Protocols.appResponse({
      data:
        (await Database.Groups.destroy({
          where: { id },
        })) && group,
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
