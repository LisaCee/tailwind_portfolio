import React from 'react';
import Logo from '../images/avatar350.jpg';

export default function Intro() {
	return (

		<div className="container mx-auto">

			<div className="sm:grid-cols-12 md:grid-cols-6">
				<div
				className="w-full text-center bg-cyan-500"
				>
					<div className="md:flex sm:px-5 xl:px-10">
						<div className="flex justify-center">
							<img className="rounded-3xl my-center p-2" src={Logo} alt="" />
						</div>

						<div className="m-auto">
						<h1
						className="-mx-1 tracking-wide text-4xl text-gray-800 font-bold pb-5"
						>
						Hi. I'm Lisa Canini
						</h1>

						<p className="text-lg text-gray-800 mb-5"> I am... <br /> Adaptive | Inquisitive | Compassionate</p>

						<p className="px-5 text-gray-800text-md">Passionate full stack developer, creating websites that remove
						barriers to access and make information available to everyone.</p>
						</div>

					</div>
				</div>
			</div>

		</div>
	)
}