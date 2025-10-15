const notFoundHandler = (req, res)=> {
    res.status(404).json({
        message: `${req.url} not found`
        
    })
    console.log(req.method) 
    console.log(req.url)
        

};

export default notFoundHandler;