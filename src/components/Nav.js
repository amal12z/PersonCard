import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Nav extends Component{
    render(){
        return (
            <>
                <nav className='bg-info p-1 pt-4 mb-5'>
                    <ul className='d-flex justify-content-around'>
                        <p className='nav-item'>
                            <a href='{this.props.link}' className='nav-link'>Home</a>
                        </p>
                        { this.props.children }  {/* S : 1 */}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Nav;