const childDetails = require('../models/childDetails');

const saveNewChild = async (req, res) =>
{
    try 
    {
        let newChild = new childDetails({
            name: "Shruti",
            age: 24
          });
        const child = await newChild.save();
        console.log(child);
    } 
    catch (error) 
    {
        console.log(error)
    }
}