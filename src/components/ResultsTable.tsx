type ResultsTableProps = {
    words: string[]
}

const ResultsTable = ({words}:ResultsTableProps) => {
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

export default ResultsTable