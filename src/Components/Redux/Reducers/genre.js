const InitialState = {
    genreData : [],
    isLoading : false,
    isRejected : false,
    isFullfilled: false
}

export const getGenre = (prevState = InitialState , action) =>{
    // switch (action.type) {
    //     case 'GET_GENRE_PENDING':
    //         return{ 
    //             ...prevState,
    //             isLoading : true,
    //             isRejected: false,
    //             isFullfilled: false
    //         }
    //     case 'GET_GENRE_REJECTED':
    //         return{
    //             ...prevState,
    //             isLoading: false,
    //             isRejected: true
    //         }
    //     case "GET_GENRE_FULFILLED":
    //         return{
    //             ...prevState,
    //             isLoading: false,
    //             isFullfilled: true,
    //             genreData: action.payload.data.response
    //         }
           
    //         default:
    //             return prevState;
    //         }

    switch (action.type) {
        case 'GET_GENRE_PENDING':
            return{
                ...prevState,
                isLoading : true,
                isRejected : false,
                isFullfilled: false
            }
            case 'GET_GENRE_REJECTED':
                return{
                    ...prevState,
                    isLoading : false,
                    isRejected : true,
                }
                case 'GET_GENRE_FULFILLED':
                return{
                    ...prevState,
                    isLoading : false,
                    isFullfilled : true,
                    genreData: action.payload.data.response
                }
        default:
            return prevState
    }
              
}
