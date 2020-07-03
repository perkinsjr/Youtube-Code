module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            { name: "James", location: "North Carolina" },
            { name: "Georgw", location: "New Jersey" }
        ])
    } else {
        const { name, location } = req.body;

        res.send({ status: "User Created", name, location });
    }
}