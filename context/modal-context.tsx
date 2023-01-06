import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type IAction = "Add" | "View" | "Edit" | "Delete";
type ISubject = "Board" | "Task";

export type IModal = Exclude<`${IAction}${ISubject}` | null, "ViewBoard">;

interface IModalState {
  open: boolean;
  current: IModal;
}

type IModalActions =
  | { type: "OPEN_MODAL"; payload: IModal }
  | { type: "CLOSE_MODAL" };

const initialState: IModalState = {
  open: false,
  current: null,
};

const ModalContext = createContext<IModalState | null>(null);
const ModalContextDispatch = createContext<Dispatch<IModalActions> | null>(
  null
);

type ProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={state}>
      <ModalContextDispatch.Provider value={dispatch}>
        {children}
      </ModalContextDispatch.Provider>
    </ModalContext.Provider>
  );
};

export const useModalState = () => {
  const context = useContext(ModalContext);
  if (context == undefined)
    throw new Error("useModalState must be used within a ModalProvider");
  return context;
};

export const useModalDispatch = () => {
  const context = useContext(ModalContextDispatch);
  if (context == undefined)
    throw new Error("useModalDispatch must be used within a ModalProvider");
  return context;
};

const reducer = (state: IModalState, action: IModalActions) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        open: true,
        current: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        open: false,
        current: null,
      };
    default: {
      //@ts-expect-error
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
