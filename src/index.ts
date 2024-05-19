import { CharactersCollection } from "./CharacterCollections";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 0, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const charactersCollection = new CharactersCollection("Xaayb");
const characterSorter = new Sorter(charactersCollection);

const linkedListSorter = new Sorter(linkedList);

numberSorter.sort();
characterSorter.sort();
linkedListSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linkedList.print());
