import  { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';
import { Header } from '../../ui-components/header';
import { InputText } from 'primereact/inputtext';

const CreateGame = () => {
  const [team_B_id, setTeam_B_id] = useState('');
  const [team_A_id, setTeam_A_id] = useState('');
  const [team_A_Score, setTeam_A_Score] = useState('');
  const [team_B_Score, setTeam_B_Score] = useState('');
  const [game_time, setGame_time] = useState(null);

  const handleCreateGame = async () => {
    try {
      const response = await axios.post(`http://localhost:4100/games/new`, {
        team_B_id,
        team_A_id,
        team_A_Score,
        team_B_Score,
        game_time,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header text="Add New Game" />
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="team_B_id">Team B ID</label>
          <InputText id="team_B_id" value={team_B_id} onChange={(e) => setTeam_B_id(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="team_A_id">Team A ID</label>
          <InputText id="team_A_id" value={team_A_id} onChange={(e) => setTeam_A_id(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="team_A_Score">Team A Score</label>
          <InputText id="team_A_Score" value={team_A_Score} onChange={(e) => setTeam_A_Score(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="team_B_Score">Team B Score</label>
          <InputText  id="team_B_Score" value={team_B_Score} onChange={(e) => setTeam_B_Score(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="game_time">Game Time</label>
          <Calendar
            id="game_time"
            value={game_time}
            onChange={(e:any) => setGame_time(e.value)}
            showTime
          />
        </div>
      </div>
      <Button label="Create" onClick={handleCreateGame} />
    </div>
  );
};

export default CreateGame;
