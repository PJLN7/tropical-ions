import React from 'react';
import NumberFormat from 'react-number-format';

import './styles.css';

const Details = (props) => {
  const { fields } = props;

  return (
    <div className='details_container'>
      <ul>
        {fields.map((field, idx) => (
          <li key={idx}>
            <p>{field.label}</p>
            {field.ref === 'input' ? (
              <NumberFormat
                value={field.value}
                thousandSeparator={true}
                prefix={field.prefix || null}
                onValueChange={(values) => field.helperFn(values)}
              />
            ) : (
              <NumberFormat
                value={field.value}
                displayType={'text'}
                thousandSeparator={true}
                suffix={field.suffix || null}
                prefix={field.prefix || null}
                decimalScale={field.decimalScale}
                fixedDecimalScale={true}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
