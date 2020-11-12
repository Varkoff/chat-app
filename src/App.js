import Contact from "./components/Contact";
import React from "react";
function App() {
	return (
		<div>
			<Contact
				avatar="https://randomuser.me/api/portraits/women/39.jpg"
				status={true}
				name="Addison Hart"
				statusText="online"
			/>
			<Contact
				avatar="https://randomuser.me/api/portraits/women/90.jpg"
				status={false}
				name="Amelia Myers"
				statusText="offline"
			/>
			<Contact
				avatar="https://randomuser.me/api/portraits/men/28.jpg"
				status={false}
				name="Albert Collins"
				statusText="online"
			/>
		</div>
	);
}

export default App;
