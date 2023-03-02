import React,{useState} from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const  ExpenseItem = (props) => {

    // const expenseDate= new Date(2023, 1, 27);
    // const expenseTitle= 'Car Insurance';
    // const expensePrice= 359.46;
  
  const [title, setTitle] = useState(props.title);

  // let title = props.title;
  const clickHandler= () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      
      <div className='expense-item__description'>
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
