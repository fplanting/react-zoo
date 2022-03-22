import http from "../http"
import IAnimal from "../models/IAnimal";



const getAnimal = () => {
    return http.get<Array<IAnimal>>("/Animals");
};

const getId = (id: any) => { // change name
    return http.get<IAnimal>(`/Animals/${id}`);
};

const getLS = () => {
    // animals will consist of a key-value object, where key is the id of the animal
    // and the value will be when it was lastFed
    // Example:
    // {
    //    1: 2022-03-22 19:34
    // }
    let animalString = localStorage.getItem('animals');
    if (animalString) {
        return JSON.parse(animalString)
    }
    return {};
}

const setLS = (animal: IAnimal | undefined) => {
    if (!animal) return;
    let animals = getLS();
    animals[animal.id] = "2022-03-22 19:37"; // change to date
    animal.lastFed = "2022-03-22 19:37";

    localStorage.setItem('animals', JSON.stringify(animals));
}

const AnimalService = {
    getAnimal,
    getId,
    getLS,
    setLS,
};

export default AnimalService;