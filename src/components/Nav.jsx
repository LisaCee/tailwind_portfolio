import React, { useState } from 'react';

export default function Nav() {
	const [navOpen, setNavOpen] = useState(false);
	const toggle = () => setNavOpen(!navOpen);
	const hide = () => setNavOpen(false);
	const show = () => setNavOpen(true);

	const links = [
		{ text: 'Skills', link: '#' },
		{ text: 'Projects', link: '#' },
		{ text: 'Blog', link: '#' },
		{ text: 'About', link: '#' },
		{ text: 'Contact', link: '#' },
	];
	return (
		<>
			<nav className='mx-auto lg:px-28 flex items-center justify-between bg-violet-900 p-6'>
				<div className='container mx-auto'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<span className='font-semibold text-2xl text-white align-baseline'>
							<a href='/'>Lisa Canini</a>
							<p className='text-sm'>Full Stack Developer</p>
						</span>
						<button
							className='px-3 py-2 border rounded text-white text-xl hover:text-pink-700 hover:bg-white block lg:hidden'
							type='button'
							onClick={toggle}
						>
							{navOpen ? (
								<i className='fas fa-times fa-md'></i>
							) : (
								<i className='fas fa-angle-down fa-md'></i>
							)}
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow w-full items-center justify-end' +
							(navOpen ? ' flex' : ' hidden')
						}
					>
						<ul className='flex flex-col items-end lg:flex-row lg:ml-auto'>
							{links.map((item) => (
								<li key={item.text} className='nav-item'>
									<a
										href={item.link}
										onClick={toggle}
										onBlur={hide}
										onFocus={show}
										className='block mt-4 text-gray-200 font-semibold hover:text-white lg:inline-block lg:mt-0 lg:ml-4 hover:text-pink-700'
									>
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
