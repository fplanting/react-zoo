import { useEffect, useState } from "react"
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";
import './AnimalList.css';

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
        <h1 className="animals">Våra djur</h1>
        <div className="wrapper">
        <ul>
        {animals &&
        animals.map ((animal) => (
            <li key={animal.id}>
                <h2 className="animalName">{animal.name}</h2>
                <img className="animalImg" src={animal.imageUrl}></img>
                <p className="animalDescriptionShort">{animal.shortDescription}</p>
                <button><Link to={`/Animals/${animal.id}`}>Läs mer om {animal.name}</Link></button>
                </li>
        ))}
        </ul>
        </div>
        </div>
        
    )
}
export default Animals;