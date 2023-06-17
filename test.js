const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {

  it('GET /user should show all users', async () => {
    const res = await requestWithSupertest.get('/api/users');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('users')
      expect(res.body.users.length > 0)
      expect(res.body.users[0]).toHaveProperty('id')
      expect(res.body.users[0]).toHaveProperty('login')
      expect(res.body.users[0]).toHaveProperty('imya')
      expect(res.body.users[0]).toHaveProperty('roli_nazvanie')
  });

  it('GET /dostavka should show all dostavka', async () => {
    const res = await requestWithSupertest.get('/api/dostavka');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('dostavka')
      expect(res.body.dostavka.length > 0)
      expect(res.body.dostavka[0]).toHaveProperty('id')
      expect(res.body.dostavka[0]).toHaveProperty('kolicestvo')
      expect(res.body.dostavka[0]).toHaveProperty('cena')
      expect(res.body.dostavka[0]).toHaveProperty('data')
  });

  it('GET /eda should show all eda', async () => {
    const res = await requestWithSupertest.get('/api/eda');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('eda')
      expect(res.body.eda.length > 0)
      expect(res.body.eda[0]).toHaveProperty('id')
      expect(res.body.eda[0]).toHaveProperty('nazvanie')
      expect(res.body.eda[0]).toHaveProperty('tip')
      expect(res.body.eda[0]).toHaveProperty('cena_label')
      expect(res.body.eda[0]).toHaveProperty('kolicestvo_label')
  });

  it('GET /postavshiki should show all postavshiki', async () => {
    const res = await requestWithSupertest.get('/api/postavshiki');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('postavshiki')
      expect(res.body.postavshiki.length > 0)
      expect(res.body.postavshiki[0]).toHaveProperty('id')
      expect(res.body.postavshiki[0]).toHaveProperty('nazvanie')
      expect(res.body.postavshiki[0]).toHaveProperty('telephone_label')
      expect(res.body.postavshiki[0]).toHaveProperty('address')
  });
 
  it('GET /prodazhi should show all prodazhi', async () => {
    const res = await requestWithSupertest.get('/api/prodazhi');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('prodazhi')
      expect(res.body.prodazhi.length > 0)
      expect(res.body.prodazhi[0]).toHaveProperty('id')
      expect(res.body.prodazhi[0]).toHaveProperty('user_label')
      expect(res.body.prodazhi[0]).toHaveProperty('edi_label')
      expect(res.body.prodazhi[0]).toHaveProperty('kolicestvo')
      expect(res.body.prodazhi[0]).toHaveProperty('data')
  });

  it('GET /postavshiki should have Pico-Pico', async () => {
    const res = await requestWithSupertest.get('/api/postavshiki');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('postavshiki')
    expect(res.body.postavshiki.length > 0)
    expect(res.body.postavshiki.some((item) => item.nazvanie === 'Pico-Pico')).toBe(true);
    expect(res.body.postavshiki[0]).toHaveProperty('nazvanie');

  });

  it('GET /users should have Nikolai', async () => {
    const res = await requestWithSupertest.get('/api/users');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('users')
    expect(res.body.users.length > 0)
    expect(res.body.users.some((item) => item.imya === 'Nikolai')).toBe(true);
    expect(res.body.users[0]).toHaveProperty('imya');

  });

  it('GET /eda should have Cola', async () => {
    const res = await requestWithSupertest.get('/api/eda');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('eda')
    expect(res.body.eda.length > 0)
    expect(res.body.eda.some((item) => item.nazvanie === 'Cola')).toBe(true);
    expect(res.body.eda[0]).toHaveProperty('nazvanie');

  });


  it('GET /users should have Administrator', async () => {
    const res = await requestWithSupertest.get('/api/users');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('users')
    expect(res.body.users.length > 0)
    expect(res.body.users.some((item) => item.roli_nazvanie === 'Администратор')).toBe(true);
    expect(res.body.users[0]).toHaveProperty('roli_nazvanie');

  });

  it('GET /eda should have cena', async () => {
    const res = await requestWithSupertest.get('/api/eda');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('eda')
    expect(res.body.eda.length > 0)
    expect(res.body.eda.every((item) => item.cena_label > '0')).toBe(true);
    expect(res.body.eda[0]).toHaveProperty('cena_label');

  });


});