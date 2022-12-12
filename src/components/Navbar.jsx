import React from 'react'

const Navbar = () => {
  return (
	<>
	<header>
		<nav className="navbar">
			<ul className="navbar-ul">
				<li className="navbar-item">
					<a className="">SO FUNCTIONIERT'S</a>
				</li>
				<li className="navbar-item">
					<a className="">SONDERANGEBOTE</a>
				</li>
				<li className="navbar-item active">
					<i className="icon-user"></i>
					<a className="">MEIN BEREICH</a>
					{/* <ul className="navbar-dropdown">
						<li className="navbar-dropdown-item">Dropdown Item 1</li>
						<li className="navbar-dropdown-item">Dropdown Item 2</li>
						<li className="navbar-dropdown-item">Dropdown Item 3</li>
					</ul> */}
					<i className="icon-dropdown"></i>

				</li>
			</ul>
		</nav>
	</header>
	</>
  
        
  )
}

export default Navbar