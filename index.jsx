
import { create } from "zustand";

///API
export const useGrabbed = create((set) => { 
 let release = () => { set({ card: null }); }
 let grab =    id => { console.log('I grabbed this:', id); set({ card: id })};
 window.addEventListener('mouseup', release);
 
 return { card: null, grab, release };
});
//////
export const {grab, release} = useGrabbed.getState()
export const useAmIGrabbed = (id) => useGrabbed(s => s.card==id)
export function grabbedItem(){return useGrabbed.getState().card
export function useGrabbedItem(){return useGrabbed(s=>s.card)


