import React,{component} from 'react'

import {Cards,Charts,CountryPicker} from './components/index'
import "./App.module.css";
import  { fetchData} from './api';
import image from './images/covid.png';
// import styles from './../Cards.module.css';






class App extends React.Component {
    state = {
        data : {},
        country : '',
    }

    async componentDidMount() {
        const fetchedData  = await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData , country: country})
        // console.log( country );
        // console.log( fetchedData);
    }

    render(){
         
        return (
            <div >
                <div style={{ display:"flex",justifyContent:"center",alignItems:"center" }}>
                <img   className="image" src={image} alt='COVID 19'/>                
                </div>
                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                {/* <div style={{ display:"flex",justifyContent:"center",alignItems:"center" }}> */}

                <Charts  data={this.state.data} country={this.state.coumtry}/>
                {/* </div> */}
            </div>
        )

    }
}

export default App

