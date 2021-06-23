import React, { Component } from 'react'



class Card extends Component {
    render() {
        return (


            <div className="card" style={{ width: '18rem', margin: 'auto' }}>
                <img className="card-img-top" src={this.props.countryList.flag} alt="Flag" style={{ padding: 50 }} />
                <h2 >Country : {this.props.countryList.name}</h2>
                <h4>Capital : {this.props.countryList.capital}</h4>
                <div>
                    <i className="bi bi-globe2" />
                    Region : {this.props.countryList.region}
                </div>
                <div>
                    <i className="bi-people-fill" />
                    Population : {this.props.countryList.population}
                </div>
            </div>















        )
    }


}
export default Card