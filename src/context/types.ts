export type ContextState = {
    addCard: (text: string, listId: string) => void
    addList: (text: string) => void
    onDragEnd:(result:any)=>void,
    data:any
}