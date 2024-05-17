angular.module('TPACL', ['ngRoute'])
  .config(tconfig)
  .controller('tcontroller', tcontroller);

function tconfig($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/", {
      templateUrl: "main.html",
      controller: "tcontroller"
    })
    .when("/teams", {
      templateUrl: "team.html",
      controller: "tcontroller"
    })
    .when("/display", {
      templateUrl: "display.html",
      controller: "tcontroller"
    });
}

function tcontroller($scope, $http) {

  $scope.player = {};
  $scope.selectedTeam = "";
  $scope.teams = [];
  $scope.nextPlayerId = null;
  $scope.unsoldPlayers = [];
  $scope.currentBid = null;
  $scope.caraousel = [];

  $scope.getPlayer = function (id) {
    $http.get(`/api/players/id/${id}`)
      .then(player => {
        $scope.player = player.data.success[0];
        $scope.getTeams();
        $scope.currentBid = null;
      });
  }

  $scope.getTeams = function () {
    $http.get('/api/teams?filter=%7B%22include%22%3A%20%22players%22%7D')
      .then(team => {
        $scope.teams = team.data
        $scope.teams = $scope.teams.map(t => {
          t.leftBudget = t.budget;
          // const ext = t.name === 'Panthers' ? 'jpg' : "jpeg";
          // t.image  = t.name.toLowerCase() + '.' + ext;
          // console.log(t);
          return t;
        })
      });
  }

  $scope.getPlayer("5");
  $scope.getTeams();

  $scope.isBidding = function (index) {
    const bid = $scope.currentBid ? $scope.currentBid > 165 ? $scope.currentBid + 10 : $scope.currentBid + 5 : $scope.player.price;
    const reseverBidget = (8 - $scope.teams[index].players.length) * 120;
    if ($scope.player.status == 'Sold') return;
    else if (+$scope.selectedTeam.team_id === (index + 1)) return;
    else if ($scope.teams[index].leftBudget - reseverBidget - bid < 0) return;


    // debugger;
    $scope.player.status = '';
    $scope.selectedTeam = $scope.teams[index];
    $scope.currentBid = bid;
    $scope.teams[index].budget = $scope.teams[index].leftBudget - $scope.currentBid;
  }

  $scope.nextPlayer = function () {
    $scope.getPlayer($scope.nextPlayerId);
  }

  $scope.Sold = function () {
    const playerUpdate = new Promise((resolve, reject) => {
      $http.patch(`/api/players/${$scope.player.id}`,
        {
          status: 'Sold',
          teamsId: $scope.selectedTeam.id,
          sp: $scope.currentBid
        }
      )
        .then(data => {
          console.log('sold', data);
          resolve();
        });
    });

    const teamUpdate = new Promise((resolve, reject) => {
      $http.patch(`/api/teams/${$scope.selectedTeam.id}`,
        {
          budget: $scope.selectedTeam.budget
        }
      )
        .then(data => {
          console.log('team sold', data);
          resolve();
        });
    });

    Promise.all([
      playerUpdate,
      teamUpdate
    ])
      .then(() => {
        $scope.selectedTeam = "";
        $scope.currentBid = null;
        $scope.getTeams();
        $scope.getPlayer($scope.nextPlayerId);
      });
  }

  $scope.UnSold = function () {
    $http.patch(`/api/players/${$scope.player.id}`,
      {
        status: 'UnSold'
      }
    )
      .then(data => {
        $scope.currentBid = null;
        $scope.getPlayer($scope.nextPlayerId);
      });
  }

  $scope.getUnsold = function () {
    $http.get(`/api/players?filter=%7B%22where%22%3A%7B%22status%22%3A%20%22UnSold%22%7D%7D`)
      .then(data => $scope.unsoldPlayers = data.data);
  }

  $scope.getCarousel = function () {
    $http.get('/api/players?filter=%7B%22where%22%3A%7B%20%22or%22%3A%20%5B%20%7B%22status%22%3A%20%22Sold%22%7D%2C%20%7B%22status%22%3A%20%22UnSold%22%7D%5D%7D%2C%20%22include%22%20%3A%20%22teams%22%7D')
      .then(data => {
        $scope.caraousel = data.data;
        $('.carousel').carousel({
          interval: 2000
        });
      });
  }

}