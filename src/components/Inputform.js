import React from 'react'
import '../App.css'

class InputForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    // alert('输入的内容为: ' + this.state.value);
    event.preventDefault()
    const data = this.state.value
    this.props.onChange(data)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type='text'
            value={this.state.value}
            placeholder="请输入查询内容"
            style={{ width: 150, marginRight: 16 }}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default InputForm
