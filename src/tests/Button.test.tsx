import renderer, { ReactTestRenderer} from 'react-test-renderer'
import Button from '../components/Button'

describe('Button', () => {
    const buttonProps = {
        className: "Button", 
        children:"Convert", 
        disabled: false, 
        onClick:jest.fn()
    }

    it('renders all properties', () => {
        const component = renderer.create(<Button {...buttonProps} />)

        expect(component.root.findByType('button').props.children).toEqual(
            'Convert'
        )

        expect(component.root.findByType('button').props.className).toEqual(
            "Button active"
        )

        expect(component.root.findByType('button').props.disabled).toBe(
            false
        )
    })

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Button {...buttonProps} />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
