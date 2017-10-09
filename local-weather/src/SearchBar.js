import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`
const Button = styled.button`margin-top: 10px;`

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.getCityName(this.state.inputValue)
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className="form-control form-control-sm"
            type="text"
            placeholder="London, UK"
            required
          />
          <Button className="btn btn-outline-primary form-control form-control-sm">Search</Button>
        </Form>
      </div>
    )
  }
}

export default SearchBar
