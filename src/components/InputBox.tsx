import Button from './Button'
import {FormEvent, useEffect, useRef} from 'react';

type InputBoxProps = {
    input:string
    onChange:(event:FormEvent<HTMLInputElement>)=>void
    onConvertSubmit:(event:FormEvent)=>void  

}

const InputBox = ({input, onChange, onConvertSubmit}:InputBoxProps) => {
    const inputRef = useRef<null | HTMLElement>(null)

    useEffect(() => {
        inputRef.current!.focus()
    }, [])

    return (
        <div className="Searchbox">
            <h3>Input:</h3>
            <form onSubmit={onConvertSubmit}>
                <input type="text" value={input} onChange={onChange} ref={inputRef as any}/>
                <button type='submit'>Convert</button>
            </form>
        </div>
    )
}

export default InputBox
