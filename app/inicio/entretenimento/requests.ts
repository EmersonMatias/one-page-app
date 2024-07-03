import axios, { AxiosResponse } from "axios"

export async function getTrendingList(): Promise<TMovies>{
    try{
        const res: AxiosResponse<TMovies> = await axios.get(`${process.env.BASE_URL}/trending/all/day?api_key=${process.env.API_KEY}&language=pt-BR`)
        return res.data
    }catch(error){
        console.log(error)
        throw new Error('Failed to fetch data')
    } 
}