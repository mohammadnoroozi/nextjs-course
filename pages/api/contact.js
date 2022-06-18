import { MongoClient } from "mongodb"


const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, name, message } = req.body;
        console.log(req.body);
        if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
            res.status(422).json({ message: "Invalid input." })
            return
        }

        // store it in a database
        const newMessage = {
            email,
            name,
            message,
        }

        // try {
        //     const client = await MongoClient.connect("mongodb+srv://mohammad:mohammad@cluster0.ehxdk.mongodb.net/blog?retryWrites=true&w=majority")
        //     console.log(client);
        // } catch (err) {
        //     console.log(err);
        // }

        res.status(201).json({ message: "Successfully stored message!", newMessage })

    } else {

    }
}

export default handler