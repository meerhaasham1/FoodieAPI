const testUserController= (req , res) =>
    {

        try {
            res.status(200).send('<h1>Hi</h1>')
            
        } catch (error) {
            console.log("error in test APi" , error)
            
        }



};

module.exports = testUserController; 