import React from 'react';
import { Link } from 'react-router-dom';
import EtApresLogo from '../../../icons/et_apres_logo.svg';

export interface NavbarProps {
	registerUrl?: string;
	loginUrl?: string;
}

const Navbar: React.FC<NavbarProps> = ({
	registerUrl = '/register',
	loginUrl = '/login',
}) => {
	const links = [
		{ id: '1', name: 'Profile', uri: '/me' },
		{ id: '2', name: 'Autre(test)', uri: '/other' },
	] as const;
	// modifier les classes quand on ferra l'apparence de la navbar mais conserver le tableau de links et le composant Link de react router dom
	// le composant Link permet de faire des redirection interne sans refresh la page
	// le a refresh, moins efficace sur une one page application
	return (
		<div className="flex items-center justify-around  border-b-2 border-black">
			{/* Logo Et Après */}
			<div>
				{/* change temporary logo with real logo */}
				<Link to="/" className="flex items-center gap-2">
					<img
						src={EtApresLogo}
						alt="Logo principal du site Et Après"
						className="w-20 h-20"
					/>

					<span>Et Après</span>
				</Link>
			</div>
			{/* navLinks */}
			<div>
				<ul className="flex gap-2">
					{links.map((link) => (
						<li className="hover:underline" key={link.id}>
							<Link to={`${link.uri}`}>{link.name}</Link>
						</li>
					))}
				</ul>
			</div>
			{/* auth Links */}
			<div className="flex items-center gap-2">
				<Link className="hover:underline" to={loginUrl}>
					Connexion
				</Link>
				<Link
					to={registerUrl}
					className="px-4 py-2 bg-green-500 rounded-full hover:bg-green-600"
				>
					Inscription
				</Link>
				{/* if Connected User */}
				<Link to="/" className="hidden">
					Déconnexion
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
