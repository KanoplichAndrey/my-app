import React, { useState } from 'react';

const SelectTeammates = (props) => {
  const SelectTeammates = ['User 1', 'User 2', 'User 3'];
  const [value, setValue] = useState(' ');
  const options = SelectTeammates.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
      <div>
         <select
            value={value}
            onChange={(event) => setValue(event.target.value)}
         >
            {options}
         </select>
      </div>
  );
};

export default SelectTeammates;
