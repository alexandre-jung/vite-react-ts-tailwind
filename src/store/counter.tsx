import { legacy_createStore as createStore, Reducer } from 'redux';
import { Provider as ReactReduxProvider, useSelector } from 'react-redux';
import { produce } from 'immer';
import { ReactNode } from 'react';
import { isDevMode } from '@/utils';

const initialState = {
  counter: -1,
};

const actions = {
  SET: 'counter/set',
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
} as const;

interface ActionSet {
  type: typeof actions.SET;
  payload: number;
}

interface ActionIncrement {
  type: typeof actions.INCREMENT;
}

interface ActionDecrement {
  type: typeof actions.DECREMENT;
}

export const actionSet = (newValue: number): ActionSet => ({
  type: actions.SET,
  payload: newValue,
});
export const actionIncrement = () => ({
  type: actions.INCREMENT,
});
export const actionDecrement = () => ({
  type: actions.DECREMENT,
});

export const selectCounter = (state: typeof initialState) => state.counter;

type Action = ActionSet | ActionIncrement | ActionDecrement;

const reducer: Reducer<typeof initialState | undefined, Action> = (
  state,
  action
) =>
  produce(state, (draft) => {
    if (!draft) {
      return initialState;
    }

    switch (action.type) {
      case actions.SET:
        draft.counter = action.payload;
        break;

      case actions.INCREMENT:
        draft.counter++;
        break;

      case actions.DECREMENT:
        draft.counter--;
        break;

      default:
        return state;
    }
  });

const reduxDevtools = isDevMode()
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined;

const store = createStore(reducer, initialState, reduxDevtools);

export const Provider = ({ children }: { children: ReactNode }) => (
  <ReactReduxProvider store={store}>{children}</ReactReduxProvider>
);

export const useCounterValue = () =>
  useSelector<typeof initialState, typeof initialState['counter']>(
    (state) => state.counter
  );
