import React from 'react';

export default function Nav() {
	const [navOpen, setNavOpen] = React.useState(false);

	return (
		<>
			<nav className='mx-auto lg:px-28 flex items-center justify-between flex-wrap bg-violet-900 p-6'>
				<div className='container mx-auto'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<span className='font-semibold text-2xl text-white align-baseline'>
							<a href='/'>Lisa Canini</a>
							<p>Full Stack Developer</p>
						</span>

						<button
							className='px-3 py-2 border rounded text-white text-xl hover:text-pink-700 hover:bg-white block lg:hidden'
							type='button'
							onClick={() => setNavOpen(!navOpen)}
						>
							<i class='fas fa-angle-down fa-md'>
								<title>Menu</title>
							</i>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navOpen ? ' flex' : ' hidden')
						}
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<a
									href='/About.jsx'
									className='block mt-4 mr-4 text-gray-200 font-semibold hover:text-white lg:inline-block lg:mt-0 hover:text-pink-700'
								>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#responsive-header'
									className='block mt-4 mr-4 text-gray-200 font-semibold hover:text-white lg:inline-block lg:mt-0 hover:text-pink-700'
								>
									Projects
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#skills'
									className='block mt-4 mr-4 text-gray-200 font-semibold hover:text-white lg:inline-block lg:mt-0 hover:text-pink-700'
								>
									Skills
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='https://lisaceedev.wordpress.com/'
									className='block mt-4 mr-4 text-gray-200 font-semibold hover:text-white lg:inline-block lg:mt-0 hover:text-pink-700'
								>
									Blog
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
