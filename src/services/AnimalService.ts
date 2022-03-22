import http from "../http"
import IAnimal from "../models/IAnimal";



const getAnimal = () => {
    return http.get<Array<IAnimal>>("/Animals");
};

const getId = (id: any) => {
    return http.get<IAnimal>(`/Animals/${id}`);
};

const updateAnimal = (id: any, data: IAnimal) => {
    return http.put<any>(`/Animals/${id}`);
}

const AnimalService = {
    getAnimal,
    getId,
    updateAnimal
};

export default AnimalService;