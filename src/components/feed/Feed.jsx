import React from 'react';
import Login from '../header/Login';
import { testData } from '../../utils/mockData';
import Card from '../shared components/Card';

const Feed = () => {
  
  const testValues = testData.map((item) => item.title)
  return (
    <div className='grid grid-cols-4 gap-6 ml-6 m-8 '>
      {testData.map((item, key) => <Card value={item} key={key} />)}
         
    </div>
  )
}

export default Feed


