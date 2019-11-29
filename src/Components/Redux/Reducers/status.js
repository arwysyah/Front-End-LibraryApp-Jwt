

const InitialState = {
    statusData : [],
    isLoading : false,
    isRejected: false,
    isFullfilled: false

}
export const getStatus = (prevState = InitialState,action) =>{
    switch (action.type) {
        case "GET_STATUS_PENDING":
            return{
                ...prevState,
                isLoading : true,
                isRejected: false,
                isFullfilled:false,

            }
            
          case "GET_STATUS_REJECTED":
              return{
                  ...prevState,
                  isLoading: false,
                  isRejected:true,
                  
              }

              case "GET_STATUS_FULFILLED":
                  return{
                      isLoading : false,
                      isFullfilled:true,
                statusData: action.payload.data.response
                  }
    
        default:
            return prevState
           
    }

} 