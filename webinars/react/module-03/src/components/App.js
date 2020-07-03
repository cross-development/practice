//Core
import React, { Component } from 'react';
//Components
import Layout from './Layout/Layout';
// import Tasks from './Tasks/Tasks';
// import Modal from './Modal/Modal';
// import Clock from './Clock/Clock';
import Tabs from './Tabs/Tabs';
//JSON
import tabs from '../tabs.json';

export class App extends Component {
	state = {
		showModal: false,
	};

	toggleModal = () => {
		this.setState(prevState => ({ showModal: !prevState.showModal }));
	};

	render() {
		// const { showModal } = this.state;

		return (
			<Layout>
				<Tabs items={tabs} />

				{/* <div>
					<button type="button" onClick={this.toggleModal}>
						{showModal ? 'Hide' : 'Show'} clock
					</button>
					{showModal && <Clock />}
				</div> */}
				{/* <Tasks /> */}

				{/* <button type="button" onClick={this.toggleModal}>
					{showModal ? 'Hide' : 'Show'} modal
				</button>
				{showModal && (
					<Modal onClose={this.toggleModal}>
						<h2>Modal title</h2>
						<p>
							Phasellus viverra nulla ut metus varius laoreet. Donec posuere vulputate arcu.
							Phasellus a est. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
							convallis tellus, vitae iaculis lacus elit id tortor. Maecenas tempus, tellus eget
							condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
						</p>
						<button type="button" onClick={this.toggleModal}>
							Close modal
						</button>
					</Modal>
				)} */}
			</Layout>
		);
	}
}

export default App;
