const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { authentication: pk_ong } = request.headers;

        const incidents = await connection.table('incidents')
            .select()
            .where('ong_id', pk_ong);

        return response.json( {incidents} );
    },

};