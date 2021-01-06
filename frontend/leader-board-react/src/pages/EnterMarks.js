import React from 'react';

class EnterMarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rollno: null,
            name: '',
            pmarks: 0,
            cmarks: 0,
            mmarks: 0,
            total: 0,
            percent: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert('Submiting information');
        event.preventDefault();
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
                    <p>{Number(this.state.pmarks)+Number(this.state.cmarks)+Number(this.state.mmarks)}</p>
                </label>
                <br />

                <label>
                    Percent:
                    <p>{Number(this.state.total)}</p>
                </label>
                <br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default EnterMarks;