import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import React, {useState} from 'react';
import '../Expenses/Expenses.css'
import ExpensesFilter from "../NewExpense/ExpensesFilter";
function Expenses(props){

  const [filteredYear, setFilterYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }
    return (
      <div>   
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date = {props.expenses[0].date}
        />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date = {props.expenses[1].date}
        />
       <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date = {props.expenses[2].date}
        />
       <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date = {props.expenses[3].date}
      />
      </Card>
      </div>
    );
} 

export default Expenses;