import * as actions from './actions.js';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import nock from 'nock';
import fetch from "isomorphic-fetch";
import { applyMiddleware, createStore } from 'redux';

describe('Sync Action', () => {
  it(' GetData Test', () => {
    const payload = 'Load Data'
    const expectedAction = {
      type: "GET_DATA",
      payload
    }
    expect(actions.getData(payload)).toEqual(expectedAction)
  })
})

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('Fetch mock array', () => {
    nock('http://dummy.com/')
      .get('/results')
      .reply(200, { payload: { results: ['Hello'] } })

    const payload = {results: ['Hello']}
    const payloade = 'Load Data'
    const expectedAction = [  
      {
        type: 'GET_STARSHIPNAME',
        payload
      }
    ]

    const store = mockStore({ results: [] })

      expect(actions.getStarshipname(payload)).toEqual(expectedAction)

      //  expect(actions.getStarships = () => {
      //    return actions.getStarshipname(json.payload)
      //  }).toEqual(expectedAction)

    // return dispatch(actions.fetchTodos()).then(() => {
    //   // return of async actions
    //   expect(actions.getStarshipname(payload)).toEqual(expectedActions)
    // })
  })

})
