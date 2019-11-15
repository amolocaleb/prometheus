import  React from 'react';
import ReactDOM from 'react-dom'
 const Nav = ()   =>  {

    return(
        <nav className="navbar navbar-expand-md navbar-light  m-0 p-0 custom-nav">
            <div className="container-fluid">
                <a className="navbar-brand absolute-logo" href="/">
                    <img src={`/storage/logo.png`} alt="" srcSet="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left Side Of Navbar */}
                    <ul className="navbar-nav mr-auto">

                    </ul>

                    {/* Right Side Of Navbar  */}
                    <ul className="navbar-nav ml-auto">
                         {/* Authentication Links */}
                        <li className="nav-item">
                            <a href="" className="text-gray">Home<i></i> </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="text-gray">About Us</a>
                        </li>
                       <li className="nav-item">
                           <a href="" className="text-gray">Cart<i className="la la-shopping-cart text-white"></i></a>
                       </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 

ReactDOM.render(<Nav />,document.querySelector('.navigation'))

// export default Nav;