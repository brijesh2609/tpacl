"use strict";

module.exports = function (Teams) {
  Teams.reset = function (callback) {
    const createTeam = (pl, i) => {
      return new Promise((res, rej) => {
        Teams.create(
          {
            name: pl.name,
            image: pl.image,
            team_id: i.toString(),
            budget: 2000,
          },
          (err) => (err ? rej(err) : res())
        );
      });
    };

    Promise.all(
      [
        { name: "Karan Karachi", image: "kk.png" },
        { name: "Vasu Vampires", image: "vv.png" },
        { name: "Piyush Panthers", image: "pp.png" },
        { name: "Krishnights", image: "kn.png" },
      ].map((x, i) => createTeam(x, i + 1))
    )
      .then(() => callback(null, true))
      .catch(callback);
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
