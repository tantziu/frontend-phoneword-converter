import Search from '../components/Search'
import renderer, { ReactTestRenderer } from 'react-test-renderer'

describe('Search', () => {
    const searchProps = {
        input: "567", 
        validInput: false, 
        onChange: jest.fn(),
        onConvert: jest.fn()
    }

    let component:ReactTestRenderer

    beforeEach(() => {
        component = renderer.create(<Search {...searchProps} />)
    })

    it('renders the input field with its value', () => {
        const value = component.root.findByType('input').props.value
        expect(value).toEqual('567')
    })

    it('changes the input field', () => {
        const pseudoEvent = 234

        component.root.findByType('input').props.onChange(pseudoEvent)

        expect(searchProps.onChange).toHaveBeenCalledTimes(1)
        expect(searchProps.onChange).toHaveBeenCalledWith(pseudoEvent)
    })

    it('disables the button and prevents submit', () => {
        component.update(
            <Search {...searchProps} input="" />
        )

        expect(component.root.findByType('button').props.disabled).toBeTruthy()
    })

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Search {...searchProps} />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    }) 
})
