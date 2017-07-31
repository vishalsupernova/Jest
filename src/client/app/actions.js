export const getStarships = () => {
    return(dispatch) => {
        dispatch(getData("Load Data"))
        fetch('http://swapi.co/api/films/')
        .then(response => response.json())
        .then((json) => {
            const {results} = json
            dispatch(getStarshipname(results))
        })
    }
}

export const getData = (loaddata) => {
    return{
        type: "GET_DATA",
        payload: loaddata
    }
}

export const getStarshipname = (starships) => {
    return[{
        type: "GET_STARSHIPNAME",
        payload: starships
    }]
}