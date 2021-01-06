import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation() {
    return (
        <div className = 'navigation'>
            <Link to="/enter_marks">
                <button variant="outlined">
                    Enter marks
                </button>
            </Link>

            <Link to="/view_leaderboard">
                <button variant="outlined">
                    Leaderboard
                </button>
            </Link>
        </div>
    );
}

export default withRouter(Navigation);