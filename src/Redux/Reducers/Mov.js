const defaultState = {
    dataMovies: [],
    dataUpcomming:[],
    dataTVSeries:[],
    dataPopular:[],
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'MOVIE': 
            return Object.assign({}, state, { 
                dataMovies:action.dataMovies,
                dataUpcomming:action.dataUpcomming,
                dataTVSeries:action.dataTVSeries,
                dataPopular:action.dataPopular
            });
        default:
            return state;
    }
}