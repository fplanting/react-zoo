import AnimalService from "../services/AnimalService";
import IAnimal from "./IAnimal";

export class Animal implements IAnimal {  
    public id: number = 0;
    public name: string = "";
    public yearOfBirth: number = 0;
    public shortDescription: string = "";
    public longDescription: string = "";
    public imageUrl: string = "";
    public medicine: string = "";
    public isFed: boolean = false;
    public lastFed: string = "";

    constructor(
        animal: IAnimal 
    ) {
        this.id = animal.id;
        this.name = animal.name;
        this.yearOfBirth = animal.yearOfBirth;
        this.shortDescription = animal.shortDescription;
        this.longDescription = animal.longDescription;
        this.imageUrl = animal.imageUrl;
        this.medicine = animal.medicine;
        
        let animalLS = AnimalService.getLS();
        if (this.id in animalLS) {
            this.isFed = true;
            this.lastFed = animalLS[this.id];
            console.log("Found");
        } else {
            this.isFed = animal.isFed;
            this.lastFed = animal.lastFed;
            console.log("Not found");
        }
    }


}