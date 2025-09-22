const { spec } = require('pactum');

describe('Autenticação GraphQL', () => {
    
    it('Deve autenticar usuário com credenciais válidas', async () => {
        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withHeaders('Content-Type', 'application/json')
            .withJson({
                query: `
                    mutation AuthUser($email: String, $password: String) {
                        authUser(email: $email, password: $password) {
                            success
                            token
                        }
                    }
                `,
                variables: {
                    email: "admin@admin.com",
                    password: "admin123"
                }
            })
            .expectStatus(200)
            .expectJson('data.authUser.success', true)
            .expectJsonSchema('data.authUser.token', { type: 'string' });
    });

    it('Não deve autenticar com credenciais inválidas', async () => {
        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withHeaders('Content-Type', 'application/json')
            .withJson({
                query: `
                    mutation AuthUser($email: String, $password: String) {
                        authUser(email: $email, password: $password) {
                            success
                            token
                        }
                    }
                `,
                variables: {
                    email: "invalid@email.com",
                    password: "wrongpassword"
                }
            })
            .expectStatus(200)
            .expectJson('data.authUser.success', false);
    });
});