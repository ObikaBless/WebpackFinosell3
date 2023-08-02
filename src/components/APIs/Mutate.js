import axios from "axios";
export const addBudget = async (data)=>{
    return await axios.post('https://dev.finosell.link/api/v2/budget/create', data)
}