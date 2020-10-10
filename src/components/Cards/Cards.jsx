import React from 'react'
import {Card , CardContent, Typography, Grid} from "@material-ui/core"
    

import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

 
function Cards({data : {confirmed, recovered, deaths, lastUpdate}}){
    if (!confirmed) {
        return 'loading';
    }
    // console.log(deaths);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}  xs={12} md={3} className={cx( styles.card,styles.infected)}>
                    <CardContent>
                        {/* <Typography color="textSecondary" gutterButton>INFECTED</Typography> */}
                        <Typography varaint="h5">
                            <CountUp  
                            start={0}
                            end={confirmed.value}
                            duration={10}
                            seperator={","}
                            />                  
                        </Typography>
                            <Typography color="textSecondary"> REAL DATE: {new Date (lastUpdate).toDateString()}</Typography>
                        <Typography varaint="h5">NUMBER OF ACTIVE CASE IN CORONA   </Typography>
                    </CardContent>

                </Grid>
                
                <Grid item component={Card}  xs={12} md={3} className={cx( styles.card,styles.recovered)}>
                
                    <CardContent>
                        {/* <Typography color="textSecondary" gutterButton>RECOVERED</Typography> */}
                        <Typography varaint="h5">
                            <CountUp  
                            start={0}
                            end={recovered.value}
                            duration={10}
                            seperator={","}
                            />                  
                        </Typography>
                        <Typography color="textSecondary"> REAL DATE: {new Date (lastUpdate).toDateString()}</Typography>
                        <Typography varaint="h5">NUMBER OF RECOVERED CASE IN CORONA   </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card}  xs={12} md={3} className={cx( styles.card,styles.deaths)}>
                
                    <CardContent>
                        {/* <Typography color="textSecondary" gutterButton>DEATH</Typography> */}
                        <Typography varaint="h5">
                            <CountUp  
                            start={0}
                            end={deaths.value}
                            duration={10}
                            seperator={","}
                            />                  
                        </Typography>
                        <Typography color="textSecondary"> REAL DATE: {new Date (lastUpdate).toDateString()}</Typography>
                        <Typography varaint="h5">NUMBER OF DEATH IN CORONA   </Typography>
                    </CardContent>

                </Grid>
            </Grid>

        </div>
    )
}

export  {Cards};
