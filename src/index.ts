import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 0, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);

numberSorter.sort();

console.log(numbersCollection.data);
