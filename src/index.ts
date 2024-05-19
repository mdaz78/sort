import { CharactersCollection } from "./CharacterCollections";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 0, 3, -5, 0]);
numbersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linkedList.print());
