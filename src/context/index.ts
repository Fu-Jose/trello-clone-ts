import {createContext} from 'react';
import {ContextState} from './types'

const contextDefaultValues : ContextState ={
  addCard:()=>{},
  addList:()=>{},
  editTitle:()=>{},
  editCard:()=>{},
  onDragEnd:()=>{},
  data:{},
  modal:{},
  setModal:()=>{},
}

const ContextAPI = createContext<ContextState>(
    contextDefaultValues
  );

export default ContextAPI