import { useEffect, useState } from "react"
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import './AnimalList.css';
import { Link } from "react-router-dom";

export const Animals: React.FC = () => {
    const [animals, setAnimals] = useState<Array<IAnimal>>([]);
    const [currentAnimal, setCurrentAnimal] = useState<IAnimal | null>(null);

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
        <div>
                   <h1>Våra djur</h1>
        <div className="wrapper">
        <ul>
        {animals &&
        animals.map ((animal) => (
            <li key={animal.id}>
                <h2 className="animalName">{animal.name}</h2>
                <img className="img" src={animal.imageUrl}></img>
                <p className="description">{animal.shortDescription}</p>
                <Link to={`/Animals/" + animal.id`}>Läs mer om {animal.name}</Link>
                </li>
        ))}
        </ul>
        </div>
        </div>
    )
}
export default Animals;