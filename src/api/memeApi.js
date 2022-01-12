import axios, { Axios } from "axios";

const api = "https://api.imgflip.com/get_memes";

export const getAll = () => {
    return axios.get(api);
}

export const getMemeList = (setState) => {
    return getAll()
        .then(res=>{
            const memeList = res.data.data.memes;
            setState(memeList);
        });
}