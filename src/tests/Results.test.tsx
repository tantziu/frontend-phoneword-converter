import renderer, { ReactTestRenderer} from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Results from '../components/Results'

describe('Results', () => {
    const words= ['adg',
        'adh',
        'adi',
        'aeg',
        'aeh',
        'aei',
        'afg',
        'afh',
        'afi'
        ]
    

    it('renders nine items', () => {
        const component = renderer.create(<Results words={words} onFilter={jest.fn()}/>)

        expect(component.root.findAllByType('li').length).toEqual(9)
    })

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Results words={words} onFilter={jest.fn()}/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
