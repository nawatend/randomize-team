import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.sass';
import { Button } from 'evergreen-ui'
import PlayersInput from './components/PlayersInput'
import TopBar from './layouts/TopBar';
import Team from './components/Team'
import shuffle from './utils/shuffle'

function App() {

  const [players, setPlayers] = useState([])
  const [teamMembers, setTeamMembers] = useState([])
  const teams = [
    "Team Potato",
    "Team Pumpkin",
    "Team Tingmo",
    "Team Lemon",
    "Team Apple",
    "Team Banana"
  ]
  const [totalTeams, setTotalTeams] = useState(2)

  const playersOnChange = (values) => {
    setPlayers([...values])
  }

  const totalTeamChange = (e) => {
    setTotalTeams(parseInt(e.target.value))
  }


  // useEffect(() => {
  //   let randomizeTeam = () => {
  //     let allPlayers = shuffle([...players])
  //     let teams = []
  //     let oneTeam = []
  //     let step = Math.round(allPlayers.length / parseInt(totalTeams))

  //     for (let i = 0; i < totalTeams; i++) {
  //       for (let n = i * step; n < ((step) + (step * i)); n++) {
  //         oneTeam.push(allPlayers[n])
  //       }
  //       teams.push(oneTeam)
  //       oneTeam = []
  //     }
  //     setTeamMembers(teams)
  //   }
  //   randomizeTeam()
  // }, [totalTeams, players])

  let randomizeTeam = () => {
    let allPlayers = shuffle([...players])
    let teams = []
    let oneTeam = []
    let step = Math.round(allPlayers.length / parseInt(totalTeams))

    for (let i = 0; i < totalTeams; i++) {
      for (let n = i * step; n < ((step) + (step * i)); n++) {
        oneTeam.push(allPlayers[n])
      }
      teams.push(oneTeam)
      oneTeam = []
    }
    setTeamMembers(teams)
  }


  let handleRandom = e => {
    randomizeTeam()
  }



  return (
    <div className="App">
      <TopBar />
      <PlayersInput onClick={handleRandom} players={[...players]} onChange={playersOnChange} onChangeTotalTeam={totalTeamChange} />
      <div className="teams">
        {Array.from(Array(totalTeams)).map((team, id) =>
          <Team key={id} teamName={teams[id]} players={teamMembers[id]} />
        )}
      </div>

    </div>
  );
}

export default App;
