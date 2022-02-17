import {createContext} from 'react';
import {ContextState} from './types'

const contextDefaultValues : ContextState ={
  addCard:()=>{},
  addList:()=>{},
  data:{},
}

const ContextAPI = createContext<ContextState>(
    contextDefaultValues
  );

export default ContextAPI