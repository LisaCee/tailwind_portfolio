import React from 'react';
import Logo from '../images/avatar350.jpg';

export default function Intro() {
	return (

		<div className="container mx-auto">

			<div className="sm:flex sm:grid-cols-12 md:grid-cols-6">
				<div
				className="flex-1 text-center bg-light rounded"
				>
					<div className="md:flex sm:px-5 xl:px-10">
						<div className="flex justify-center my-5">
							<img className="rounded-3xl my-center p-2" src={Logo} alt="" />
						</div>

						<div className="m-auto">
						<h1
						className="-mx-1 tracking-wide text-4xl text-primary font-bold"
						>
						Hi. I'm Lisa Canini
						</h1>

						<h2 className="text-xl mb-5">(aka Lisa Cee)</h2>

						<p className="text-lg mb-5"> Adaptive | Inquisitive | Compassionate</p>

						<p className="px-5 text-md">Passionate full stack developer, creating websites that remove
						barriers to access and make information available to everyone.</p>
						</div>

					</div>
				</div>
			</div>

		</div>
	)
}