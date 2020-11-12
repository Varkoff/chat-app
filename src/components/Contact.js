import "./Contact.css";

function Contact() {
	return (
		<div className="Contact">
			<img
				className="avatar"
				src="https://randomuser.me/api/portraits/women/39.jpg"
			/>
			<div>
				<p className="name">Addison Hart</p>
				<div className="status">
					<div className="status-online"></div>
					<p className="status-text">Connecté</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
