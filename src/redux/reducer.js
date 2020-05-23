import moment from 'moment';

const defaultState = {
  fetching: false,
  news: [],
  error: null,
};

const types = {
  FETCH_NEWS: "FETCH/NEWS",
  ADD_NEWS: "ADD/NEWS",
  ERROR_NEWS: "ERROR/NEWS",
};

export const actions = {
    getNews: () => (dispatch) => {
        
        dispatch({ type: types.FETCH_NEWS });

        setTimeout(() => {
            fetch(`https://api.canillitapp.com/latest/${moment().format("YYYY-MM-DD")}`)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.ADD_NEWS,
                    payload: { response },
                });

            })
            .catch((error) => {

                dispatch({
                    type: types.ERROR_NEWS,
                    payload: error,
                });

            });
        }, 1000); 
    },
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCH_NEWS:
            return {
                ...state,
                fetching: true
            };
        case types.ADD_NEWS:
            return {
                ...state,
                news: action.payload.response,
                fetching: false
            };
        case types.ERROR_NEWS:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return { ...state };
    }
  };
  