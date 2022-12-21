import React, { Component } from "react";

export default class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            searchString: ''
        }
    }

    onSearchChange = (event) => {
        const search_string = event.target.value

        this.setState(() => {
            return (
                {
                    search_string: search_string
                }
            )
        })
    }

  render() {
    const { search_string } = this.state
    const { pokemon } = this.props
    const { onSearchChange } = this

    const filteredPokemon = pokemon.filter((pk) => {
        return (
            pk.name.includes(search_string)
        )
    })

    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Pokemon"
          onChange={onSearchChange}
        />
        {filteredPokemon.map((pk) => {
            return (
                <h1 key={pk.name}>{pk.name}</h1>
            )
        })}
      </div>
    );
  }
}