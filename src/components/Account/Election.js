import React from 'react';
import { connect, useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Container, Divider } from '@material-ui/core';

import Details from './Details';

const Election = (props) => {
  const { expense, savings, salary, election } = props;
  const user = useSelector(selectUser);
  const localUser = JSON.parse(localStorage.getItem('user'));

  const details = [
    {
      label: 'Your Election',
      type: 'number',
      decimalScale: 0,
      suffix: '%',
      value: `${election}`,
    },
    {
      label: 'Your Salary',
      type: 'number',
      decimalScale: 2,
      prefix: '$',
      value: `${salary}`,
    },
    {
      label: 'Your Expense',
      type: 'number',
      decimalScale: 2,
      prefix: '$',
      value: `${expense}`,
    },
    {
      label: 'Your Savings',
      type: 'number',
      decimalScale: 2,
      prefix: '$',
      value: `${savings}`,
    },
  ];

  const handleName = () => {
    if (user.firstName) return user.firstName;
    if (localUser) return localUser.firstName;
    return '';
  };

  return (
    <div className='election_container'>
      <Container maxWidth='lg'>
        <h1>{`Thank you, ${handleName()}`}</h1>
        <Divider />
        <div className='election_content'>
          <Details fields={details} />
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({
  election: budget.election,
  salary: budget.salary,
  savings: budget.savings,
  expense: budget.expense,
});

export default connect(mapStateToProps, null)(Election);
