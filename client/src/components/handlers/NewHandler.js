import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const NewHandler = ({ setAlert, register }) => {
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
		password: '',
		password2: '',
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
		password,
		password2,
		avatar,
	} = formDatas;

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

		if (password !== password2) {
			setAlert('Password do not match!', 'danger');
		} else {
			//console.log('pics = ', formDatas.avatar);
			/* 	const formData = new FormData();
			formData.append('file', pics); */

			//console.log('formData =', formDatas.avatar);
			register({
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
				password,
				avatar,
			});

			setFormDatas({
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
				password: '',
				password2: '',
				avatar: '',
			});
		}
	};

	return (
		<section className='new-handler'>
			<h2 className='header-2'>New Handler</h2>

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

						<input
							type='password'
							id='password'
							name='password'
							value={password}
							placeholder='Password'
							minLength='6'
							onChange={(e) => handleChange(e)}
						/>

						<input
							type='password'
							id='password2'
							name='password2'
							value={password2}
							placeholder='Confirm Password'
							minLength='6'
							onChange={(e) => handleChange(e)}
						/>
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

				<input type='submit' className='btn-signup' />
			</form>
		</section>
	);
};

NewHandler.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(NewHandler);
