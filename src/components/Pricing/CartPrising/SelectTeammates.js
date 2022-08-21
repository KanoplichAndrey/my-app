import React, { useEffect, useState } from 'react';
import { getSelectTeammatesBase } from '../../../servis/servis';
const SelectTeammates = () => {
//   const SelectTeammates = ['User 1', 'User 2', 'User 3'];

  const [value, setValue] = useState(' ');
  const [SelectTeammates, setSelectTeammates] = useState([]);
  useEffect(() => {
    const servissetSelectTeammates = getSelectTeammatesBase();
    setSelectTeammates(servissetSelectTeammates);
  }, []);
  const options = SelectTeammates.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
      <>
         <select
            value={value}
            onChange={(event) => setValue(event.target.value)}
         >
            {options}
         </select>
      </>
  );
};

export default SelectTeammates;
