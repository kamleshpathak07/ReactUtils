import React, { useState } from 'react';

function FindUnique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}   
const UniqueArrayComponent = () => {
    const [inputArray, setInputArray] = useState('');
    const [uniqueArray, setUniqueArray] = useState([]);
    const handleInputChange = (e) => {
        setInputArray(e.target.value);
    };

    const handleFindUnique = () => {
        const arr = inputArray.split(',').map(Number);
        setUniqueArray(FindUnique(arr));
    };
    return (
        <div>
            <h1>Find Unique Elements</h1>
            <input
                type="text"
                value={inputArray}
                onChange={handleInputChange}
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={handleFindUnique}>Find Unique</button>
            <div>
                <h2>Unique Elements:</h2>
                <p>{uniqueArray.join(', ')}</p>
            </div>
        </div>
    );
};

export default UniqueArrayComponent;
function FindEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}   
function FindOdd(arr) {
  return arr.filter((item) => item % 2 !== 0);
}   
function FindPrime(arr) {
  return arr.filter((item) => {
    for (let i = 2; i < item; i++) {
      if (item % i === 0) return false;
    }
    return item > 1;
  });
}
function FindSum(arr) {
    return arr.reduce((sum, item) => sum + item, 0);
}
