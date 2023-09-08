import React from 'react';

const ExerciseItem = ({exercise}) => {
  return (
    <div>
      {exercise.name} - {exercise.weight}
    </div>
  )
}

export default ExerciseItem;