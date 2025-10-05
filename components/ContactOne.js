import React from 'react';

const ContactOne = () => {
  return (
	<div className="contact__one">
		<div className="contact__one-wrapper">
			<div className="contact__one-image"> 
		<img src="assets/img/contact/contact.jpg" alt=""/> 
		</div>
			<div className="contact__one-content"> 
		<span className="subtitle-three">Get In Touch</span>
				<h2>Schedule Your Free Financial Consultation</h2>
				<form action="#" className="contact__one-form">
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Phone" />
					<input type="text" placeholder="Subject" />
					<textarea placeholder="Message"></textarea>
					<button className="btn-three" type="submit">Submit Now</button>
				</form>
			</div>
		</div>
	</div>
  );
};

export default ContactOne;