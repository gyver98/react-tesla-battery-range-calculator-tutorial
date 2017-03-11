import appReducer from './teslaRangeApp';

const initialState =  {
  carstats:[
    {miles:246, model:"60"},
    {miles:250, model:"60D"},
    {miles:297, model:"75"},
    {miles:306, model:"75D"},
    {miles:336, model:"90D"},
    {miles:376, model:"P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
}

describe('test reducer', () => {
  it('should handle initial stat', () => {
    expect(
      appReducer(undefined, {})
    ).toEqual(initialState)
  })
})

