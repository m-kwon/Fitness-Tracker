import React from 'react';

const ProgramItem = ({program}) => {
  return (
    <div>
      {program.name} - {program.numOfWeeks} - {program.userId} - {program.created} - {program.updated}
    </div>
  )
}

export default ProgramItem;