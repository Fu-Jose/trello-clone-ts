export type ContextState = {
    addCard: (text: string, listId: string) => void
    addList: (text: string) => void,
    editTitle:(id:string, title: string)=>void,
    editCard:(listId:string, cardId: string, index:number, text: string)=>void,
    addComment:(card:{id:string},list:{id:string},text:string)=>void,
    onDragEnd:(result:any)=>void,
    // data:{lists:{},listsIds:string[]}, 
    data:any,
    modal:any, 
    setModal:any
}