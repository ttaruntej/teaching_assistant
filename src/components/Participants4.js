
import './participants.css'
import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import SweetAlert from 'react-bootstrap-sweetalert';


 class Participants6 extends Component {
    componentDidMount() {
     
    }
    constructor(props) {
      super(props);
  
      this.state = {
        alert: null
      };
    } 
  
    deleteThisGoal() {
      const getAlert = () => (
        <SweetAlert 
            
          title="DEREGISTERED" 
          onConfirm={() => this.hideAlert()}
        >
        The Student with credentials <br/> Name: {this.props.name} <br/> Roll Number: {this.props.rollno} <br/> has been deregistered from the course:CS31007
        </SweetAlert>
      );
  
      this.setState({
        alert: getAlert()
      });
    }
  
    hideAlert() {
      console.log('Hiding alert...');
      this.setState({
        alert: null
      });
    }
    
    
    
    render() {
        return (
            <React.Fragment>
              {this.state.alert}
          <tr id={this.props.name}>
        <td>{this.props.name}<small><small>({this.props.gen})</small></small></td>
            <td>{this.props.rollno}</td>
            <td><button onClick={() => {
      confirmAlert({
        title: 'PLEASE CONFIRM',
        message: 'Are you sure to DEREGISTER this Student?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              document.getElementById(this.props.name).innerHTML=("");
              this.deleteThisGoal();
            }
          },
          {
            label: 'No',
          }
        ]
      })
    }} style={{color:'red',fontWeight:'600'}}class="buttond">DEREGISTER</button></td>     
          </tr>
          
      </React.Fragment>
        )
    }
}

export default Participants6
