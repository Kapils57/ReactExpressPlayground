import React, { useEffect, useState } from 'react'
import '../css/DataFetcher.css'

function DataFetcher() {
    const [data, setdata] = useState("");
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/kapils57')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setdata(data.login);
            setloading(false);
        }).catch((error)=>{
            alert("Error: ", error);
            setloading(false);
        });
      }, []);

    

  return (
    <div className='counter'>   
        <h4>DataFetcher</h4>
        
        <div className='display'>
            {
                loading ? (<p className='DF'>loading...</p>): (<p className='DF'>{data}</p>)
            }
            
        </div>
    </div>
  )
}

export default DataFetcher