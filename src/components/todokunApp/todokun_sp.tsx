import React, { useState } from 'react';

const spetial = "トドくんは魚を手に入れた"

const TodoKun: React.FC = () => {
    const [get, setGet] = useState(false);
  return (
    <div>
      <div>{spetial}</div>
    </div>
  );
};

export default TodoKun;