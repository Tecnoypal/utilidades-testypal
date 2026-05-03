// Script para notificar a IndexNow tras el build
const apiUrl = 'https://www.bing.com/indexnow';
const payload = {
  host: 'testypal.tecnoypal.com',
  key: '12009ad800434b688a6984596a8d3b44',
  keyLocation: 'https://testypal.tecnoypal.com/12009ad800434b688a6984596a8d3b44.txt',
  urlList: [
    'https://testypal.tecnoypal.com/',
    'https://testypal.tecnoypal.com/oposiciones',
    'https://testypal.tecnoypal.com/blog',
    'https://testypal.tecnoypal.com/contacto'
  ]
};

try {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  console.log(`IndexNow status: ${response.status}`);
  const text = await response.text();
  console.log('Response:', text);
} catch (error) {
  console.error('IndexNow error:', error.message);
}
