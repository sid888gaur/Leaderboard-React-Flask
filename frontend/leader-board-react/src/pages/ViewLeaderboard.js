import React from "react";

class ViewLeaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch("/api/viewLeaderboard")
      .then(res => {
          this.setState({posts: res})
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => (
            <p>
              <li>Roll number: {post.db_col_1}</li>
              <li>Name: {post.db_col_2}</li>
              <li>Physics: {post.db_col_3}</li>
              <li>Chemistry: {post.db_col_4}</li>
              <li>Maths: {post.db_col_5}</li>
              <li>Total: {post.db_col_6}</li>
              <li>Percent: {post.db_col_7}</li>
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewLeaderboard;