import React from 'react'
import Navbar from '../components/Navbar'
import SearchBox from '../components/SearchBox'
import Modal from '../components/Modal'

// Web page was displaying, and it compiles without errors, but none of the components will appear now and I cannot figure out why

const Home = async () => {
        this.state = {
          'pokemon': []
        }

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        const data = await response.json()
        this.setState(() => {
          return (
          {
            'pokemon' : data['results']
          }
        )
      })
    
    return (
          <div className='App'>
            <div>
              <Navbar/>
            </div>
            <div>
              <Modal/>
            </div>
            <div>
              <SearchBox pokemon={this.state.pokemon}/>
            </div>
          </div>
        );
      }

export default Home