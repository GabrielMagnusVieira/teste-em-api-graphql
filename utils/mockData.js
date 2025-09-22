class MockData {
    static getRandomString(prefix = 'Test') {
        return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    }
    
    static getCategoryName() {
        const categories = [
            'Eletrônicos', 'Roupas', 'Casa e Jardim', 'Livros', 
            'Esportes', 'Beleza', 'Automóveis', 'Jogos'
        ];
        return categories[Math.floor(Math.random() * categories.length)] + '_' + Date.now();
    }
    
    static getProductName() {
        const adjectives = ['Incrível', 'Fantástico', 'Premium', 'Básico', 'Avançado'];
        const products = ['Smartphone', 'Notebook', 'Camiseta', 'Tênis', 'Livro'];
        
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const prod = products[Math.floor(Math.random() * products.length)];
        
        return `${adj} ${prod} ${Date.now()}`;
    }
    
    static getProductDescription() {
        return `Descrição detalhada do produto criado em ${new Date().toLocaleString()}`;
    }
    
    static getRandomPrice() {
        return parseFloat((Math.random() * 1000 + 10).toFixed(2));
    }
    
    static getDepartment() {
        const departments = [
            'Tecnologia', 'Fashion', 'Casa', 'Livros', 
            'Esportes', 'Saúde', 'Automóveis', 'Games'
        ];
        return departments[Math.floor(Math.random() * departments.length)] + '_' + Date.now();
    }
}

module.exports = MockData;
