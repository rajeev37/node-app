module.exports = {
    usersList: (req, res, next) => {
       res.json([{"name": "user1"}, {"name": "user2"} ]);
    },
}