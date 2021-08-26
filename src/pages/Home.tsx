import ResultsTable from '../components/ResultsTable'
import InputBox from '../components/InputBox'
import {ChangeEvent, useState} from 'react';
import {convert} from '../api/client'

const Home = () => {
    const [results, setResults] = useState([])
    const [inputNumber, setInputNumber] = useState("")

    const onConvert = (inputNumber:string) => {
        console.log("onConvert")
        // event.preventDefault();
        const words:any = convert(inputNumber)
        setResults(words) 
    }   

    const onInputChange = (event:ChangeEvent) => {
        // setInputNumber((event.target as HTMLInputElement).value)
        const target= event.target as HTMLInputElement
        if (target)
            setInputNumber(target.value)
    }
   
    return (
        <div className="HomePage">
            <InputBox input={inputNumber} onChange={onInputChange} onConvertSubmit={onConvert}/>
            <ResultsTable words={results}/>
        </div>
    )
}

export default Home
