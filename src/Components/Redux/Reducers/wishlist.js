
const InitialState = {
    statusData : [],
    isLoading : false,
    isRejected: false,
    isFullfilled: false

}

export const postWishlist = (prevState = InitialState,action) =>{
    switch (action.type) {
        case "POST_WISHLIST_PENDING":
            return{
                ...prevState,
                isLoading : true,
                isRejected: false,
                isFullfilled:false,

            }
            
          case "POST_WISHLIST_REJECTED":
              return{
                  ...prevState,
                  isLoading: false,
                  isRejected:true,
                  
              }

              case "POST_WISHLIST_FULFILLED":
                  return{
                      isLoading : false,
                      isFullfilled:true,
                statusData: action.payload.data.response
                  }
    
        default:
            return prevState
           
    }
}
export const deleteInWishlist= (prevState=InitialState,action)=>{
    switch (action.type) {
        case "DELETE_WISHLIST_PENDING":
            
            return{
                ...prevState,
                isLoading:false,
                isRejected:false,
                isFullfilled:false
            }
    
        case "DELETE_WISHLIST_REJECTED":
            return{
                ...prevState,
                isLoading:false,
                isRejected:true,
            }
            case 'DELETE_WISHLIST_FULLFILLED':

            return{
                isRejected:false,
                isFullfilled:true,
                statusData:action.payload.data.response
            }
            default:
               return  prevState
    } 

}