import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Animal } from "../models/Animal";
import IAnimal from "../models/IAnimal";
import AnimalService from "../services/AnimalService";
import "./DisplayAnimal.css";

export const DisplayAnimal = () => {
  const [animal, setAnimal] = useState<Animal>();
  let params = useParams();

  const getAnimal = (id: string) => {
    // avoid update state-loop
    if (animal !== undefined) {
      if (animal.checkFed()) setAnimal(new Animal(animal));
      return;
    }

    // get animal from API
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

  // run check isFed every second
  setInterval(function () {
    if (animal == undefined) return;
    if (animal.checkFed()) setAnimal(new Animal(animal));
  }, 1000);

  function showAnimal() {
    if (animal !== undefined) {
      return (
        <div>
          <h1 className="name">{animal.name}</h1>

          <div className="animalWrapper">
            <img className="image" src={animal.imageUrl}></img>
            <div className="wrapperInfo">
              <h2 className="description">Om {animal.name}</h2>
              <p className="animalBorn">
                <b>Född:</b> {animal.yearOfBirth}
              </p>
              <p className="animalMedicine">
                <b>Medicin:</b> {animal.medicine}
              </p>
              <p className="animalDescriptionLong">{animal.longDescription}</p>
            </div>
            <div className="wrapperFed">
              <h2 className="fed">Matad/inte matad</h2>
              <p className="animalFed">
                {animal.isFed ? "Matad" : "inte matad"}
              </p>
              <h2 className="lastFed">Senast matad</h2>
              <p className="animalLastFed">
                {animal.lastFed.format("YYYY-MM-DD")}
              </p>
              <p className="animalLastFed">
                {animal.lastFed.format("HH:mm:ss")}
              </p>
              <button
                onClick={() => {
                  AnimalService.setLS(animal);
                  setAnimal(new Animal(animal));
                }}
                disabled={animal.isFed}
              >
                Mata djuret
              </button>
            </div>
            <Link className="link" to="/">
              Gå tillbaka och se fler djur
            </Link>
          </div>
        </div>
      );
    }
  }

  return <div>{showAnimal()}</div>;
};
