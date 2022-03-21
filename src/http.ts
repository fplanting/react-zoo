import axios from "axios";

export default axios.create({
    baseURL: "https://animals.azurewebsites.net/api/",
    headers: {
        "Content-type": "application/json"
    }
});