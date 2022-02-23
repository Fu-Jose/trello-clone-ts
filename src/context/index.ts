import {createContext} from 'react';
import {ContextState} from './types'

const contextDefaultValues : ContextState ={
  addCard:()=>{},
  addList:()=>{},
  onDragEnd:()=>{},
  data:{},
  modal:{},
  setModal:()=>{},
}

const ContextAPI = createContext<ContextState>(
    contextDefaultValues
  );

export default ContextAPI