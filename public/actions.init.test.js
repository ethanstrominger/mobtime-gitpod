import test from 'ava';
import * as actions from './actions';

test('creates a state with timer-related state', t => {
  const state = actions.Init({}, 'test');
  t.snapshot(state);
});

test('check expected values', t => {
  const state = actions.Init({}, 'test');
  t.assert(state.allowSound);
});
