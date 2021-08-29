import '../styles/Home.scss'
import Error from '../components/Error'
import Results from '../components/Results'
import Search from '../components/Search'
import {ChangeEvent, useState} from 'react';
import {fetchAllWords, fetchRealWords} from '../api/client'

const Home = () => {
    const [results, setResults] = useState([])
    const [inputNumber, setInputNumber] = useState("")
    const [validNumber, setValidNumber] = useState(false)
    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)

    const onConvert = (inputNumber:string) => {
        fetchAllWords(inputNumber)
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

    const onFilter = () => {
        fetchRealWords(inputNumber)
            .then(words => {
                setResults(words)
            })
    }

    const validateInput = (value:string) => {
        const regexp = /^[0-9]+$/
        regexp.test(value)
            ? setValidNumber(true)
            : setValidNumber(false)
    }

    return (
        <div className="Home">
            <header>
                <h1>Phoneword Convert</h1>
            </header>

            <div className="content">
                <Search input={inputNumber} validInput={validNumber} onChange={onInputChange} onConvert={onConvert}/>
                {validNumber
                    ? (results.length > 0) ? <Results words={results} onFilter={onFilter}/> : null
                    : inputNumber ? <Error /> : null
                }
            </div>
        </div>
    )
}

export default Home

export {
    Results,
    Search
}
