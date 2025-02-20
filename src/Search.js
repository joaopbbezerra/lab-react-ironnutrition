import React from "react"

class Search extends React.Component{

    state = {
        word: ""
    }

    wordChange = (event) =>{
        let {name, value, type} = event.target

        this.setState({
            [name]: value,
        })
        this.props.filterFood(value)
    }

    
    render(){
        const {word} = this.state
        return(
                <input type="text" name="word" onChange={this.wordChange} value={word}/>
            
        )
    }
}


export default Search