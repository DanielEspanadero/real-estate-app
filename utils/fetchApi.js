import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '55c7aff6eemshcd383819be5fbf5p141342jsn345fe6b78f78',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
};