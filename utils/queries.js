const CATEGORY_QUERIES = {
    ADD: `
        mutation addCategory($name: String!, $photo: String) {
            addCategory(name: $name, photo: $photo) {
                id
                name
                photo
                createdAt
            }
        }
    `,
    EDIT: `
        mutation editCategory($id: ID!, $name: String!, $photo: String) {
            editCategory(id: $id, name: $name, photo: $photo) {
                id
                name
                photo
                updatedAt
            }
        }
    `,
    DELETE: `
        mutation deleteCategory($id: ID!) {
            deleteCategory(id: $id)
        }
    `,
    GET_ALL: `
        query {
            categories {
                id
                name
                photo
            }
        }
    `
};

const PRODUCT_QUERIES = {
    ADD: `
        mutation addProduct($name: String!, $price: Float!, $categoryId: ID!) {
            addProduct(name: $name, price: $price, categoryId: $categoryId) {
                id
                name
                price
                categoryId
                createdAt
            }
        }
    `,
    EDIT: `
        mutation editProduct($id: ID!, $name: String!, $price: Float!, $categoryId: ID!) {
            editProduct(id: $id, name: $name, price: $price, categoryId: $categoryId) {
                id
                name
                price
                categoryId
                updatedAt
            }
        }
    `,
    DELETE: `
        mutation deleteProduct($id: ID!) {
            deleteProduct(id: $id)
        }
    `,
    GET_ALL: `
        query {
            products {
                id
                name
                price
                categoryId
            }
        }
    `
};

module.exports = {
    CATEGORY_QUERIES,
    PRODUCT_QUERIES
};
