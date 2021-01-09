import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import blackjackIco from '../assets/images/blackjack.png'

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <Link to="/">
                        <img className="logo" src={blackjackIco} width="150"></img>
                    </Link>
                </span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/blackjack">Jogar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history">Histórico
                                <span className="badge badge-light">{props.games.length}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
const mapStateToProps = store => ({
    games: store.blackjackState.games
});
export default connect(mapStateToProps)(Header);

