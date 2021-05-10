import React from 'react';
import NewNoteInput from './NewNoteInput';
import { addNote, loadNotes, saveNotes } from '../redux/notesActions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
	const notes = useSelector(state => state.notes);
	const dispatch = useDispatch();

	const onAddNote = node => dispatch(addNote(node));

	const onSave = () => dispatch(saveNotes());

	const onLoad = () => dispatch(loadNotes());

	return (
		<NewNoteInput addNote={onAddNote}>
			<hr />
			<ul>
				{notes.map(note => (
					<li key={note}>{note}</li>
				))}
			</ul>
			<hr />
			<button onClick={onSave}>Save</button>
			<button onClick={onLoad}>Load</button>
		</NewNoteInput>
	);
};

export default App;
