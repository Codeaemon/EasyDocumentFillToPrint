import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Form5Preview from './Form5Preview';
import Form5PDF from './Form5Preview';
import { Button } from '@material-ui/core'


export class Form5 extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:"Name",
            enrolledDate:"Enrolled Date",
            registerNo:"Register Number",
            from:"From date",
            to:"To Date"
        }
    }
    handleChange = (e,type) => {
        this.setState({
            [type]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <div style={{display:"flex"}}>
                    <div style={{flex:"1",display:"flex",background:"gray",postion:"fixed"}}>
                        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100vh",background:"white",boxShadow:"0px 0px 15px rgba(0,0,0,0.6)",margin:"16px"}}>
                            <div style={{flex:"1"}}>
                                <p style={{padding:"16px",margin:0,fontSize:"20px"}}>Form-5</p>
                                <Divider style={{marginLeft:"16px",marginRight:"16px"}}/>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Student Name" onChange={(e)=>this.handleChange(e,"studentName")}/>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Enrolled Date" onChange={(e)=>this.handleChange(e,"enrolledDate")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} type="number"id="standard-required" label="Register No." onChange={(e)=>this.handleChange(e,"registerNo")}/>
                                </div>
                            </div>
                            <div style={{flex:"1"}}>
                            <p style={{padding:"16px",margin:0,fontSize:"20px"}}>HEAVY TRANSPORT VEHICLE ONLY</p>
                                <Divider style={{marginLeft:"16px",marginRight:"16px"}}/>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <div style={{display:"flex"}}>
                                        <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="From" onChange={(e)=>this.handleChange(e,"from")}/>
                                        <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="To" onChange={(e)=>this.handleChange(e,"to")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex:"2",background:"gray"}}>
                        <div style={{display:"flex",flexDirection:"column",background:"white",boxShadow:"0px 0px 15px rgba(0,0,0,0.6)",margin:"16px"}}>
                            <Form5PDF studentName={this.state.studentName} enrolledDate={this.state.enrolledDate} registerNo={this.state.registerNo} from={this.state.from} to={this.state.to}/>
                        </div>
                    </div>                
                </div>
            </div>
        )
    }
}

export default Form5
