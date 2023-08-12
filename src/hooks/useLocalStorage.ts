import EventEmitterFabric from 'events';

import {
  Dispatch, SetStateAction, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState,
} from 'react';

import { v4 as uuid } from 'uuid';

const fakeSetter = () => undefined;

const ee = new EventEmitterFabric();

export const useLocalStorage = <T>(key?: string, initialValueArg?: T | undefined, options?: {
  raw: true;
} | {
  raw: false;
  serializer: (value: T) => string;
  deserializer: (value: string) => T;
} | undefined): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  const initialValue = key ? initialValueArg : undefined;
  const instanceId: string = useMemo(() => uuid(), []);

  const deserializer = useMemo(() => {
    return options
      ? options.raw
        ? (value: any) => value
        : options.deserializer
      : JSON.parse;
  }, [options]);

  const initializer = useRef((key?: string): T | undefined => {
    try {
      if (key) {
        const serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
        const localStorageValue = localStorage.getItem(key);

        if (localStorageValue !== null) {
          return deserializer(localStorageValue);
        }

        if (initialValue) {
          localStorage.setItem(key, serializer(initialValue));
        }
      }

      return initialValue;
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });

  const [state, setState] = useState<T | undefined>(() => initializer.current(key));

  useLayoutEffect(() => setState(initializer.current(key)), [key]);

  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      if (key) {
        setState((currentState) => {
          try {
            const newState: any = typeof valOrFunc === 'function' ? (valOrFunc as Function)(currentState) : valOrFunc;
            if (typeof newState === 'undefined') return currentState;
            let value: string;

            if (options) {
              if (options.raw) {
                if (typeof newState === 'string') value = newState;
                else value = JSON.stringify(newState);
              } else if (options.serializer) value = options.serializer(newState);
              else value = JSON.stringify(newState);
            } else value = JSON.stringify(newState);

            localStorage.setItem(key, value);
            ee.emit('storageUpdated', { key, value, instanceId });

            return deserializer(value);
          } catch {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
            return currentState;
          }
        });
      }
    },
    [deserializer, instanceId, key, options],
  );

  const remove = useCallback(() => {
    try {
      if (key) {
        localStorage.removeItem(key);
        setState(undefined);
      }
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
    }
  }, [key, setState]);

  useEffect(() => {
    if (key) {
      const callback = (eventData: any) => {
        if (instanceId !== eventData?.instanceId && key === eventData.key) {
          setState(initializer.current(key));
        }
      };

      ee.on('storageUpdated', callback);

      return () => {
        ee.off('storageUpdated', callback);
      };
    }
  }, [instanceId, key]);

  if (key) {
    return [state, set, remove];
  }

  return [initialValueArg, fakeSetter] as any;
};
