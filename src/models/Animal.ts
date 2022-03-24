import AnimalService from "../services/AnimalService";
import IAnimal from "./IAnimal";
import dayjs from 'dayjs';

export class Animal implements IAnimal {  
    public id: number = 0;
    public name: string = "";
    public yearOfBirth: number = 0;
    public shortDescription: string = "";
    public longDescription: string = "";
    public imageUrl: string = "";
    public medicine: string = "";
    public isFed: boolean = false;
    public lastFed: dayjs.Dayjs;

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
        
        this.lastFed = dayjs(animal.lastFed);

        this.checkFed();
    }

        // get lastFed from LS and and update isFed status
    public checkFed() {
        let animalLS = AnimalService.getLS();
        if (this.id in animalLS) {
            this.lastFed = dayjs(animalLS[this.id]);
        }

        let previousFedStatus = this.isFed;

        // Check if animal was fed within 3 hours.
        let nowDate = dayjs();
        if (nowDate.isAfter(this.lastFed.add(3, 'hours'))) {
            this.isFed = false; // animal is not fed
        } else {
            this.isFed = true; // animal is fed
        }

        // checks isFed has changed.
        return previousFedStatus != this.isFed;
    }
}