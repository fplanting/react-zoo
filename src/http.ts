import axios from "axios";

export default axios.create({
    baseURL: "https://animals.azurewebsites.net/api/animals",
    headers: {
        "Content-type": "application/json"
    }
});