import React from 'react';
import '../App.css';
// import UserComponent from './UserComponent';

class QueryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }  
  
    handleSubmit(event) {
      alert('查询的内容为: ' + this.state.value);
      event.preventDefault();
      // const data = this.state.value;
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="vertical">
          <label>
            片段查询:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default QueryForm;