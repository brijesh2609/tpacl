"use strict";

module.exports = function (Players) {
  Players.byId = function (id, callback) {
    Players.find(
      {
        where: {
          player_id: id,
        },
        include: "teams",
      },
      function (err, player) {
        callback(err, player);
      }
    );
  };

  Players.remoteMethod("byId", {
    http: {
      path: "/id/:id",
      verb: "get",
    },
    returns: {
      arg: "success",
      type: "object",
    },
    accepts: [{ arg: "id", type: "string" }],
  });

  Players.reset = function (callback) {
    Players.updateAll(
      {},
      {
        status: null,
        sp: null,
        teamsId: "",
      },
      function (err, player) {
        callback(err, true);
      }
    );
  };

  Players.remoteMethod("reset", {
    http: {
      path: "/reset",
      verb: "get",
    },
    returns: {
      arg: "success",
      type: "boolean",
    },
  });

  Players.createPlayer = function (callback) {
    // const Data = require("./data.json");
    const devx = require("./devx.json");

    const createPlayer = (pl, i) => {
      return new Promise((res, rej) => {
        Players.create(
          {
            player_id: i,
            image: `${i}.jpg`,
            name: pl,
            // flat: pl.Flat,
            price: 100,
            // category: pl.Category,
          },
          (err) => (err ? rej(err) : res())
        );
      });
    };

    Promise.all(devx.map((x, i) => createPlayer(x, i + 1)))
      .then(() => callback(null, true))
      .catch(callback);
  };

  Players.remoteMethod("createPlayer", {
    http: {
      path: "/createPlayer",
      verb: "get",
    },
    returns: {
      arg: "success",
      type: "boolean",
    },
  });
};
