const { spec } = require('pactum');
const AuthHelper = require('./auth');

async function introspectSchema() {
    const authToken = await AuthHelper.getAuthToken();
    
    const response = await spec()
        .post('http://lojaebac.ebaconline.art.br/graphql')
        .withHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        })
        .withJson({
            query: `
                {
                    __schema {
                        mutationType {
                            fields {
                                name
                                args {
                                    name
                                    type {
                                        name
                                        kind
                                    }
                                }
                            }
                        }
                    }
                }
            `
        });
    
    console.log('Schema:', JSON.stringify(response.json, null, 2));
}

// Descomente para executar
// introspectSchema();

module.exports = { introspectSchema };
