import Results from '../components/Results'
import Search from '../components/Search'
import {ChangeEvent, useState} from 'react';
import Error from '../components/Error'
import {fetchWords} from '../api/client'

const Home = () => {
    const [results, setResults] = useState([])
    const [inputNumber, setInputNumber] = useState("")
    const [validNumber, setValidNumber] = useState(false)
    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)

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
            validateInput(target.value)
            setInputNumber(target.value)
    }

    const validateInput = (value:string) => {
        const regexp = /^[0-9]+$/
        regexp.test(value)
            ? setValidNumber(true)
            : setValidNumber(false)
    }

    return (
        <div className="HomePage">
            <Search input={inputNumber} validInput={validNumber} onChange={onInputChange} onConvert={onConvert}/>
            {validNumber
                ? <Results words={results}/>
                : <Error />
            }
        </div>
    )
}

export default Home

export {
    Results
}
