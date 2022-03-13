module.exports = function (request, response, next) {
    // Mettre dans les variables locales les messages flash si ils existent
    if (request.session.flash) {
        response.locals.flash = request.session.flash;
        request.session.flash = undefined;
    }

    request.flash = function (type, content) {
        if (request.session.flash === undefined) {
            request.session.flash = {};
        }
        request.session.flash[type] = content;
    };

    next(); // Appeler next() sinon ca coupe l'execution du reste de response
};
