import React, { Component } from 'react'
import { Divider, Button } from '@material-ui/core';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Header from './Header';

class Form5Preview extends Component {

    render() {
        return (
            <div style={{display:"flex"}}>
                <div style={{margin:"60px",border:"1px solid gray",borderStyle:"dashed",width:"100%"}}>
                    <Header/>
                    <Divider style={{margin:"16px"}}/>
                    <div style={{display:"flex",margin:"16px",fontSize:"14px"}}>
                        <div style={{flex:"1",textAlign:"left"}}>SL.No.06</div>
                        <div style={{flex:"1",textAlign:"right"}}>Lorry No.AP05/U2411</div>
                    </div>
                    <div style={{margin:"16px",textAlign:"justify"}}>
                        <p style={{textAlign:"center"}}>Form-5</p>
                        <p style={{textAlign:"center"}}>[See rule14(e),(1) (b) and 27(6)]</p>
                        <p>
                            This is that Sir/Smt/Kmari <b>{this.props.studentName} </b>
                            was enrolled in this School on <b>{this.props.enrolledDate}</b> and his/her name is 
                             registered at serial number <b>{this.props.registerNo}</b> In our register in Form 14 and
                             that he/her undergone course of training in driving of
                        </p>
                        <p style={{textAlign:"center"}}><b><u>HEAVY TRANSPORT VEHICLE ONLY</u></b></p>
                        <p>
                            (Mention class of vehicle) <br/>
                            According to the syllabus prescribed for a period from <b>{this.props.from} </b>
                             to <b>{this.props.to}</b> Satisfactory .I am satisfied with his/her physical fitness
                             since of respocibility.

                        </p>
                    </div>
                    <div style={{margin:"100px 150px 10px ",textAlign:"right"}}>
                        Signature
                    </div>
                    <div style={{display:"flex",height:"325px",textAlign:"center",alignItems:"center"}}>
                        <div style={{flex:"1"}}>
                            <p>
                                Oo unter Signature <br/>
                                Reginol Transport
                            </p>
                        </div>
                        <div style={{flex:"1"}}>
                            <p>
                                S.A.GAFOOR <br/>
                                Correspondent
                            </p>
                            <p>
                                L.No:3/2015 valid upto 12-07-2020 <br/>
                                ISSUED BY S.R.T.A, KADAPA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Form5PDF = (props) => {
    const componentRef = useRef();
    return (
      <div>
        <Form5Preview studentName={props.studentName} enrolledDate={props.enrolledDate} registerNo={props.registerNo} from={props.from} to={props.to} ref={componentRef} />
        <ReactToPrint
          trigger={() => <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"85px"}}><Button variant="contained" size="medium" color="primary">Print this</Button></div>}
          content={() => componentRef.current}
        />
      </div>
    );
  };


export default Form5PDF
