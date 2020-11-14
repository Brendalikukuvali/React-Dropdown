import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      body: "",
      title: '',
      name:""
    }
  }

 async getOptions(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.body,
      "label" : d.title,
      

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({body:e.value, title:e.label, name:e.name})
  }

  componentDidMount(){
      this.getOptions()
      
  
  }
  render() {
    console.log(this.state.selectOptions)
    return (
      <div className="anne">
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    <p className="ann">You have selected <strong>{this.state.title}</strong> whose body is <strong>{this.state.body}</strong></p>
      </div >
    )
  }
}
