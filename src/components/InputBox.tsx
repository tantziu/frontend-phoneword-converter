import Button from './Button'
import {ChangeEvent, useEffect, useRef} from 'react';

type InputBoxProps = {
    input:string
    onChange:(event:ChangeEvent) => void
    onConvertSubmit:(inputNumber:string) => void 
}

const InputBox = ({input, onChange, onConvertSubmit}:InputBoxProps) => {
    const inputRef = useRef<null | HTMLElement>(null)

    useEffect(() => {
        inputRef.current!.focus()
    }, [])

    return (
        <div className="Searchbox">
            <h3>Input:</h3>
            <input type="text" value={input} onChange={onChange} ref={inputRef as any}/>
            <Button className='button' onClick={() => onConvertSubmit(input)}>Convert</Button>
        </div>
    )
}

export default InputBox
