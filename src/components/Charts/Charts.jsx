// import React ,{useState,useEffect} from 'react'
import React from 'react'

import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import { AccordionDetails } from '@material-ui/core';


import styles from './Charts.module.css';

function Charts({data,country}) {
    // const[dailyData,setDailyData] = useState({});

    // useEffect(()=>{
    //     const fetchApi = async ()=>{
    //         setDailyData(await fetchDailyData());
    //     }

    //     console.log(dailyData)
    //     fetchApi();
    // }, []);

    // const lineChart = (
    //     dailyData.lenth
    //     ?(
    //     <Line 
    //         data={{
    //             labels: '',
    //             datasets: [{},{}]
    //         }}
    //     />) : null
    // );



// const Charts = ({data,country}) =>{

    console.log(data,"uygh");
    const barChart = ( 
        data.confirmed 
        ? (
            <Bar 
                data={{
                    labels: ['Infected','Recovered',"Deaths"],
                    datasets:[{
                        label: 'pepole',
                        backgroundColor:[
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                    ],
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                }]

                }}
            option={{
                lehend: {display: false},
                title: {display: true, text:`Current state in ${country}`}
            }}
            />
        ):null
    )
    return (
        <div style={{maxWidth:"1000px"}}>
            { barChart}
            {/* {lineChart} */}
       </div>
    )
}

export {Charts};
