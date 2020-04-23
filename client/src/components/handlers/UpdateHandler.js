import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { updateHandlerProfile, getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';

const UpdateHandler = ({
	profile: { profile, loading },
	setAlert,
	updateHandlerProfile,
	getCurrentProfile,
	history,
}) => {
	const [formDatas, setFormDatas] = useState({
		name: '',
		email: '',
		role: '',
		phone: '',
		street: '',
		apt: '',
		city: '',
		zip: '',
		state: '',
		country: '',
		avatar: '',
	});

	const {
		name,
		email,
		role,
		phone,
		street,
		apt,
		city,
		zip,
		state,
		country,
		avatar,
	} = formDatas;

	useEffect(() => {
		getCurrentProfile();

		setFormDatas({
			name: loading || !profile.name ? '' : profile.name,
			email: loading || !profile.email ? '' : profile.email,
			role: loading || !profile.role ? '' : profile.role,
			phone: loading || !profile.phone ? '' : profile.phone,
			street: loading || !profile.address.street ? '' : profile.address.street,
			apt: loading || !profile.address.apt ? '' : profile.address.apt,
			city: loading || !profile.address.city ? '' : profile.address.city,
			zip: loading || !profile.address.zip ? '' : profile.address.zip,
			state: loading || !profile.address.state ? '' : profile.address.state,
			country:
				loading || !profile.address.country ? '' : profile.address.country,
		});
	}, [loading, getCurrentProfile]);

	const realFileBtn = useRef(null);
	const selectedImg = useRef(null);
	const [pics, setPics] = useState('');

	const realFileBtnChange = (e) => {
		//	setPics(e.target.files[0]);
		const formData = new FormData();
		formData.append('avatar', avatar);
		setFormDatas({ ...formDatas, avatar: formData });
		const image = e.target.files[0];

		if (image) {
			if (image.size <= 3500000) {
				const reader = new FileReader();

				selectedImg.current.style.display = 'inline-block';

				reader.addEventListener('load', function () {
					selectedImg.current.setAttribute('src', this.result);
				});

				reader.readAsDataURL(image);
			} else {
				setAlert('Image size should not exceed 3.5mb', 'warning');
			}
		} else {
			console.log('No image');
			selectedImg.current.style.display = null;
		}
	};

	const handleChange = (e) =>
		setFormDatas({ ...formDatas, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();

		updateHandlerProfile(
			{
				name,
				email,
				role,
				phone,
				street,
				apt,
				city,
				zip,
				state,
				country,
				avatar,
			},
			history
		);
	};

	return (
		<section className='new-handler '>
			<div className='go-back '>
				<Link to='/home/handler' className='btn-go-back'>
					Go Back
				</Link>
			</div>
			<h2 className='header-2'>Edit Handler</h2>

			<form className='handler-signup' onSubmit={(e) => handleSubmit(e)}>
				<div className='profile'>
					<div className='profile-img'>
						<input
							type='file'
							name='avatar'
							id='avatar'
							accept='image/*'
							hidden='hidden'
							ref={realFileBtn}
							onChange={realFileBtnChange}
						/>

						<div className='preview-img'>
							<img
								src=''
								alt='preview'
								className='selected-img'
								ref={selectedImg}
							/>
						</div>
						<button
							type='button'
							id='btn-pics'
							onClick={() => realFileBtn.current.click()}
						>
							<i className='fas fa-plus'></i>
						</button>
					</div>

					<div className='handler-info'>
						<input
							type='text'
							id='name'
							name='name'
							value={name}
							placeholder='Firstname Lastname'
							required
							onChange={(e) => handleChange(e)}
						/>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							placeholder='Email'
							required
							onChange={(e) => handleChange(e)}
						/>
						<input
							type='tel'
							id='tel'
							name='phone'
							value={phone}
							placeholder='Phone'
							required
							onChange={(e) => handleChange(e)}
						/>

						<select
							name='role'
							value={role}
							id='role'
							className='role'
							onChange={(e) => handleChange(e)}
							required
						>
							<option value=''>Choose Role</option>
							<option value='scheduler'>Scheduler</option>
							<option value='runner'>Runner</option>
							<option value='tailor'>Tailor</option>
							<option value='manager'>manager</option>
						</select>
					</div>
				</div>

				<div className='handler-address'>
					<input
						type='text'
						id='street'
						name='street'
						value={street}
						placeholder='Street'
						required
						onChange={(e) => handleChange(e)}
					/>
					<input
						type='text'
						id='Apt#'
						name='apt'
						value={apt}
						placeholder='Apt#'
						onChange={(e) => handleChange(e)}
					/>
					<input
						type='text'
						id='city'
						name='city'
						value={city}
						placeholder='City'
						required
						onChange={(e) => handleChange(e)}
					/>
					<input
						type='text'
						id='state'
						name='state'
						value={state}
						placeholder='State'
						required
						onChange={(e) => handleChange(e)}
					/>
					<input
						type='text'
						id='zip'
						name='zip'
						value={zip}
						placeholder='Zip'
						onChange={(e) => handleChange(e)}
					/>
					<input
						type='text'
						id='country'
						name='country'
						value={country}
						placeholder='Country'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<button type='submit' className='btn-signup'>
					{' '}
					Submit
				</button>
			</form>
		</section>
	);
};

UpdateHandler.propTypes = {
	setAlert: PropTypes.func.isRequired,
	updateHandlerProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, {
	setAlert,
	updateHandlerProfile,
	getCurrentProfile,
})(withRouter(UpdateHandler));
