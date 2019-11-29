const initialState = {
    titleData : [],
    isLoading : false,
    isRejected : false,
    isFullfilled: false
}

export const getTitle = (prevState = initialState, action)=> {
    switch (action.type) {
        case 'GET_TITLE_PENDING':
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFullfilled:false 
            }
            
        case 'GET_TITLE_REJECTED':
            return{
                ...prevState,
                isLoading: false,
                isRejected:true

            }
        case "GET_TITLE_FULFILLED":
            return{
                ...prevState,
                isLoading: false,
                isFullfilled:true,
                titleData : action.payload.data.response
            }
    
        default :return prevState
        }


}