const InduxFindmeOnline = (state=0,action)=>{
    switch(action.type){
        case 'INDUXFINDMEONLINE':
            return state = action.payload
         default:
            return state;
    }
}
export default InduxFindmeOnline