import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "../models/Animal";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import './DisplayAnimal.css';


export const DisplayAnimal = () => {
    const [animal, setAnimal] = useState<IAnimal>();
    let params = useParams();

    const getAnimal = (id: string) => {
        AnimalService.getAnimalId(id)
            .then((response: any) => {
                let animalFromAPI = new Animal(response.data);
           setAnimal(animalFromAPI);
           console.log(response.data);
       })
       .catch((e: Error) => {
           console.log(e);
       });
    };

    useEffect(() => {
        if (params.id) {
            getAnimal(params.id);
        }
    }, [animal]);

    return (
        <div>
            <h1 className="name">{animal?.name}</h1>
                <div className="animalWrapper">
                    <img className="image" src={animal?.imageUrl}></img>
                    <h2 className="born">Född:</h2>
                    <p className="animalBorn">{animal?.yearOfBirth}</p>
                    <h2 className="description">Beskriving:</h2>
                    <p className="animalDescriptionLong">{animal?.longDescription}</p>
                    <h2 className="medicine">Medicin:</h2>
                    <p className="animalMedicine">{animal?.medicine}</p>
                    <h2 className="fed">Matad/ej matad:</h2>
                    <p className="animalFed">{animal?.isFed ? "Matad" : "Ej matad"}</p>
                    <h2 className="lastFed">Senast matad:</h2>
                    <p className="animalLastFed">{animal?.lastFed}</p>
                    <button onClick={() => {
                         AnimalService.setLS(animal);
                        }} disabled={animal?.isFed}>Mata djuret</button>

            </div>
        </div>
    );
}