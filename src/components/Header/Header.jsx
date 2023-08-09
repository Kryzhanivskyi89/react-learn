import { NavLink } from "react-router-dom"

const Header = ({showModal}) => {
	return (
		<nav className= 'navbar bg-dark mb-3 navbar-expand-lg'>
			<div className = 'container-fluid'>
				<span className= 'navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<div className=' navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav flex-direction-row'>
					<NavLink
							className='nav-item text-white'
							aria-current='page'
							to='/'>
							Home
					</NavLink>
					
					<NavLink
							className='nav-item text-white'
							to='/news'>
							News
					</NavLink>
					<NavLink
							className='nav-item text-white'
							to='/todo'>
							To do
					</NavLink>
					
				</div>
				</div>
				<button onClick={showModal}>Show Modal</button>
			</div>
		</nav>
	)
}
	
export default Header