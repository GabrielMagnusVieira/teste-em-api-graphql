const { spec } = require('pactum');

class AuthHelper {
    static async getAuthToken() {
        const response = await spec()
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
            .expectStatus(200);
        
        return response.json.data.authUser.token;
    }
}

module.exports = AuthHelper;