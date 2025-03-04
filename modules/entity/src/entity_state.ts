import { EntityState } from './models';

export function getInitialEntityState<V>(): EntityState<V> {
  return {
    ids: [],
    entities: {},
    total: 0,
  };
}

export function createInitialStateFactory<V>() {
  function getInitialState(): EntityState<V>;
  function getInitialState<S extends object>(
    additionalState: S
  ): EntityState<V> & S;
  function getInitialState(additionalState: any = {}): any {
    return Object.assign(getInitialEntityState(), additionalState);
  }

  return { getInitialState };
}
