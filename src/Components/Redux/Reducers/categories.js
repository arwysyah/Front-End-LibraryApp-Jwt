

const InitialState = {
    categoriesData : [],
    isLoading : false,
    isRejected: false,
    isFullfilled: false

}
export const getCategories = (prevState = InitialState,action) =>{
    switch (action.type) {
        case "GET_CATEGORIES_PENDING":
            return{
                ...prevState,
                isLoading : true,
                isRejected: false,
                isFullfilled:false,

            }
            
          case "GET_CATEGORIES_REJECTED":
              return{
                  ...prevState,
                  isLoading: false,
                  isRejected:true,
                  
              }

              case "GET_CATEGORIES_FULFILLED":
                  return{
                      isLoading : false,
                      isFullfilled:true,
                categoriesData: action.payload.data.response
                  }
    
        default:
            return prevState
           
    }

} 