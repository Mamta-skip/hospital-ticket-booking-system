import Ticket from "../models/ticketModels.js";

// Create a new ticket

const createTicket = async (req, res) => {

    try{
        const{department,doctor,name,email,phone,sex,age,date} = req.body;
        console.log(req.body);

        const ticket = new Ticket({
            department,
            name,
            email,
            phone,
            sex,
            age,
            date,
            bloodgroup,
           

    })
    await ticket.save();
    res.status(201).json({message:"Ticket created successfully"});
}
catch(error){
    res.status(500).json({error:error.message});
}
}

export {createTicket};