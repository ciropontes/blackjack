import React from "react";
import { connect } from "react-redux";
import HistoryList from "../components/HistoryList";

export const Playlist = (props) => {
    return <HistoryList
        games={props.games}
    />
}

const mapStateToProps = store => ({
    games: store.blackjackState.games
});


export default connect(mapStateToProps)(Playlist);