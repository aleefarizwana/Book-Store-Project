const book = require('../model/book');

const getAllBooks = async(req,res,next) => {
    let books;
    try{
        books = await book.find();
    } 
    catch(err)
    {
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:" NO products found"})
    }
    return res.status(200).json({books});
}

const getById=async(req,res,next)=>{
    const bId=req.params.bId;
    let book1;
    try{
        book1 = await book.findById(bId);
    }
    catch(err){
        console.log(err);
    }

    if(!book1){
        return res.status(404).json({message:" NO Book found"})
    }
    return res.status(200).json({book1});

}

const addBook = async(req,res,next) =>{
    const {name,author,description,price,available,image} = req.body;
    let book1;
    try{
        book1 = new book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book1.save();
    }
    catch(err) {
        console.log(err);
    }

    if(!book1){
        return res.status(500).json({message:"Unable to add book"})
    }
    return res.status(201).json({book1});
};

const updateBook = async(req,res,next)=>{
    const bId = req.params.bId;
    const {name,author,description,price,available,image} = req.body;
    let book1;
    try{
        book1 = await book.findByIdAndUpdate(bId,{
            name,
            author,description,
            price,
            available,
            image
        
        });
        book1=await book1.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book1){
        return res.status(404).json({message:"Unable to update book with this id"});
    }
    return res.status(200).json({book1});

};

const deleteBook = async (req,res,next)=>{
    const bId = req.params.bId;
    let book1;
    try{
        book1 = await book.findByIdAndRemove(bId);
    }
    catch(err){
        console.log(err);
    }
    if(!book1){
        return res.status(404).json({message:"Unable to delete book with this id"});
    }
    return res.status(200).json({message:"book deleted successfully"});
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById= getById;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;