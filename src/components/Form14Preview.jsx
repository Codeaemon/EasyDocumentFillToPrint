import React, { Component } from 'react'
import { Divider, Button } from '@material-ui/core';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Header from './Header';

class Form14Preview extends Component {
    render() {
        return (
            <div style={{display:"flex"}}>
                <div style={{margin:"60px",border:"1px solid gray",borderStyle:"dashed",width:"100%"}}>
                    <div style={{margin:"16px",fontWeight:"bold"}}>
                        <div style={{textAlign:"right",fontSize:"12px"}}>Cell : 9440210893</div>
                        <div style={{color:"#4988a8",textAlign:"center",fontSize:"27px"}}>GAFOOR DRIVING SCHOOL</div>
                        <div style={{color:"#4988a8",textAlign:"center",fontSize:"7px"}}>
                            Regd.No : 3/2015 Approved by the A.P.Govt <br/>
                            D.No : 3-5-57, MITTAMALLESWARA HIGH SCHOOL <br/>
                            LOYOLA DEGREE COLLEGE ROAD, PULIVENDULA, Y.S.R DISTRICT(KADAPA) 
                        </div>
                    </div>
                    <Divider style={{margin:"16px"}}/>
                    <div style={{display:"flex",margin:"16px",fontSize:"14px"}}>
                        <div style={{flex:"1",textAlign:"left"}}>SL.No.06</div>
                        <div style={{flex:"1",textAlign:"right"}}>Lorry No.AP05/U2411</div>
                    </div>
                    <div style={{margin:"16px",textAlign:"justify",lineHeight:"normal"}}>
                        <div style={{textAlign:"center",fontWeight:"bold"}}>Form-14P</div>
                        <div style={{textAlign:"center"}}>See rule 29 (A) and (B)</div>
                        <div style={{textAlign:"center"}}>
                            REGISTER SHOWING THE ENROLLMENT OF TRAINEES IN DRIVING SCHOOL
                        </div>
                        <div style={{textAlign:"center"}}>
                           <u>ESTABLISHMENT</u>
                        </div>
                        <div>
                            <table className="profileTable" style={{width:"100%"}}>
                                <tbody>
                                    <tr>
                                        <td className="Sno">1.</td>
                                        <td className="head">Enrollment Number</td>
                                        <td className="data"> : <b>{this.props.properties.enrollmentNo}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">2.</td>
                                        <td className="head">Name of the trainee <br/> with his photograph</td>
                                        <td className="data"> : <b>{this.props.properties.name}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">3.</td>
                                        <td className="head">Son/Wife/Daughter of </td>
                                        <td className="data"> : <b>{this.props.properties.SWDname}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">4.</td>
                                        <td className="head">Address</td>
                                    </tr>
                                    <tr>
                                        <td className="Sno"></td>
                                        <td className="head">1 )Permanent Address</td>
                                        <td className="data"> : <b>{this.props.properties.permanentAddress}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno"></td>
                                        <td className="head">2 )Temporary Address</td>
                                        <td className="data"> : <b>{this.props.properties.temporaryAddress}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">5.</td>
                                        <td className="head">Date Of Birth </td>
                                        <td className="data"> : <b>{this.props.properties.dob}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">6.</td>
                                        <td className="head">Class of vehicle for which the training imported</td>
                                        <td className="data"> : <b>{this.props.properties.classOfVehicle}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">7.</td>
                                        <td className="head">Date Of Enrollment</td>
                                        <td className="data"> : <b>{this.props.properties.dateOfEnroll}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">8.</td>
                                        <td className="head">Learner Licence No and Date of Expiry</td>
                                        <td className="data"> : <b><u>{this.props.properties.LLRno}</u> valid upto <br/><u>{this.props.properties.LLRexpiry}</u></b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">9.</td>
                                        <td className="head">Date Of Complition Of Course</td>
                                        <td className="data"> : <b>{this.props.properties.courseComplition}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">10.</td>
                                        <td className="head">Date Of Passing Of Test Of Competence To Drive</td>
                                        <td className="data"> : <b>{this.props.properties.dateOfPassing}</b></td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">11.</td>
                                        <td className="head">D.L.No and date of issued and the L.A which issued the licence</td>
                                        <td className="data"> : </td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">12.</td>
                                        <td className="head">Remarks</td>
                                        <td className="data"> : </td>
                                    </tr>
                                    <tr>
                                        <td className="Sno">13.</td>
                                        <td className="head">Signature of licence holder instructor</td>
                                        <td className="data"> : </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Form14PPDF = (props) => {
    const componentRef = useRef();
    return (
      <div>
        <Form14Preview properties={props.properties} ref={componentRef}/>
        <ReactToPrint
          trigger={() => <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"85px"}}><Button variant="contained" size="medium" color="primary">Print this</Button></div>}
          content={() => componentRef.current}
        />
      </div>
    );
  };


export default Form14PPDF
