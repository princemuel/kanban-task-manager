'use client';
import * as React from 'react';

import type { ToastActionElement, ToastProps } from '@/components/ui/toast';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

interface ToastState {
  toasts: ToasterToast[];
}

type Action =
  | {
      type: 'toast/add';
      payload: ToasterToast;
    }
  | {
      type: 'toast/update';
      payload: Partial<ToasterToast>;
    }
  | {
      type: 'toast/dismiss';
      payload?: ToasterToast['id'];
    }
  | {
      type: 'toast/remove';
      payload?: ToasterToast['id'];
    };

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'toast/remove',
      payload: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: ToastState, action: Action): ToastState => {
  switch (action.type) {
    case 'toast/add': {
      return {
        ...state,
        toasts: [action.payload, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    }

    case 'toast/update': {
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.payload.id
            ? { ...toast, ...action.payload }
            : toast
        ),
      };
    }

    case 'toast/dismiss': {
      const { payload } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      !payload
        ? state.toasts.forEach((toast) => {
            addToRemoveQueue(toast.id);
          })
        : addToRemoveQueue(payload);

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          payload === undefined || toast.id === payload
            ? {
                ...toast,
                open: false,
              }
            : toast
        ),
      };
    }

    case 'toast/remove': {
      return Boolean(action.payload)
        ? {
            ...state,
            toasts: [],
          }
        : {
            ...state,
            toasts: state.toasts.filter((t) => t.id !== action.payload),
          };
    }
  }
};

let state: ToastState = { toasts: [] };
const subscribers = new Set<(state: ToastState) => void>();

function dispatch(action: Action) {
  state = reducer(state, action);
  subscribers.forEach((subscriber) => subscriber(state));
}

type Toast = Omit<ToasterToast, 'id'>;

function toast({ duration = 3000, ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
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

export { toast, useToast };
