import React, { Component } from 'react'
import { Divider } from '@material-ui/core';

class Header extends Component {

    render() {
        return (
            <div style={{display:"flex",background:"white",justifyContent:"center"}}>
                <div style={{margin:"16px",fontWeight:"bold"}}>
                    <div style={{textAlign:"right",fontSize:"12px"}}>Cell : 9440210893</div>
                    <div style={{color:"#4988a8",textAlign:"center",fontSize:"32px"}}>GAFOOR DRIVING SCHOOL</div>
                    <div style={{color:"#4988a8",textAlign:"center",fontSize:"12px"}}>
                        Regd.No : 3/2015 Approved by the A.P.Govt <br/>
                        D.No : 3-5-57, MITTAMALLESWARA HIGH SCHOOL <br/>
                        LOYOLA DEGREE COLLEGE ROAD, PULIVENDULA, Y.S.R DISTRICT(KADAPA) 
                    </div>
                </div>
            </div>
        )
    }
}
export default Header
