import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function ExpenseTracker() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 20, category: "Utilities" },
        { id: 3, description: "ccc", amount: 50, category: "Groceries" },
        { id: 4, description: "ddd", amount: 5, category: "Groceries" }
    ]);

    const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

    return (
        <div className="container">
            <ExpenseForm
                onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])}
            ></ExpenseForm>
            <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}></ExpenseFilter>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
            ></ExpenseList>
        </div>
    );
}

export default ExpenseTracker;
