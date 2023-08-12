import axios from "axios"

export interface ITeam {
    teamId: number,
    team_name: number,
    city: number,
    main_color: number,
    secondary_color: string,
    semel: string,

}

async function getTeamService(): Promise<Array<ITeam>> {
    const { data, headers } = await axios.get(`http://localhost:4100/teams`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    const teams: Array<ITeam> = data.map(p => {
        return {
            teamId: p.teamId,
            team_name: p.team_name,
            city: p.city,
            main_color: p.main_color,
            secondary_color: p.secondary_color,
            semel: p.semel,
          
        }
    })
    return teams;
}

// async function addProductToCartService({ productPrice, quantity, productId }: IAddToProduct): Promise<boolean> {
//     const { data, headers } = await axios.post(`http://localhost:4000/cart/add-product`, {
//         productPrice, quantity, productId, cartId: localStorage.getItem("cartId")
//     })
//     if (data.message === "ok") return true;
//     else return false;

// }






export { getTeamService }