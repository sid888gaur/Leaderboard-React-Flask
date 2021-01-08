import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation() {
    return (
        <div className = 'navigation'>
            <Link to="/enterMarks">
                <button variant="outlined">
                    Enter marks
                </button>
            </Link>

            <Link to="/viewLeaderboard">
                <button variant="outlined">
                    Leaderboard
                </button>
            </Link>
        </div>
    );
}

export default withRouter(Navigation);