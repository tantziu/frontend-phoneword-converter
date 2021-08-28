import Results from '../components/Results'
import Search from '../components/Search'
import {ChangeEvent, useState} from 'react';
import {fetchWords} from '../api/client'

const Home = () => {
    const [results, setResults] = useState([])
    const [inputNumber, setInputNumber] = useState("")

    const onConvert = (inputNumber:string) => {
        fetchWords(inputNumber)
            .then(words => {
                setResults(words)
            })
    }   

    const onInputChange = (event:ChangeEvent) => {
        // setInputNumber((event.target as HTMLInputElement).value)
        const target= event.target as HTMLInputElement
        if (target)
            setInputNumber(target.value)
    }
   
    return (
        <div className="HomePage">
            <Search input={inputNumber} onChange={onInputChange} onConvert={onConvert}/>
            <Results words={results}/>
        </div>
    )
}

export default Home

export {
    Results
}
