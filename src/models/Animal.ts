export class Animal {
    constructor(
        public id: number, 
        public name: string,
        public yearOfBirth: number,
        public shortDescription: string,
        public longDescription: string,
        public imageUrl: string,
        public medicine: string,
        public lastFed: string
        ) {}
}