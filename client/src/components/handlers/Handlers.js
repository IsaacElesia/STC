import React from 'react';
import { Link } from 'react-router-dom';

const Handlers = () => {
	return (
		// <!-- ------- Handlers--------- -->
		<section className='handlers scrollbar'>
			<div className='sub-header'>
				<h2 className='header-2'>Handlers</h2>
				<div className='btn'>
					<Link to='/home/newhandler' className='btn-new'>
						New
					</Link>
				</div>
			</div>

			<div className='card'>
				<a href='#' className='card-item'>
					<div className='card-details'>
						<img
							className='handler-img'
							src='/img/products/2bf6e0cd-36d2-4a2d-87d4-ff76c50daf8f.jpg'
							alt=''
						/>
						<h3 className='header-3'>kingsley okafor</h3>
						<p>
							<span className='title-span'>Role:</span> Scheduler
						</p>
						<p>
							<span className='title-span'>Tel:</span> 214-582-7677
						</p>
						<p>
							<span className='title-span'>Email:</span> kins@yahoo.com
						</p>
					</div>
				</a>
			</div>

			<div className='card'>
				<a href='#' className='card-item'>
					<div className='card-details'>
						<img
							className='handler-img'
							src='/img/products/RayDarten-20200207-0437_1_2400x.webp'
							alt=''
						/>
						<h3 className='header-3'>Liz anabel</h3>
						<p>
							<span className='title-span'>Role:</span> Tailor
						</p>
						<p>
							<span className='title-span'>Tel:</span> 214-582-7677
						</p>
						<p>
							<span className='title-span'>Email:</span> lizy@yahoo.com
						</p>
					</div>
				</a>
			</div>

			<div className='card'>
				<a href='#' className='card-item'>
					<div className='card-details'>
						<img
							className='handler-img'
							src='/img/products/RayDarten-20190702-0298_2400x.jpg'
							alt=''
						/>
						<h3 className='header-3'>rebacer chukuwu</h3>
						<p>
							<span className='title-span'>Role:</span> Runner
						</p>
						<p>
							<span className='title-span'>Tel:</span> 214-582-7677
						</p>
						<p>
							<span className='title-span'>Email:</span> rubebe@yahoo.com
						</p>
					</div>
				</a>
			</div>

			<div className='card'>
				<a href='#' className='card-item'>
					<div className='card-details'>
						<img
							className='handler-img'
							src='/img/products/men-s-tops-meka-men-s-african-print-collared-henley-yellow-green-kente-1_1000x.webp'
							alt=''
						/>
						<h3 className='header-3'>Henly rosly</h3>
						<p>
							<span className='title-span'>Role:</span> Manager
						</p>
						<p>
							<span className='title-span'>Tel:</span> 214-582-7677
						</p>
						<p>
							<span className='title-span'>Email:</span> hensy@yahoo.com
						</p>
					</div>
				</a>
			</div>

			<div className='card'>
				<a href='#' className='card-item'>
					<div className='card-details'>
						<img
							className='handler-img'
							src='/img/products/a419485d-7106-41a8-857b-6d45906c71f7.jpg'
							alt=''
						/>
						<h3 className='header-3'>Linder Mclean</h3>
						<p>
							<span className='title-span'>Role:</span> Runner
						</p>
						<p>
							<span className='title-span'>Tel:</span> 214-582-7677
						</p>
						<p>
							<span className='title-span'>Email:</span> lindmc@gmail.com
						</p>
					</div>
				</a>
			</div>

			<div className='card'>
				<a href='#' className='card-item'>
					<div className='card-details'>
						<img
							className='handler-img'
							src='/img/products/876cc14c-ab00-4dd4-ac7d-067692d57652.jpg'
							alt=''
						/>
						<h3 className='header-3'>Mark Anthony</h3>
						<p>
							<span className='title-span'>Role:</span> Tailor
						</p>
						<p>
							<span className='title-span'>Tel:</span> 719-582-7689
						</p>
						<p>
							<span className='title-span'>Email:</span> mark_anthony@yahoo.com
						</p>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Handlers;
