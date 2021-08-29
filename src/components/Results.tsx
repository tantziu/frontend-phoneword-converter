import '../styles/Results.scss'
import Button from './Button'

type ResultsProps = {
    words: string[],
    onFilter: () => void
}

const Results = ({words, onFilter}:ResultsProps) => {
    return (
        <div className="Results">
          <h3>Words:</h3>
          <Button className='Button' disabled={false} onClick={() => onFilter()}>
                Filter English words
            </Button>
            <ul className="resultsList">
              {words.map(result => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
    )
}

export default Results
