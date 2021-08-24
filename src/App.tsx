import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [number, setInputNumber] = useState("")
  const [result, setResult] = useState([])

  const onNumberChange = (e:React.FormEvent<HTMLInputElement>) =>
    setInputNumber((e.target as HTMLInputElement).value)

  const onConvertClicked = () => {
    const words = convert(number)
    setResult(words) 
  }

  return (
    <div className="App">
      <div className="page">
        <div>
          <h3>Input:</h3>
          <input type="text" value={number} onChange={onNumberChange}/>
          <button type="submit" onClick={onConvertClicked}>Convert</button>
          <div className="results">
            <h3>Words:</h3>
            <ul>
              {result.map(result => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;

export const letters:{} = {
  0: ['0'],
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

const convert = (number:string) => {
  const digits = String(number).split('').map(Number)
  let lists = []
  for (let digit of digits) {
      lists.push(letters[digit])
  }

  let words = convertToWords(lists)
  return words
}


const cartesianProduct = (a, b) => {
  let result = []
  
  for (let i in a) {
    for (let j in b) {
      let word = [...a[i]]
      word.push(b[j])
      result.push(word)
    }
  }
  return result
}

const convertToWords = (lists) => {
  if (lists.length === 1)
    return lists.flat()

  let result = lists[0]
  for (let i=1; i<lists.length; i++) {
    result = cartesianProduct(result, lists[i])
  }
  return result
}
