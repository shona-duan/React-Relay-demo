import React from 'react';
import '../App.css';

class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'relay'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      // alert('输入的内容为: ' + this.state.value);
      event.preventDefault();
      const data = this.state.value
      this.props.onChange(data);
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            输入:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default InputForm;