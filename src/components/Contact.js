import "./Contact.css";
import PropTypes from "prop-types";
import React from "react";

function Contact(props) {
	return (
		<div className="Contact">
			<img className="avatar" src={props.avatar} />
			<div>
				<p className="name">{props.name}</p>
				<div className="status">
					{props.status ? (
						<div>
							<div className="status-online"></div>
							<p className="status-text">{props.statusText}</p>
						</div>
					) : (
						<div>
							<div className="status-offline"></div>
							<p className="status-text">{props.statusText}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

Contact.propTypes = {
	avatar: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	statusText: PropTypes.string.isRequired,
};

export default Contact;
