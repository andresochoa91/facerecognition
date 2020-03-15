const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
	client: 'pg',
	connection: {
	    host : '127.0.0.1',
	    user : 'postgres',
	    password : '666',
	    database : 'faceRecognition'
	}
});

db.select('*').from('users').then(data => console.log(data));

const app = express();

app.use(bodyParser.json());
app.use(cors())


const database = {
	users: [
		{
			id: "123",
			name: "John",
			password: "cookie",
			email: "john@gmail.com",
			entries: 0,
			joined: new Date()
		},
		{
			id: "124",
			name: "Sandy",
			password: "bananas",
			email: "sandy@gmail.com",
			entries: 0,
			joined: new Date()
		}

	],
	login: [
		{
			id: "987",
			hash: "",
			email: "john@gmail.com"
		}
	]
}

app.get('/', (req, res) => {
	res.send(database.users);
})

app.post('/signin', (req, res) => {
	bcrypt.compare("cookie", "$2a$10$i7Fn04/9R01yKJ7qhtN.Xe6HH0G20BFSKkvWRPGacTaBOpb6v67sS", function(err, res) {
    	console.log(res);
	});
	bcrypt.compare("veggie", "$2a$10$IijAj2ARTQuTULI.u8Cxv.udtiShiiwP78lFUd8yDwuALcMRZNoPW", function(err, res) {
    	console.log(res);
	});	
	if (req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password) {
		res.json(database.users[0]);
	} else {
		res.status(400).json("error logging in");
	}
})

app.post('/signup', (req, res) => {
	console.log(req.body)
	const { email, name, password } = req.body;
//	bcrypt.hash(password, null, null, function(err, hash) {
//	  console.log(hash);
//	});

	db('users')
		.returning('*')
		.insert({
			name: name,
			email: email,
			joined: new Date()
	})
	.then(user => {
		res.json(user[0]);
	})
	.catch(err => res.status(400).json('unable to sign up'))
})

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	db.select('*').from('users').where({
		id: id
	})
	.then(user => {
		if (user.length) {
			res.json(user[0]);
		} else {
			res.status(400).json("Not found");
		}
	})
	.catch(err => res.status(400).json("Error getting user"))
//	if(!found) {
//		res.status(400).json("not found")
//	}
})

app.put('/image', (req, res) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('unable to get entries'))
})


app.listen((3000), () => {
	console.log("app is running on port 3000")
})

