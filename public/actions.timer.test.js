import test from 'ava';

import * as actions from './actions';
import * as effects from './effects';

test('can complete a timer', t => {
  const websocket = {};
  const documentElement = {};
  const Notification = {};
  const initialState = {
    isOwner: true,
    allowNotification: true,
    allowSound: false,
    timerStartedAt: Date.now(),
    timerDuration: 1,
    websocket,
  };

  const [state, effect] = actions.Completed(initialState, {
    isEndOfTurn: true,
    documentElement,
    Notification,
  });

  t.deepEqual(state, {
    isOwner: true,
    allowNotification: true,
    allowSound: false,
    timerStartedAt: null,
    timerDuration: 0,
    websocket,
  });

  t.deepEqual(effect, [
    effects.CompleteTimer({
      websocket,
    }),
    effects.andThen({
      action: actions.EndTurn,
      props: {
        documentElement,
        Notification,
      },
    }),
    effects.andThen({
      action: actions.CycleMob,
      props: {},
    }),
  ]);
});

test('can pause the timer', t => {
  const originalWebsocket = {};

  const expectedTimerDuration = 1000;
  const now = Date.now();
  const originalTimerStartedAt = now - expectedTimerDuration;
  const originalCurrentTime = now - 5;

  const initialState = {
    websocket: originalWebsocket,
    timerStartedAt: originalTimerStartedAt,
    actionTime: originalCurrentTime,
    timerDuration: 2000,
  };

  const [state, effect] = actions.PauseTimer(initialState, now);

  t.deepEqual(state, {
    websocket: originalWebsocket,
    timerStartedAt: null,
    actionTime: now,
    timerDuration: expectedTimerDuration,
  });

  t.deepEqual(
    effect,
    effects.PauseTimer({
      websocket: originalWebsocket,
      timerDuration: expectedTimerDuration,
    }),
  );
});

test('can resume the timer', t => {
  const now = Date.now();
  const beforeNow = now - 100000;
  const websocket = {};

  const initialState = {
    websocket,
    timerStartedAt: beforeNow,
    actionTime: now,
    timerDuration: 1000000,
  };

  const [state, effect] = actions.ResumeTimer(initialState, now);

  t.deepEqual(state, {
    websocket,
    timerStartedAt: now,
    actionTime: now,
    timerDuration: 1000000,
  });

  t.deepEqual(
    effect,
    effects.StartTimer({
      websocket,
      timerDuration: 1000000,
    }),
  );
});

test('can start the timer', t => {
  const now = Date.now();
  const websocket = {};
  const timerDuration = 10000;

  const initialState = {
    websocket,
    settings: {
      duration: timerDuration,
    },
  };

  const [state, effect] = actions.StartTimer(initialState, {
    timerStartedAt: now,
    timerDuration: initialState.settings.duration,
  });

  t.deepEqual(state, {
    websocket,
    timerStartedAt: now,
    actionTime: now,
    timerDuration,
    settings: {
      duration: timerDuration,
    },
  });

  t.deepEqual(
    effect,
    effects.StartTimer({
      websocket,
      timerDuration,
    }),
  );
});
