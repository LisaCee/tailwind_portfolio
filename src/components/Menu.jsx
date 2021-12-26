import React from 'react';

export default function Nav({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className='flex items-center justify-between flex-wrap bg-gray-900 p-6'>
				<div className='container mx-auto'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<a
							className='text-xl font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white'
							href='/'
						>
							Lisa Canini
						</a>
						<button
							className='text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-white rounded bg-white block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							{/* <i className="fas fa-bars"></i> */}
							<svg
								className='fill-current h-3 w-3'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<title>Menu</title>
								<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
							</svg>
						</button>
					</div>
					{/* Actual nav items start here */}
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'
								>
									<i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>Share</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'
								>
									<i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>Tweet</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'
								>
									<i className='fab fa-pinterest text-lg leading-lg text-white opacity-75'></i>
									<span className='ml-2'>Pin</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
