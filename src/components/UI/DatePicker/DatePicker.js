import React, { Component } from "react"
import DatePickerC from "react-date-picker"
import moment from 'moment'
import './DatePicker.scss'



export default class DatePicker extends Component {
                 state = {
                   date: moment().add('days', 7)._d
                 }

                 onChange = date => this.setState({ date })

                 render() {
                 
                   return (
                     <div>
                       <DatePickerC
                         onChange={this.onChange}
                         value={this.state.date}
                         format='dd MM yyyy'
                         minDate={moment().add('days', 7)._d}
                       />
                     </div>
                   )
                 }
               }
