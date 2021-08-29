import '../styles/Results.scss'

type ResultsProps = {
    words: string[]
}

const Results = ({words}:ResultsProps) => {
    return (
        <div className="Results">
          <h3>Words:</h3>
            <ul className="resultsList">
              {words.map(result => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
    )
}

export default Results
