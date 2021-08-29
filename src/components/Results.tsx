type ResultsProps = {
    words: string[]
}

const Results = ({words}:ResultsProps) => {
    return (
        <div className="table">
            {words.length > 0 ? <h3>Words:</h3> : null}
            <ul>
              {words.map(result => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
    )
}

export default Results
