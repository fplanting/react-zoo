import { useEffect, useState } from "react"
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import './AnimalList.css';
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";

export const Animals: React.FC = () => {
    const [animals, setAnimals] = useState<Array<IAnimal>>([]);

    useEffect(() => {
        getAnimals();
    }, []);

    const getAnimals = async () => {
        AnimalService.getAnimal()
        .then((response: any) => {
            let animalsFromApi = response.data.map((animal: IAnimal) => {
                return new Animal(animal);
            })
            setAnimals(animalsFromApi);
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
                <button><Link to={`/Animals/${animal.id}`}>{animal.name}</Link></button>
                <p>{animal.lastFed}</p>
                <p>{animal.id}</p>
                </li>
        ))}
        </ul>
        </div>
        </div>
    )
}
export default Animals;