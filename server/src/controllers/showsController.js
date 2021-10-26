const showsJSON = require("../models/shows.json")


///////////////////
///////GET/////////
///////////////////


///GET ALL///
const getAll = (request, response) => {
    response.status(200).json (
        [{
            "Séries": showsJSON
        }]
    )
};


///GET BY ID///
const getById = (request, response) => {
    let idRequest = request.params.id;
    let idFound = showsJSON.find(show => show.id == idRequest);

    response.status(200).send(idFound);
};


///GET BY TITLE///
const getbyTitle = (request, response) => {
    let titleRequest = request.query.title.toLocaleLowerCase();
    let titleFound = showsJSON.filter(show => show.title.toLocaleLowerCase().includes(titleRequest));

    response.status(200).send(titleFound);
}


///GET BY GENRE///
const getbyGenre = (request, response) => {
    let genreRequest = request.query.genre.toLocaleLowerCase();
    let genreFound = showsJSON.filter(show => show.genre.toString().toLocaleLowerCase().includes(genreRequest));

    response.status(200).send(genreFound);
}


///////////////////
////////POST///////
///////////////////



///POST CREATE///
const createShow = (request, response) => {
    let body = request.body;

    let newShow = {
        id: (showsJSON.length) + 1,
        title: body.title,
        totalSeasons: body.totalSeasons,
        genre: body.genre,
        writes: body.writes,
        poster: body.poster,
        actors: body.actors,
        ratings: body.ratings
    };

    showsJSON.push(newShow);

    response.status(200).json(
        [{
            "Mensagem": "Nova série cadastrada com sucesso.",
            newShow
        }]
    )
};


///////////////////
////////PUT////////
///////////////////



///PUT UPDATE///
const updateShow = (request, response) => {
    let idRequest = request.params.id;
    let showRequest = request.body;

    let showFound = showsJSON.findIndex(show => show.id == idRequest)
    showsJSON.splice(showFound, 1, showRequest)
    
    response.status(200).json(
        [{
            "Mensagem":"Série atualizada com sucesso.",
            showsJSON
        }]
    )
};


///////////////////
///////PATCH///////
///////////////////



///PATCH TITLE///
const updateTitle = (request, response) => {
    let idRequest = request.params.id;
    let bodyRequest = request.body.title;

    showFilter = showsJSON.find(show => show.id == idRequest);
    showFilter.title = bodyRequest;

    response.status(200).json(
        [{
            "Mensagem":"Título atualizado com sucesso.",
            showsJSON
        }]
    )
};


///PATCH UPDATE///
const updateShowId = (request, response) => {
    let idRequest = request.params.id;
    let bodyRequest = request.body;

    let showFound = showsJSON.find(show => show.id == idRequest);

    bodyRequest.id = idRequest;

    Object.keys(showFound).forEach((key) => {

        if (bodyRequest[key] == undefined){
            showFound[key] == showFound[key]
        }else{
            showFound[key] = bodyRequest[key]
        }

    })

    response.status(200).json(
        [{
            "Mensagem":"Série atualizada com sucesso.",
            showFound
        }]
    )
};

///////////////////
//////DELETE///////
///////////////////



///DELETE SHOW///
const deleteShow = (request, response) => {
    let idRequest = request.params.id;
    let showFound = showsJSON.findIndex(show => show.id == idRequest);

    showFound.splice(showFound, 1);

    response.status(200).json(
        [{
            "Mensagem":"Série deletada com sucesso.",
            "Deletado": idRequest,
            showsJSON
        }]
    )

};

///////////////////
//////EXPORT///////
///////////////////


module.exports = {
    getAll,
    getById,
    getbyTitle,
    getbyGenre,
    createShow,
    updateShow,
    updateTitle,
    updateShowId,
    deleteShow
}

