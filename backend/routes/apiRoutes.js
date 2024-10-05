import express from 'express';
const router = express.Router();
import { Book } from '../db/models/bookModel.js';

// get all books from Book collection
router.get('/books', async (req, res) => {
    try {
        const allBooks = await Book.find({});
        return res.send({
            count: allBooks.length,
            data: allBooks
        });
    } catch (err) {
        console.log(err.message);
        return res.send({ message: err.message });
    }
})

// add a book in Book collection
router.post('/add', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            res.status(400).send({
                message: "Required parameters title, author, publishYear",
            })
        }
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        })
        return res.status(201).send(newBook);
    } catch (error) {
        console.log(err.message);
        res.status(500).send({ message: err.message })
    }
})

// find book by id
router.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fetchedBook = await Book.findById(id);
        return res.status(200).send({
            "book": fetchedBook
        })
    } catch (error) {
        console.log(error.message);
        return res.status(404).send(error.message);
    }
})

// delete the book by using id
router.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({
            message: "book deleted successfully",
            "deleted book": deletedBook

        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
})

// update a prexisting book
router.put('/books/:id', async (req, res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).send({
                message:"Send all the required  parameters like title, author, publishYear"
            });
        }
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body);
        if(!updatedBook){
            res.status(404).send({
                message:`Book named ${req.body.title} not found`
            });
        }
        return res.status(200).send({message:"Book updated successefuly"});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

export default router;