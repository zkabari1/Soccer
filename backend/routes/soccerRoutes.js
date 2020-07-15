import {
  addNewPlayer,
  getPlayers,
  getPlayerWithId,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerController";

const routes = (app) => {
  app
    .route("/players")
    // GET endpoint
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);

  app
    .route("/players/:PlayerId")
    // GET specific player
    .get(getPlayerWithId)
    // Update specific player
    .put(updatePlayer)
    //delete specific player
    .delete(deletePlayer);
};

export default routes;
