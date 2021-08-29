import Button from './Button'
import {ChangeEvent, useEffect, useRef} from 'react';

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
            <h3>Input:</h3>
            <input type="text" value={input} onChange={onChange} ref={inputRef as any}/>
            <Button className='button' disabled={!validInput} onClick={() => onConvert(input)}>
                Convert
            </Button>
        </div>
    )
}

export default Search
