import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

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
