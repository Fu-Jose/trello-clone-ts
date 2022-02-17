import {createContext} from 'react';
import {ContextState} from './types'

const contextDefaultValues : ContextState ={
    addCard:()=>{},
    addList:()=>{}
}

const ContextAPI = createContext<ContextState>(
    contextDefaultValues
  );

export default ContextAPI