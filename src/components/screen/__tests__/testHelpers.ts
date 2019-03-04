export const AppContext = {
  state: {
    user: {
      displayName: '',
      age: 0,
      job: '',
    },
  },
  dispatch: jest.fn(),
};

describe('testHelpers', () => {
  it('should pass test', () => {
    expect(AppContext).toBeInstanceOf(Object);
  });
});
