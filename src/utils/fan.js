import fetchData from "./fetch.js";

const BASE_URL = "http://localhost:3000";

// GET FAN BY ID
async function getFanById(fan_id){
    const fan = await fetchData(`/fan/${fan_id}`);
    return fan;
}

// GET FAN IMAGE
function getFanImg(fan){
    const url = BASE_URL + `/images/` + fan.img;
    return url;
}

export {
    getFanById,
    getFanImg
}