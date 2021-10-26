const moviesJSON = require("../models/movies.json");



///////////////////
///////GET/////////
///////////////////



///GET ALL///
const getAll = (request, response) => {
response.status(200).json([
        {
            "Filmes": moviesJSON
        }
    ])
};


///GET BY ID///
const getById = (request, response) => {
    let idRequest = request.params.id;
    let idFound = moviesJSON.find(movie => movie.id == idRequest);
 
    response.status(200).send(idFound);
}


///GET BY TITLE///
const getByTitle = (request, response) => {
    let titleRequest = request.query.Title.toLocaleLowerCase();
    let titleFound = moviesJSON.filter(movie => movie.Title.toLocaleLowerCase().includes(titleRequest));

    response.status(200).send(titleFound);
}
    

///GET BY GENRE///
const getByGenre = (request, response) => {
    let genreRequest = request.query.Genre.toLocaleLowerCase();
    let genreFound = moviesJSON.filter(movie => movie.Genre.toLocaleLowerCase().includes(genreRequest));
        
    response.status(200).send(genreFound);
};

///////////////////
///////POST////////
///////////////////


///POST CREATE///
const createMovie = (request, response) => {
    let body = request.body;
    
        let newMovie = {
            id: (moviesJSON.length) + 1,
            Title: body.Title,
            Year: body.Year,
            Genre: body.Genre,
            Languange: body.Languange
        };
    
    moviesJSON.push(newMovie);
    
    response.status(200).json(
        [{
            "Mensagem": "Novo filme cadastrado com sucesso.",
            newMovie
        }]
    )
};



///////////////////
///////PUT/////////
///////////////////



///PUT UPDATE///
const updateMovie = (request, response) => {
    let idRequest = request.params.id;
    let movieRequest = request.body;
    let indexFind = moviesJSON.findIndex(movie => movie.id == idRequest);

    moviesJSON.splice(indexFind, 1, movieRequest);

    response.status(200).json(
        [{
            "Mensagem": "Filme atualizado com sucesso.",
            moviesJSON
        }]
    )
};



///////////////////
//////PATCH////////
///////////////////



///PATCH TITLE///
const updateTitle = (request, response) => {
    let idRequest = request.params.id;
    let bodyRequest = request.body.Title;
    let movieFilter = moviesJSON.find(movie => movie.id == idRequest);

    movieFilter.title = bodyRequest

    response.status(200).json(
        [{
             "Mensagem": "Título atualizado com sucesso.",
            movieFilter
        }]
    )
};


///PATCH UPDATE///
const updateMovieId = (request, response) => {
    let idRequest = request.params.id;
    let bodyRequest = request.body;
    let movieFound = moviesJSON.find(movie => movie.id == idRequest);
    
    bodyRequest.id = idRequest

    Object.keys(movieFound).forEach((key) => {
        
        if (bodyRequest[key] == undefined){
         movieFound[key] = movieFound[key]
        }else{
         movieFound[key] = bodyRequest[key]
        }
    });

    response.status(200).json(
        [{
            "Mensagem": "Filme atualizado com sucesso.",
         movieFound
        }]
    )
};

///////////////////
//////DELETE///////
///////////////////


///DELETE MOVIE///
const deleteMovie = (request, response) => {
    let idRequest = request.params.id;
    let indexMovie = moviesJSON.findIndex(movie => movie.id == idRequest);

    moviesJSON.splice(indexMovie, 1);

    response.status(200).json(
        [{
            "Mensagem":"Filme deletado com sucesso.",
            "Deletado": idRequest,
            moviesJSON
        }]
    )
};

///////////////////
//////EXPORT///////
///////////////////


module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createMovie,
    updateMovie,
    updateTitle,
    updateMovieId,
    deleteMovie,
}