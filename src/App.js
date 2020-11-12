import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
      //   fetch('https://jsonplaceholder.typicode.com/posts/1')
      //   .then(res => res.json())
      //   .then((data) => {
      //     this.setState({ contacts: data })
      //   })
      //   .catch(console.log)
      // }
  
  }
  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    <p className="anne">You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
      </div >
    )
  }
}
