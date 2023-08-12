import { useEffect, useState } from "react"
import { Header } from "../../ui-components/header";
import { ITeam, getTeamService} from "./api";
import TeamsTable from "./table";



export default function TeamPage() {
    const [teams, setTeams] = useState<Array<ITeam>>([])

    async function getTeamAction() {
        try {
            const result = await getTeamService()
            console.log(result, "teams")
            setTeams(result)
        } catch (error) {
            alert("error")
        }
    }

   
    useEffect(() => {
        getTeamAction()
        return () => {
            console.log("Unmount!")
        }
    }, [])
    
    return <div >
        
        <Header text="Teams"/>
        <TeamsTable teams={teams} />
    </div>
}


