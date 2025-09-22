const pactum = require('pactum');

const baseUrl = 'http://lojaebac.ebaconline.art.br';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3OWY1MGViMGNmMGE5MTMyNThiMjg2YyIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTc1ODIyNDcyNSwiZXhwIjoxNzU4MzExMTI1fQ.oI46Oc_YSpsqFBBanKYaGI1-XrNN9vNPHO8IG8vXpeA';

async function discoverSchema() {
    // Query para descobrir o schema do Product
    const productSchemaQuery = `
        query {
            __type(name: "Product") {
                fields {
                    name
                    type {
                        name
                        kind
                    }
                }
            }
        }
    `;

    // Query para descobrir o schema do Category  
    const categorySchemaQuery = `
        query {
            __type(name: "Category") {
                fields {
                    name
                    type {
                        name
                        kind
                    }
                }
            }
        }
    `;

    // Query para descobrir mutations disponíveis
    const mutationsQuery = `
        query {
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
    `;

    try {
        console.log('=== DESCOBRINDO SCHEMA DO PRODUCT ===');
        const productResponse = await pactum
            .spec()
            .post(`${baseUrl}/graphql`)
            .withJson({ query: productSchemaQuery })
            .toss();
        
        console.log('Product Fields:', JSON.stringify(productResponse.json, null, 2));

        console.log('\n=== DESCOBRINDO SCHEMA DO CATEGORY ===');
        const categoryResponse = await pactum
            .spec()
            .post(`${baseUrl}/graphql`)
            .withJson({ query: categorySchemaQuery })
            .toss();
        
        console.log('Category Fields:', JSON.stringify(categoryResponse.json, null, 2));

        console.log('\n=== DESCOBRINDO MUTATIONS ===');
        const mutationsResponse = await pactum
            .spec()
            .post(`${baseUrl}/graphql`)
            .withJson({ query: mutationsQuery })
            .toss();
        
        console.log('Mutations:', JSON.stringify(mutationsResponse.json, null, 2));

    } catch (error) {
        console.error('Erro ao descobrir schema:', error);
    }
}

// Execute this function
discoverSchema();