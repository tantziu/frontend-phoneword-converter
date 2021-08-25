import ResultsTable from '../components/ResultsTable'
import InputBox from '../components/InputBox'
import React, {FormEvent, useState} from 'react';
import {convert} from '../api/client'

const Home = () => {
    const [results, setResults] = useState([])
    const [inputNumber, setInputNumber] = useState("")

    const onConvert = (event:FormEvent) => {
        event.preventDefault();
        const words:any = convert(inputNumber)
        setResults(words) 
    }   

    const onInputChange = (event:FormEvent<HTMLInputElement>) => {
        // setInputNumber((event.target as HTMLInputElement).value)
        setInputNumber(event.currentTarget.value)
    }

    return (
        <div className="HomePage">
            <InputBox input={inputNumber} onChange={onInputChange} onConvertSubmit={onConvert}/>
            <ResultsTable words={results}/>
        </div>
    )
}

export default Home
