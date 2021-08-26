import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Home, {Results} from '../pages/Home'

describe('Home', () => {
    it('render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Home />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('has a valid snapshot', () => {
        const component = renderer.create(<Home/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})

// describe('Search', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<Search/>, div)
//     ReactDOM.unmountComponentAtNode(div)
//   })
// })
describe('Results', () => {
    const props = {words: ['ad', 'ae', 'af']}

    it('render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Results {...props}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Results {...props} />
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})