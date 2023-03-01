import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

    // const expenseDate= new Date(2023, 1, 27);
    // const expenseTitle= 'Car Insurance';
    // const expensePrice= 359.46;

  return (
    <Card className="expense-item">
      
      <div className='expense-item__description'>
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
