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
  }
  handleChange = e => {
    this.props.onInputChange(e.target.value)
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit()
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
