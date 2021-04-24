//Core
import { CSSTransition } from 'react-transition-group';
//Components
import Filter from './Filter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { Heading, Section } from './Commons';
//Styles
import fadeFilter from 'animation/fadeFilter.module.css';
import fadeHeading from 'animation/fadeHeading.module.css';

const App = () => (
	<Section>
		<CSSTransition
			in={true}
			classNames={fadeHeading}
			timeout={500}
			appear
			unmountOnExit
		>
			<Heading />
		</CSSTransition>

		<ContactForm />

		<CSSTransition
			in={true}
			classNames={fadeFilter}
			timeout={250}
			unmountOnExit
		>
			<Filter />
		</CSSTransition>

		<ContactList />
	</Section>
);

export default App;
