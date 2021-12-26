import React from 'react';
import Logo from '../images/avatar350.jpg';

export default function Intro() {
	return (
		<div className='bg-gradient home p-5 md:pt-28'>
			<div className='md:flex md:justify-around md:items-center'>
				<div>
					<h1 className='text-5xl text-white font-bold headline md:text-8xl'>
						Hi, I'm Lisa Cee.
					</h1>

					<p className='text-white text-2xl headline-small'>
						And I like to make things better.
					</p>
				</div>
				<div className=''>
					<img
						className='mx-auto mt-4 rounded-full'
						src={Logo}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}
