import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { Button } from 'primereact/button'
import GamesPage from './components/pages/games'
import TeamsPage from './components/pages/teams'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import CreateTeam from './components/pages/addTeam'
import CreateGame from './components/pages/addGame'
import RemoveTeam from './components/pages/removeTeam'
import UpdateGameScores from './components/pages/updateScore'


console.log("Snir")
interface IRoute {
    path: string,
    key: string,
    component: any,
    label?: string,
    onlyAdmin?: boolean
}
const routes: Array<IRoute> = [
    {
        path: "/Teams",
        component: <TeamsPage />,
        key: "Teams",
        label: "Teams"
    },
    {
        path: "/Create-Team",
        component: <CreateTeam />,
        key: "CreateTeam",
        label: "Create Team"
    },
    {
        path: "/Games",
        component: <GamesPage />,
        key: "Games",
        label: "Games"
    },
    {
        path: "/Create-Game",
        component: <CreateGame />,
        key: "CreateGame",
        label: "Create Game"
    },
    {
        path: "/Remove-Team",
        component: <RemoveTeam /> ,
        key: "RemoveTeam",
        label: "Remove Team"
    }
    ,
    {
        path: "/UpdateScore",
        component: <UpdateGameScores /> ,
        key: "UpdateScore",
        label: "Update Score"
    }
]



function App() {
    const navigate = useNavigate();
    function logoutHandler() {
        navigate("/Home")
    }

    return (
            <div>
                <div style={{ width: "100%", top: 0, left: 0, position: "absolute", textAlign: "right" }}>
                    <Button onClick={logoutHandler}> Home</Button>
                </div>
                <div style={{ marginTop: "50px" }}>
                    {routes.filter(r => r.label).map((route: IRoute) => {
                        return <Link key={route.label} to={route.path} > {route.label} </Link>
                    })}
                    <Routes>
                        {routes.map((route: IRoute) => {
                            return <Route path={route.path} key={route.key} element={route.component} />
                        })}
                    </Routes>
                </div>
            </div>
    )
}





export default App
