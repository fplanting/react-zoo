import { useEffect, useState } from "react"
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import './AnimalList.css';

export const Animals: React.FC = () => {
    const [animals, setAnimals] = useState<Array<IAnimal>>([]);
    useEffect(() => {
        getAnimals();
    }, []);

    const getAnimals = () => {
        AnimalService.getAnimal()
        .then((response: any) => {
            setAnimals(response.data);
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };

    return (
        <div className="wrapper">
        <ul>
        {animals &&
        animals.map ((animal) => (
            <li key={animal.id}>
                <h1 className="animalName">{animal.name}</h1>
                <img className="img" src={animal.imageUrl}></img>
                <p className="description">{animal.shortDescription}</p>
                </li>
        ))}
        </ul>
        </div>
    )
}
export default Animals;