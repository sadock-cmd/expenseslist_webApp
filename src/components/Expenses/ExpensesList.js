import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2>No Expenses Found</h2>
    }

    return (
        <div>
            <ul>
                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}

            </ul>
        </div>
    )
}

export default ExpensesList