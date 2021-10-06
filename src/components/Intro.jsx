import React from 'react';
import Logo from '../images/avatar350.jpg';

export default function Intro() {
	return (
		<div className="container mt-5 mx-auto px-2">
      
      <div className="sm:flex sm:grid-cols-12">
        <div
          className="flex-1 text-center bg-gray-400 px-5 py-5 m-2 rounded"
        >
          <div className="lg:flex lg:items-center">
            <div className="lg:flex-shrink-0">
              <img className="rounded-2xl lg:w-64" src={Logo} alt="" />
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <h1
                className="uppercase tracking-wide text-3xl text-primary font-bold"
              >
                Hi. I'm Lisa Cee.
              </h1>
              <p> Adaptive | Inquisitive | Compassionate</p>
			  <p>Passionate full stack developer, creating websites that remove
              barriers to access and make information available to everyone.</p>
            </div>
          </div>
        </div>
		</div>
		</div>
		
	)
}