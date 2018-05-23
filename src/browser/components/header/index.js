import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FETCH_USER } from '../../shared/constants';

import Payment from '../payment';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (<li><a href='/auth/google'>Log in with Google</a></li>);
            default:
                return [
                    <li key='1'><Payment /></li>,
                    <li key='2' style={{margin: '0px 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key='3'><a href='/auth/logout'>Log out</a></li>
                ];
        }
    }

    render() {
        const to = this.props.auth ? '/surveys' : '/';
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to={to} className='brand-logo'>Emaily</Link>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
