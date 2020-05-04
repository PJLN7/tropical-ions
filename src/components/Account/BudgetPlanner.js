import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSalary,
  setExpense,
  selectBudget,
} from '../../features/budgetSlice';
import { selectUser } from '../../features/userSlice';
import { Container, Divider, Slider } from '@material-ui/core';

import Details from './Details';

import './styles.css';

const BudgetPlanner = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const localUser = JSON.parse(localStorage.getItem('user'));
  const budget = useSelector(selectBudget);
  const [salary, adjustSalary] = useState(0);
  const [sliderVal, setSlider] = useState(budget.election);

  useEffect(() => {
    adjustSalary(budget.salary);
  }, []);

  const valueText = (value) => {
    return `${value}%`;
  };

  const handleSalary = (e) => {
    const salary = e.value || 0;
    const numbersOnly = /^[0-9.]+$/;
    if (!numbersOnly.test(salary)) return;
    adjustSalary(salary);
    dispatch(setSalary(salary));
  };

  const handleChange = (e, v) => {
    const percent = v / 100;
    setSlider(v);
    dispatch(setExpense(percent));
  };

  const handleName = () => {
    if (user.firstName) return user.firstName;
    else if (localUser) return localUser.firstName;
    else return '';
  };

  const details = [
    {
      label: 'Your Salary',
      ref: 'input',
      type: 'number',
      prefix: '$',
      decimalScale: 2,
      value: salary,
      placeholder: 0,
      helperFn: handleSalary,
    },
    {
      label: 'Your Expense',
      type: 'number',
      decimalScale: 2,
      prefix: '$',
      value: `$${budget.expense}`,
    },
    {
      label: 'Your Savings',
      type: 'number',
      decimalScale: 2,
      prefix: '$',
      value: `$${budget.savings}`,
    },
  ];

  return (
    <div className='budget_planner_container'>
      <Container maxWidth='lg'>
        <h1>{`Welcome to your monthly budget, ${handleName()}`}</h1>
        <Divider />
        <div className='budget_planner_content'>
          <div className='budget_planner_main'>
            <h2>{`${budget.election}%`}</h2>
            <Slider
              value={sliderVal || 0}
              getAriaValueText={valueText}
              aria-labelledby='discrete-slider'
              valueLabelDisplay='auto'
              step={1}
              marks
              min={0}
              max={30}
              onChange={handleChange}
            />
            <div className='budget_planner_details'>
              <Details fields={details} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BudgetPlanner;
