import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import AnimalService from "../services/AnimalService";
import IAnimal from "../models/IAnimal";


export const Animal: React.FC = () => {
    const { id } = useParams();
    let navigate = useNavigate();
    const initialAnimal = {
        id: null,
        name: "",
        yearOfBirth: null,
        shortDescription: "",
        longDescription: "",
        imageUrl: "",
        medicine: "",
        isFed: false,
        lastFed: ""
    };
    
    const [currentAnimal, setCurrentAnimal] = useState(0);
    
    let params = useParams();

    const getAnimal = (id: string) => {
        AnimalService.getId(id)
        .then((response: any) => {
            setCurrentAnimal(response.data);
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };

    useEffect(() => {
        if (params.id)
        setCurrentAnimal(+params.id);
    }, []);

    useEffect(() => {
        if (currentAnimal === 0) return;
    }, [currentAnimal]);

    return (
        <div>{currentAnimal}</div>
    );
}

export default Animal;