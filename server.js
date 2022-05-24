import http from 'http';
import axios from 'axios'

const PORT = 3000;

async function getForum() {
	try {
		const response = await axios.get(
			'https://www.reddit.com/r/programming.json'
		)
		console.log(response)
    return response;
    
	} catch (error) {
		console.error(error)
	}
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const result = getForum();
  res.end(result);
});

server.listen(PORT, () => {
  console.log(`Server running at PORT:${PORT}/`);
});
