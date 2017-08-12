module.exports = function (req, res, next) {
    res.jsonPromise = function (promise) {
        if (!promise) {
            console.error("[jsonPromise] Aucune promesse fournie en entrée");
            res.status(500);
        } else {
            var message = "[jsonPromise] Requête entrante avec les paramètres suivants : " + JSON.stringify({
                    body: req.body, query: req.query, params: req.params
                });
            promise.then(function success(data) {
                console.log(message + " Réponse en sortie : " + JSON.stringify(data));
                res.json(data);
            }, function failure(reason) {
                console.error(message + " Réponse en erreur : " + JSON.stringify(reason) + "\nStackTrace : " + reason.stack);
                res.status(reason.status || 500);
                res.json(reason);
            }).catch(function exception(error) {
                console.warn(message + " Réponse en exception : " + JSON.stringify(error) + "\nStackTrace : " + error.stack);
                res.status(error.status || 500);
                res.json(error);
            })
        }
    };
    next();
};