import React from 'react';
import axios from 'axios';

class EnterMarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rollno: null,
            name: '',
            pmarks: null,
            cmarks: null,
            mmarks: null,
            total: null,
            percent: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert('Submiting information');
        event.preventDefault();

        this.state.total = Number(this.state.pmarks)+Number(this.state.cmarks)+Number(this.state.mmarks);
        this.state.percent = Number(this.state.total)/3;

        var data = this.state
		var postUrl = "/api/enterMarks";
		axios.post(postUrl, data, {
		})
			.then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err);
			})

    }

    handleChange(event){
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam] : val
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Roll Number:
                    <input
                        name = "rollno"
                        type = "number"
                        value = {this.state.rollno}
                        onChange = {this.handleChange} />
                </label>
                <br />

                <label>
                    Name:
                    <input
                        name = "name"
                        type = "text"
                        value = {this.state.name}
                        onChange = {this.handleChange} />
                </label>
                <br />

                <label>
                    Physics:
                    <input
                        name = "pmarks"
                        type = "number"
                        value = {this.state.pmarks}
                        onChange = {this.handleChange} />
                </label>
                <br />

                <label>
                    Chemistry:
                    <input
                        name = "cmarks"
                        type = "number"
                        value = {this.state.cmarks}
                        onChange = {this.handleChange} />
                </label>
                <br />

                <label>
                    Maths:
                    <input
                        name = "mmarks"
                        type = "number"
                        value = {this.state.mmarks}
                        onChange = {this.handleChange} />
                </label>
                <br />

                <label>
                    Total:
                    <input 
                        name = "total"
                        type = "number"
                        value = {Number(this.state.pmarks)+Number(this.state.cmarks)+Number(this.state.mmarks)} 
                        readOnly = {true} />
                </label>
                <br />

                <label>
                    Percent:
                    <input 
                        name = "percent"
                        type = "number"
                        value = {(Number(this.state.pmarks)+Number(this.state.cmarks)+Number(this.state.mmarks))/3} 
                        readOnly = {true}/>
                </label>
                <br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default EnterMarks;