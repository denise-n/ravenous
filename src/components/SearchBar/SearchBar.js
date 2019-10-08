import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            "Best Match" : 'best_match',
            "Highest Rated" : 'rating',
            "Most Reviewed" : 'review_count'
        }
    }

    // getSortByClass = (sortByOption) => {
    //     return (this.state.sortBy === sortByOption 
    //     ? 'active'
    //     : ''
    //     )
    // }

    // handleSortByChange = (sortByOption) => {
    //     this.setState({
    //         sortBy: sortByOption
    //     })
    // }

    handleTermChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleSearch = (event) => {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        event.preventDefault()
    }

    // renderSortByOptions = () => {
    //     return Object.keys(this.sortByOptions).map(sortByOption => {
    //         let sortByOptionValue = this.sortByOptions[sortByOption];
    //         return  <li 
    //                     key={sortByOptionValue}
    //                     className={this.getSortByClass(sortByOptionValue)}
    //                     onClick={this.handleSortByChange}
    //                 >
    //                         {sortByOption}
    //                 </li>
    //         })  
    //     }

    render() {
        return (
            <div className="SearchBar">
                {/* <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div> */}
                <form onSubmit={this.handleSearch}>
                    <div className="SearchBar-fields">
                        <input 
                            placeholder="Search Businesses" 
                            type="text"
                            onChange={this.handleTermChange}
                            required
                        />
                        <input 
                            placeholder="Where?" 
                            onChange={this.handleLocationChange}
                            required
                        />
                    </div>
                    
                    <div className="SearchBar-submit">
                        <button>Let's Go</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar