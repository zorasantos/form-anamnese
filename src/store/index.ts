import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  openModal: boolean;
  schema: {
    properties: object;
  };
  addProperties: (props: object) => void;
  handleOpenModal: () => void;
}

const useStore = create<BearState>()(
  devtools(
    persist((set) => ({
      openModal: false,
      schema: {
        title: 'Guest',
        type: 'object',
        properties: {}
      },
      addProperties: (props) =>
        set((state) => ({
          schema: {
            ...state.schema,
            properties: { ...props }
          }
        })),
      handleOpenModal: () => set((state) => ({ openModal: !state.openModal }))
    }))
  )
);

export default useStore;
