const Initialstate = {
    bookData: [], // kita berikan array kosong yang menampung nilai data book
    isLoading: false,
    isRejected: false,
  
    isFullfilled: false
  };
  

export const updateStatus = (prevstate = Initialstate,action)=>
{
  switch (action.type) {
    case "UPDATE_STATUS_PENDING":
      return {
        ...prevstate,
        isLoading: true, //kondisional s
        isRejected: false,

        isFullfilled: false
      };
    case "UPDATE_STATUS_REJECTED":
      return {
        ...prevstate,
        isLoading: false,
        isRejected: true
      };
    case "UPDATE_STATUS_FULFILLED":
      return {
        ...prevstate,
        isLoading: false,
        isFullfilled: true,
        bookData: action.payload.data[0]// karrena arraay makanya dimulai dari nol yang dibungkus array
      };


    default:
      return prevstate;
  }
}