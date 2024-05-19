import { CharactersCollection } from "./CharacterCollections";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 0, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);

const charactersCollection = new CharactersCollection("Xaayb");
const characterSorter = new Sorter(charactersCollection);

numberSorter.sort();
characterSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
