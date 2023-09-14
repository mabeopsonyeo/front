import React from 'react';
import { useParams } from 'react-router-dom';

export const Results = () => {
  let { id } = useParams();
  console.log(id);
  return <div>Results</div>;
};
