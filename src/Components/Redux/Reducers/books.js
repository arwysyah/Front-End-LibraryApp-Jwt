const Initialstate = {
  updateData: [], // kita berikan array kosong yang menampung nilai data book
  isLoading: false,
  isRejected: false,

  isFullfilled: false
};

export const getBooks = (prevstate = Initialstate, action) => {
  switch (action.type) {
    case "GET_BOOK_PENDING":
      return {
        ...prevstate, //memecah dulu
        isLoading: true, //kondisional s
        isRejected: false,

        isFullfilled: false
      };
    case "GET_BOOK_REJECTED":
      return {
        ...prevstate,
        isLoading: false,
        isRejected: true
      };
    case "GET_BOOK_FULFILLED":
      return {
        ...prevstate,
        isLoading: false,
        isFullfilled: true,
        bookData: action.payload.data.response // response itu merupakan nama response yang ada di backend
      };


    default:
      return prevstate;
  }

}
export const getByID = (prevstate = Initialstate,action)=>
{
  switch (action.type) {
    case "GETBOOKBY_ID_PENDING":
      return {
        ...prevstate,
        isLoading: true, //kondisional s
        isRejected: false,

        isFullfilled: false
      };
    case "GETBOOKBY_ID_REJECTED":
      return {
        ...prevstate,
        isLoading: false,
        isRejected: true
      };
    case "GETBOOKBY_ID_FULFILLED":
      return {
        ...prevstate,
        isLoading: false,
        isFullfilled: true,
        bookData: action.payload.data.response[0] // karrena arraay makanya dimulai dari nol yang dibungkus array
      };


    default:
      return prevstate;
  }

}
export const postBook = (prevstate = Initialstate,action)=>
{
  switch (action.type) {
    case "POST_BOOKS_PENDING":
      return {
        ...prevstate,
        isLoading: true, //kondisional s
        isRejected: false,

        isFullfilled: false
      };
    case "POST_BOOKS_REJECTED":
      return {
        ...prevstate,
        isLoading: false,
        isRejected: true
      };
    case "POST_BOOKS_FULFILLED":
      return {
        ...prevstate,
        isLoading: false,
        isFullfilled: true,
        bookData: action.payload.data.response // karrena arraay makanya dimulai dari nol yang dibungkus array
      };


    default:
      return prevstate;
  }

}
export const putBook = (prevstate = Initialstate,action)=>
{
  switch (action.type) {
    case "PUT_BOOKS_PENDING":
      return {
        ...prevstate,
        isLoading: true, //kondisional s
        isRejected: false,

        isFullfilled: false
      };
    case "PUT_BOOKS_REJECTED":
      return {
        ...prevstate,
        isLoading: false,
        isRejected: true
      };
    case "PUT_BOOKS_FULFILLED":
      return {
        ...prevstate,
        isLoading: false,
        isFullfilled: true,
        bookData: action.payload.data // karrena arraay makanya dimulai dari nol yang dibungkus array
      };


    default:
      return prevstate;
  }

}

export const deleteBook = (prevstate = Initialstate,action)=>
{
  switch (action.type) {
    case "DELETE_BOOKS_PENDING":
      return {
        ...prevstate,
        isLoading: true, //kondisional s
        isRejected: false,

        isFullfilled: false
      };
    case "DELETE_BOOKS_REJECTED":
      return {
        ...prevstate,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_BOOKS_FULFILLED":
      return {
        ...prevstate,
        isLoading: false,
        isFullfilled: true,
        bookData: action.payload.data // karrena arraay makanya dimulai dari nol yang dibungkus array
      };


    default:
      return prevstate;
  }

}