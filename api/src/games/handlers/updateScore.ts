import { pool } from "../../database";

async function updateGameScores(gameId: number, team_A_Score: number, team_B_Score: number) {
  const query = `
    UPDATE sport.game
    SET team_A_Score = ?, team_B_Score = ?
    WHERE id = ?;
  `;

  const results = await pool.execute(query, [team_A_Score, team_B_Score, gameId]);
  console.log(results);
  const [data] = results;
  return data;
}

export { updateGameScores };
