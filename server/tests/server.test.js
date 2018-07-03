const expect = require('expect');
const request = require('supertest');

const{app} = require('./../server');
const{Todo} = require('./../models/todo');


//lets us run some code before any test case, we're gonna use it to set up the db in a way that's useful
//in this way our db will be empty before any test case and our assumption down there will not fail
beforeEach((done) => {
    Todo.remove({}).then(() => done())
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err, res) => {
                if(err) {
                    return done(err)
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done())
            })

    })
    it('should not create todo with invalid data', (done) => {
        

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err) {
                    return done(err)
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done())
            })
    })
});