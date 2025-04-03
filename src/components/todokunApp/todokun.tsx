import React, { useState } from 'react';

const jotai = [
    { id:0, text: "トドくんはマインドフルネスに目覚めている"},
    { id:1, text: "トドくんはだらだらしている"},
    { id:2, text: "トドくんは曲芸をしている"},
    { id:3, text: "トドくんは泳いでいる"},
    { id:4, text: "トドくんは寝ている"},
    { id:5, text: "トドくんは筋トレをしている"},
    { id:6, text: "トドくんは勉強をしている"},
    { id:7, text: "トドくんは人生という道に迷った"},
]

const TodoKun: React.FC = () => {
    const [id, setId] = useState(0);
    const generateId = () => {
        setId(Math.floor(Math.random() * jotai.length));

    };
    const j = jotai[Math.floor(id)];
    const todokun = j.text;
  return (
    <div>
      <div>{todokun}</div>
      <button onClick={generateId}>トドくん</button>
    </div>
  );
};

export default TodoKun;