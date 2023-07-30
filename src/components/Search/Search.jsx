import { Component } from "react";

class Search extends Component {
    state = { 
        value: '',

    } 
    
    handleChange = ({ target: {value} }) => {   
        this.setState({value})      /* передаємо отримані значення інпута у стейт */
    }

    // handleChange = (e) => {   
    //     this.setState({ value: e.target.value})      /* передаємо отримані значення інпута у стейт */
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.value)
        console.log(this.state)

    }

    render() { 
        return (
            <>
				<form
					className='d-flex mt-2'
					role='search'
					onSubmit={this.handleSubmit}
				>
					<input
						className='form-control me-2 '
						type='search'
						placeholder='Search'
						aria-label='Search'
						onChange={this.handleChange}
						value={this.state.value}
					/>
					<button className='btn btn-outline-success' type='submit'>
						Search
					</button>
				</form>
			</>
        );
    }
}
 
export default Search;