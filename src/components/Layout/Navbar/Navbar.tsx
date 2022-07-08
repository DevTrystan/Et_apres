import React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	const links = [
		{ id: '1', name: 'Profile', uri: '/me' },
		{ id: '2', name: 'Autre(test)', uri: '/other' },
	] as const;
	// modifier les classes quand on ferra l'apparence de la navbar mais conserver le tableau de links et le composant Link de react router dom
	// le composant Link permet de faire des redirection interne sans refresh la page
	// le a refresh, moins efficace sur une one page application
	return (
		<div className="flex items-center h-16 bg-green-main">
			<div>
				<Link
					to="/"
					className="px-4 py-2 text-white bg-green-600 border rounded-lg hover:bg-green-700"
				>
					Todo futures Logo
				</Link>
			</div>
			<ul className="flex justify-around w-1/3">
				<p>for dev : lien navbar &gt; affichage temporaire</p>
				{links.map((link) => (
					<li key={link.id}>
						<Link
							to={`${link.uri}`}
							className="px-4 py-2 text-white bg-blue-500 border rounded-lg hover:bg-indigo-700"
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
