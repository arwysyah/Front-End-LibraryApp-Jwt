

const InitialState = {
    userLogin : [],
    userRegister:[],
    isLoading : false,
    isRejected: false,
    isFullfilled: false

}
export const Auth = (prevState = InitialState,action) =>{
    switch (action.type) {
        case "POST_LOGIN_PENDING":
            return{
                ...prevState,
                isLoading : true,
                isRejected: false,
                isFullfilled:false,

            }
            
          case "POST_LOGIN_REJECTED":
              return{
                  ...prevState,
                  isLoading: false,
                  isRejected:true,
                  
              }

              case "POST_LOGIN_FULFILLED":
                  return{
                      isLoading : false,
                      isFullfilled:true,
                userLogin: action.payload
                  }
                  case "POST_REGISTER_PENDING":
                    return{
                        ...prevState,
                        isLoading : true,
                        isRejected: false,
                        isFullfilled:false,
        
                    }
                    
                  case "POST_REGISTER_REJECTED":
                      return{
                          ...prevState,
                          isLoading: false,
                          isRejected:true,
                          
                      }
        
                      case "GET_REGISTER_FULFILLED":
                          return{
                              isLoading : false,
                              isFullfilled:true,
                        userRegister: action.payload
                          }
            
        default:
            return prevState
           
    }

} 