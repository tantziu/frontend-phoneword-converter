import App from '../App'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

describe('App', () => {
  it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(<App/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
