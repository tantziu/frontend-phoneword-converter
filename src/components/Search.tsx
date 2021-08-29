import Button from './Button'
import {ChangeEvent, useEffect, useRef} from 'react';
import '../styles/Search.scss'

type SearchProps = {
    input:string
    validInput: boolean
    onChange:(event:ChangeEvent) => void
    onConvert:(inputNumber:string) => void 
}

const Search = ({input, validInput, onChange, onConvert}:SearchProps) => {
    const inputRef = useRef<null | HTMLElement>(null)

    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus()
    }, [])

    return (
        <div className="Search">
            <input 
                className="searchInput"
                type="text"
                placeholder="Type a number..."
                value={input}
                onChange={onChange}
                ref={inputRef as any}
            />
            <Button className='Button' disabled={!validInput} onClick={() => onConvert(input)}>
                Convert
            </Button>
        </div>
    )
}

export default Search
