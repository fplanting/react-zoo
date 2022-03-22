import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import AnimalService from "../services/AnimalService";
import IAnimal from "../models/IAnimal";
import { Animal as AnimalModel } from "../models/Animal";


export const Animal = () => {
    const [animal, setAnimal] = useState<IAnimal>();
    let params = useParams();

    const getAnimal = (id: string) => {
        AnimalService.getId(id)
            .then((response: any) => {
                let animalFromAPI = new AnimalModel(response.data);
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
            <h2>{animal?.isFed ? "Matad" : "Ej matad"}</h2><br />
            <h3>{animal?.lastFed}</h3>
            <button onClick={() => {
                AnimalService.setLS(animal);
            }} disabled={animal?.isFed}>Mata</button>

            </div>
    );
}