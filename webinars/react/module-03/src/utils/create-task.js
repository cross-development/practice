import { uuid } from 'uuidv4';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export default function createTask() {
	return {
		id: uuid(),
		text: lorem.generateSentences(5),
		completed: false,
	};
}
