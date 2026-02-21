import { create } from 'zustand';

export const useModalStore = create((set) => {
  const closeAll = () =>
    set({
      isHamOpen: false,
      isEnquireOpen: false,
      isVideoOpen: false,
      isThankyouOpen: false,
    });

  return {
    isHamOpen: false,
    isEnquireOpen: false,
    isVideoOpen: false,
    isThankyouOpen: false,

    openHam: () => {
      closeAll();
      set({ isHamOpen: true });
    },
    closeHam: () => set({ isHamOpen: false }),

    openEnquire: () => {
      closeAll();
      set({ isEnquireOpen: true });
    },
    closeEnquire: () => set({ isEnquireOpen: false }),

    openVideo: () => {
      closeAll();
      set({ isVideoOpen: true });
    },
    closeVideo: () => set({ isVideoOpen: false }),

    openThankyouPop: () => {
      closeAll();
      set({ isThankyouOpen: true });
    },
    closeThankyouPop: () => set({ isThankyouOpen: false }),

    closeAll,
  };
});
