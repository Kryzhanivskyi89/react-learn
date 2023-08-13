import { NavLink, useNavigate } from "react-router-dom"
import { getNewsThunk } from "../../store/news/thunk"

import { useDispatch } from "react-redux"

const Header = ({ showModal }) => {
	const navigate = useNavigate()
	const handleLogin = () => {
		navigate('/login')
	}

	const dispatch = useDispatch()

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
				<button className='btn btn-outline-success' onClick={showModal}>
					Show Modal
				</button>

				<button className='btn btn-outline-success' onClick={handleLogin}>
					Login
				</button>

				<button
					className='btn btn-outline-success'
					onClick={() => {
						dispatch(getNewsThunk())
					}}
				>
					Thunk
				</button>
			</div>
		</nav>
	)
}
	
export default Header