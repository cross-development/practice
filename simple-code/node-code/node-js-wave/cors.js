//Custom CORS
// app.use((req, res, next) => {
// 	res.set('Access-Control-Allow-Origin', '*');
// 	next();
// });

// app.options('*', (req, res) => {
// 	res.set('Access-Control-Allow-Methods', req.method);
// 	res.set('Access-Control-Allow-Header', JSON.stringify(req.headers));
// 	res.send();
// });