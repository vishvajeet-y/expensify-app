import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'


// const now=moment()
// console.log(now.format('MMM Do YYYY'))

export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
       this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            ammount:props.expense?props.expense.ammount.toString():'',
            createAt:props.expense?moment(props.expense.createAt):moment(),
            calenderFocused:false,
            error:''
        };
    }

    onDescriptionChange=(e)=>{
              this.setState(()=>({description:e.target.value}))
    }

    onNoteChange=(e)=>{
        this.setState(()=>({note:e.target.value}))
    }

    onAmmountChange=(e)=>{
        const ammount=e.target.value
        if(!ammount||ammount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState(()=>({ammount}))
        }
    }
 
     onDateChange=(createAt)=>{
         if(createAt)
         this.setState(()=>({createAt}))
     }

     onFocusChange=({focused})=>{
         this.setState(()=>({calenderFocused:focused}))
     }
     
     onSubmit=(e)=>{
         e.preventDefault()

         if(!this.state.description||!this.state.ammount){
            this.setState(()=>({error:'Please provide Description and Ammount'}))
         }
         else{
            this.setState(()=>({error:''}))
             this.props.onSubmit1({
                 description:this.state.description,
                 ammount:parseFloat(this.state.ammount,10),
                 createAt:this.state.createAt.valueOf(),
                 note:this.state.note
             })
         }
     }

    render(){
        return  <form className="form" onSubmit={this.onSubmit}>
            {this.state.error&&<p className="form__error">{this.state.error}</p>}
            <input type='text' placeholder='Description' className="text-input"
            autoFocus value={this.state.description} 
               onChange={this.onDescriptionChange}/>
            <input type='text' placeholder='Ammount' value={this.state.ammount}
            className="text-input"  onChange={this.onAmmountChange}
                />
                <SingleDatePicker
                date={this.state.createAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                block
                displayFormat='DD/MM/YYYY'
                />
            <textarea placeholder='Add a note for your expense (optional)'value={this.state.note}
           className="textarea" onChange={this.onNoteChange}
            ></textarea>
            <div>
            <button className="button">Save Expense</button>
            </div>
            
            </form>
           
        
    }
}