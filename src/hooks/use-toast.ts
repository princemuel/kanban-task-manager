'use client';

import type { ToastActionElement, ToastProps } from '@/components';
import * as React from 'react';

const TOAST_LIMIT = 10;
const TOAST_EXPIRE_DISMISS_DELAY = 1000;

type ToastType = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

let count = 0;
let state: State = { toasts: [] };

const subscribers = new Set<(state: State) => void>();
const toastTimeouts = new Map<ToastType['id'], ReturnType<typeof setTimeout>>();

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'toast/remove',
      payload: toastId,
    });
  }, TOAST_EXPIRE_DISMISS_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const clearFromRemoveQueue = (toastId: string) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) clearTimeout(timeout);
};

type Toast = Omit<ToastType, 'id'>;

function toast({ duration = 3000, ...props }: Toast) {
  const id = genId();

  const update = (props: ToastType) =>
    dispatch({
      type: 'toast/update',
      payload: { ...props, duration, id },
    });
  const dismiss = () => dispatch({ type: 'toast/dismiss', payload: id });

  dispatch({
    type: 'toast/add',
    payload: {
      ...props,
      id,
      open: true,
      duration,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
}

function useToast() {
  const [value, setValue] = React.useState(state);

  React.useEffect(() => {
    subscribers.add(setValue);
    return () => {
      subscribers.delete(setValue);
    };
  }, []);

  return {
    ...value,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: 'toast/dismiss', payload: toastId }),
  };
}

////////////////////////////
////////////////////////////
export { toast, useToast };
////////////////////////////
////////////////////////////

function dispatch(action: Action) {
  state = reducer(state, action);
  subscribers.forEach((listener) => listener(state));
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toast/add': {
      return {
        ...state,
        toasts: [action.payload, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    }

    case 'toast/update': {
      //  ! Side effects !
      if (action.payload.id) clearFromRemoveQueue(action.payload.id);

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.payload.id
            ? { ...toast, ...action.payload }
            : toast
        ),
      };
    }

    case 'toast/upsert': {
      const { payload } = action;

      return state.toasts.find((t) => t.id === payload.id)
        ? reducer(state, { type: 'toast/update', payload })
        : reducer(state, { type: 'toast/add', payload });
    }

    case 'toast/dismiss': {
      const { payload } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (payload) {
        addToRemoveQueue(payload);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === payload || payload == undefined
            ? {
                ...toast,
                open: false,
              }
            : toast
        ),
      };
    }

    case 'toast/remove':
      return action.payload == undefined
        ? {
            ...state,
            toasts: [],
          }
        : {
            ...state,
            toasts: state.toasts.filter((t) => t.id !== action.payload),
          };

    default:
      // @ts-expect-error
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

interface State {
  toasts: ToastType[];
}

type Action =
  | {
      type: 'toast/add';
      payload: ToastType;
    }
  | {
      type: 'toast/upsert';
      payload: ToastType;
    }
  | {
      type: 'toast/update';
      payload: Partial<ToastType>;
    }
  | {
      type: 'toast/dismiss';
      payload?: ToastType['id'];
    }
  | {
      type: 'toast/remove';
      payload?: ToastType['id'];
    };
