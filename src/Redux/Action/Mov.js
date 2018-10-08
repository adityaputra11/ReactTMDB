
export const movie = (dataMovies,dataUpcomming,dataTVSeries,dataPopular) => {
    return {
        type: 'MOVIE',
        dataMovies:dataMovies,
        dataUpcomming:dataUpcomming,
        dataTVSeries:dataTVSeries,
        dataPopular:dataPopular,
    };
};

