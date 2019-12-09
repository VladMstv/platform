import { createEntityAdapter, EntityAdapter } from '../src';
import { BookModel } from './fixtures/book';

describe('Entity State', () => {
  let adapter: EntityAdapter<BookModel>;

  beforeEach(() => {
    adapter = createEntityAdapter({
      selectId: (book: BookModel) => book.id,
    });
  });

  it('should let you get the initial state', () => {
    const initialState = adapter.getInitialState();

    expect(initialState).toEqual({
      ids: [],
      entities: {},
      total: 0,
    });
  });

  it('should let you provide additional initial state properties', () => {
    const additionalProperties = { isHydrated: true };

    const initialState = adapter.getInitialState(additionalProperties);

    expect(initialState).toEqual({
      ...additionalProperties,
      ids: [],
      entities: {},
      total: 0,
    });
  });
});
