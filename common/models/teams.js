"use strict";

module.exports = function (Teams) {
  Teams.reset = function (callback) {
    const allTeams = require("./dink-team.json");

    const createTeam = (pl, i) => {
      return new Promise((res, rej) => {
        Teams.create(
          {
            name: pl.Name,
            shortName: pl["Short Name"],
            image: `${pl.Logo}.jpeg`,
            owner: pl["Owner Name"],
            team_id: i.toString(),
            budget: 65,
          },
          (err) => (err ? rej(err) : res())
        );
      });
    };

    Teams.deleteAll({}, (err) => {
      Promise.all(allTeams.map((x, i) => createTeam(x, i + 1)))
        .then(() => callback(null, true))
        .catch(callback);
    });
  };

  Teams.remoteMethod("reset", {
    http: {
      path: "/reset",
      verb: "get",
    },
    returns: {
      arg: "success",
      type: "boolean",
    },
  });
};
