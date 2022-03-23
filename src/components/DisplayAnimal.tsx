import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "../models/Animal";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";


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
            <h1>{animal?.name}</h1>
            <img className="img" src={animal?.imageUrl}></img>
            <p className="description">Född: {animal?.yearOfBirth}</p>
            <p>Beskriving:</p>
            <p className="description">{animal?.longDescription}</p>
            <p>Medicin:</p>
            <p className="description">{animal?.medicine}</p>
            <p>Matad/ej matad:</p>
            <h2>{animal?.isFed ? "Matad" : "Ej matad"}</h2>
            <p>Senast matad:</p>
            <h3>{animal?.lastFed}</h3>
            <button onClick={() => {
                AnimalService.setLS(animal);
            }} disabled={animal?.isFed}>Mata djuret</button>

            </div>
    );
}