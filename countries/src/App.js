import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Component/Button';
import Card from './Component/Card';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/france')
      const country = await result.json()
      this.setState({
        name: country[0].name,
        capital: country[0].capital,
        flag: country[0].flag,
        population: country[0].population,
        region: country[0].region,
      })
    } catch (error) {
      console.error(error)
    }
  }

  // async getCountry(country) { ...
  getCountry = async (country) => {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      // const result = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      const countries = await result.json()
      this.setState({
        name: countries[0].name,
        capital: countries[0].capital,
        flag: countries[0].flag,
        population: countries[0].population,
        region: countries[0].region,
      })
    } catch (error) {
      console.error(error)

    }
    console.log(this.state);
  }


  render() {
    return <div>
      <Button onClick={() => this.getCountry('france')}>France</Button>
      <Button onClick={() => this.getCountry('sri lanka')}>Sri Lanka</Button>
      <Button onClick={() => this.getCountry('brazil')}>Brazil</Button>
      <Button onClick={() => this.getCountry('croatia')}>Croatia</Button>

      {/* <br />Name : {this.state.name}
      <br />Capital : {this.state.capital}
      <br />Flag : {this.state.flag}
      <br />Population : {this.state.population}
      <br />Region : {this.state.region} */}

      <Card countryList={this.state}>
      </Card>
    </div>
  }
}

export default App