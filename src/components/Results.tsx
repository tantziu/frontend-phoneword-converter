type ResultsProps = {
    words: string[]
}

const Results = ({words}:ResultsProps) => {
    return (
        <div className="table">
            <h3>Words:</h3>
            <ul>
              {words.map(result => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
    )
}

export default Results