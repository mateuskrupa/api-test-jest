const axios = require('axios');

describe('Teste da API', () => {
  test('GET Deve retornar dados corretos', async () => {
    const response = await axios.get('http://localhost:3000/'); // Substitua pela URL da sua API
    
    // Verifica se a resposta da API está OK
    expect(response.status).toBe(200);
    
    // Verifica se os dados retornados são corretos
    expect(response.data).toEqual(
      // Adicione aqui o objeto esperado que você espera receber da API
        [
        'Get OK'
        ]
    );
  });

  test('POST Deve retornar dados corretos', async () => {
    const response = await axios.post('http://localhost:3000/'); // Substitua pela URL da sua API
    
    // Verifica se a resposta da API está OK
    expect(response.status).toBe(200);
    
    // Verifica se os dados retornados são corretos
    expect(response.data).toEqual(
      // Adicione aqui o objeto esperado que você espera receber da API
        [
        'Post OK'
        ]
    );
  });

  test('PUT Deve retornar dados corretos', async () => {
    const response = await axios.put('http://localhost:3000/'); // Substitua pela URL da sua API
    
    // Verifica se a resposta da API está OK
    expect(response.status).toBe(200);
    
    // Verifica se os dados retornados são corretos
    expect(response.data).toEqual(
      // Adicione aqui o objeto esperado que você espera receber da API
        [
        'Put OK'
        ]
    );
  });

  test('DELETE Deve retornar dados corretos', async () => {
    const response = await axios.delete('http://localhost:3000/'); // Substitua pela URL da sua API
    
    // Verifica se a resposta da API está OK
    expect(response.status).toBe(200);
    
    // Verifica se os dados retornados são corretos
    expect(response.data).toEqual(
      // Adicione aqui o objeto esperado que você espera receber da API
        [
        'Delete OK'
        ]
    );
  });

  test('Deve retornar um erro quando o recurso não existir', async () => {
    try {
      await axios.get('http://localhost:3000/invalid-url'); // Substitua pela URL inválida
    } catch (error) {
      // Verifica se a resposta da API possui o status de erro esperado
      expect(error.response.status).toBe(404);
    }
  });


  test('GET /api/users retorna uma lista de usuários', async () => {
    const response = await axios.get('http://localhost:3000/api/users');
  
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });
  

});