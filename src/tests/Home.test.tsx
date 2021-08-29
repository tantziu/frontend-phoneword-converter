import Home from '../pages/Home'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'


describe('Home', () => {
    it('render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Home />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    const buttonProps = {
        className: "Button", 
        children:"Convert", 
        disabled: false, 
        onClick:jest.fn()
    }

    // it('succeeds fetching data with a list', () => {
    //     const words = ['wa','wb','wc','xa','xb','xc','ya','yb','yc','za','zb','zc']
    //     const component = TestRenderer.create(<Home />)
        // expect(component.root.findByType(Results).props.words).toBe(words)
    // })

    test('has a valid snapshot', () => {
        const component = TestRenderer.create(<Home/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
