import { create } from 'zustand';

import { ViewState } from '@/types';

type ViewStateStore = {
  viewState: ViewState;
  changeViewState: (newState: ViewState) => void;
};

export const useViewStateStore = create<ViewStateStore>()((set) => ({
  viewState: 'retention',
  changeViewState: (newState) => set({ viewState: newState })
}));
