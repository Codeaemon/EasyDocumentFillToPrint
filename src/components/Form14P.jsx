import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Form14PPDF from './Form14Preview';
import { Button } from '@material-ui/core'


class Form14P extends Component {
    constructor(props){
        super(props);
        this.state={
            enrollmentNo:"",
            name:"",
            SWDname:"",
            permanentAddress:"",
            temporaryAddress:"",
            dob:"",
            classOfVehicle:"",
            dateOfEnroll:"",
            LLRno:"",
            LLRexpiry:"",
            courseComplition:"",
            dateOfPassing:"",

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
                            <div style={{flex:"1",overflow:"auto",padding:"16px"}}>
                                <p style={{padding:"16px",margin:0,fontSize:"20px"}}>Form-14P</p>
                                <Divider style={{marginLeft:"16px",marginRight:"16px"}}/>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Enrollment No" onChange={(e)=>this.handleChange(e,"enrollmentNo")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Name" onChange={(e)=>this.handleChange(e,"name")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required size="small" style={{margin:"16px",width:"100%"}} id="standard-required" label="Son/Wife/Daughter of" onChange={(e)=>this.handleChange(e,"SWDname")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Permanent Address" onChange={(e)=>this.handleChange(e,"permanentAddress")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required size="small" style={{margin:"16px",width:"100%"}} id="standard-required" label="Temporary Address" onChange={(e)=>this.handleChange(e,"temporaryAddress")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Date Of Birth" onChange={(e)=>this.handleChange(e,"dob")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required size="small" style={{margin:"16px",width:"100%"}} id="standard-required" label="Class Of Vehicle" onChange={(e)=>this.handleChange(e,"classOfVehicle")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Date Of Enrollment" onChange={(e)=>this.handleChange(e,"dateOfEnroll")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required size="small" style={{margin:"16px",width:"100%"}} id="standard-required" label="LLR No" onChange={(e)=>this.handleChange(e,"LLRno")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="LLR Expiry Date" onChange={(e)=>this.handleChange(e,"LLRexpiry")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required size="small" style={{margin:"16px",width:"100%"}} id="standard-required" label="Course Complition" onChange={(e)=>this.handleChange(e,"courseComplition")}/>
                                </div>
                                <div style={{display:"flex"}}>
                                    <TextField required style={{margin:"16px",width:"100%"}} id="standard-required" label="Date of Passing" onChange={(e)=>this.handleChange(e,"dateOfPassing")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex:"2",background:"gray"}}>
                        <div style={{display:"flex",flexDirection:"column",background:"white",boxShadow:"0px 0px 15px rgba(0,0,0,0.6)",margin:"16px"}}>
                            <Form14PPDF properties={this.state}/>
                        </div>
                    </div>                
                </div>
            </div>
        )
    }
}

export default Form14P