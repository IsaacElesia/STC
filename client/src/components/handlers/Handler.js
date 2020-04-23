import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Handler = ({
	getCurrentProfile,
	auth: { handler },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<section class='handler scrollbar'>
			<div class='handler-details'>
				<img
					src='/img/handlers/a419485d-7106-41a8-857b-6d45906c71f7.jpg'
					alt=''
				/>

				<h3 class='header-3'>Hi, {handler && handler.name}</h3>
				{profile !== null ? (
					<Fragment>has</Fragment>
				) : (
					<Fragment>
						<p>You haven't add your info yet. Please add your info.</p>
						<Link to='/home/newhandler' className='btn-new'>
							{' '}
							Add info
						</Link>
					</Fragment>
				)}
				<p>
					<span class='title-span'>ID:</span> e34-77885-yu8
				</p>
				<p>
					<span class='title-span'>Role:</span> Tailor
				</p>
				<p>
					<span class='title-span'>Tel:</span> 214-582-7677
				</p>
				<p>
					<span class='title-span'>Email:</span> lizy@yahoo.com
				</p>

				<table class='address'>
					<caption>Address</caption>
					<thead>
						<tr>
							<th colSpan='2'>Street</th>
							<th>#Apt</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan='2'>230 Kinzy Dr</td>
							<td>Suite 12</td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th>City</th>
							<th>State</th>
							<th>Zip</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Huston</td>
							<td>Texas</td>
							<td>78004</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

Handler.prototypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Handler);
