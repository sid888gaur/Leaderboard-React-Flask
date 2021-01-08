import React from "react";
import axios from "axios";

class ViewLeaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { students: [] , filtered: []};
    this.onSort = this.onSort.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    axios.get("/api/viewLeaderboard")
    .then(res => {
        const data = res.data;
        data.sort((a,b) => {
            if(a[6] < b[6]){
                return -1;
            }
            if(a[6] > b[6]){
                return 1;
            }
            return 0;
        })
        this.setState({ students: data });
        this.setState({filtered: data});
    })
  }

  handleChange(e){
      let curr = [];
      let newList = [];

      if(e.target.value !== ""){
          curr = this.state.students;
          newList = curr.filter(item => {
              const lc = item.toString().toLowerCase();
              const filter = e.target.value.toString().toLowerCase();

              return lc.includes(filter);
          });
      } else{
          newList = this.state.students;
      }

      this.setState({filtered: newList});
  }

  onSort(event, sortKey){
      let vardata = this.state.filtered;
      vardata.sort((a,b) => {
          if(a[sortKey] < b[sortKey]){
              return -1;
          }
          if(a[sortKey] > b[sortKey]){
              return 1;
          }
          return 0;
      })
      this.setState({filtered: vardata})
  }

  render() {
    return (
    <div>
    <input type="text" className="input" placeholder="Search" onChange={this.handleChange}/>
    <table>
        <caption>Student Leaderboard</caption>
        <thead>
            <tr>
                <th onClick={e => this.onSort(e,0)}>Roll No.</th>
                <th onClick={e => this.onSort(e,1)}>Name</th>
                <th onClick={e => this.onSort(e,2)}>Physics</th>
                <th onClick={e => this.onSort(e,3)}>Chemistry</th>
                <th onClick={e => this.onSort(e,4)}>Maths</th>
                <th onClick={e => this.onSort(e,5)}>Total</th>
                <th onClick={e => this.onSort(e,6)}>Percent</th>
          </tr>
        </thead>
        <tbody>
            {this.state.filtered.map(student => (
            <tr>
                <td>{student[0]}</td>
                <td>{student[1]}</td>
                <td>{student[2]}</td>
                <td>{student[3]}</td>
                <td>{student[4]}</td>
                <td>{student[5]}</td>
                <td>{student[6]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default ViewLeaderboard;