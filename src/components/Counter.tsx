import React, {useState} from 'react';
import './Counter.scss'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            {count}
            <button className='counter' onClick={increment}>click</button>
        </div>
    );
};

export default Counter;