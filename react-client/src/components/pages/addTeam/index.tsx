import  { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios'; 
import { Header } from '../../ui-components/header';
import { useNavigate } from 'react-router-dom';

const CreateTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [city, setCity] = useState('');
  const [mainColor, setMainColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [semel, setSemel] = useState('');

  async function CreateTeam  () {
    try {
      const response = await axios.post(`http://localhost:4100/teams/new`, {
        team_name: teamName,
        city,
        main_color: mainColor,
        secondary_color: secondaryColor,
        semel,
      });
      
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
 const navigate = useNavigate();
    function navi() {
        navigate("/Teams")
    }
  return (
    <div>
    <Header text="Add New Team" />
    <div className="p-fluid">
      <div className="p-field">
        <label htmlFor="teamName">Team Name</label>
        <InputText id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="city">City</label>
        <InputText id="city" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="mainColor">Main Color</label>
        <InputText id="mainColor" value={mainColor} onChange={(e) => setMainColor(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="secondaryColor">Secondary Color</label>
        <InputText id="secondaryColor" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="semel">Semel</label>
        <InputText id="semel" value={semel} onChange={(e) => setSemel(e.target.value)} />
      </div>
    </div>
    <Button label="Create" onClick={()=>{CreateTeam()}} />
  </div>
  );
};

export default CreateTeam;
