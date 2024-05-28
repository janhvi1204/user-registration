import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);



  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    useEffect(() => {
    fetchData();
  }, []);

  console.log(data,'data')
  return (
    <div className='grid_container'>
        {
            data?.map((item)=><div className='grid_box'>
                <p style={{fontSize:"20px", fontWeight:'600'}}>{item.title}</p>
                <p>{item.body}</p>
            </div>)
        }
      {/* {data?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))} */}
    </div>
  );
};

export default MyComponent;
