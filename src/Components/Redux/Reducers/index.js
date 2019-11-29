import  {combineReducers} from 'redux'


import {getBooks} from  './books';
import {getByID} from './books'  // setelah getall maka import get by id
import {postBook} from './books'
import {putBook} from './books'
import {deleteBook} from './books'
import {getGenre} from './genre'
import {getStatus} from './status'
import {getTitle} from './title'
import {getCategories} from './categories'

import {Auth} from './users'
import {updateStatus} from './updatestatus'
import {postHistory} from './History'

const appReducer = combineReducers(
    {
        getBooks,
        getByID,
        postBook,
        putBook,
        deleteBook,
        getGenre,
        getStatus,
        getTitle,
        getCategories,
        postHistory,
        Auth,
        updateStatus
    }
);
export default appReducer;