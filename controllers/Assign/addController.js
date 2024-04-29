const Assign = require("../../models/assign");

const addAssign = async function (req, res) {
  try {
    console.log("🌿🌿🌿", req.body.Tag_ID);
    const newAssign = new Assign({
      Tag_ID: req.body.Tag_ID,
    });

    newAssign
      .save()
      .then((assign) => {
        res.status(200)
           .json({ message: "Assignment added successfully", tagInfo: assign });
      })
      .catch((error) => {
        res.status(500)
           .json({ message: "Failed to add assignment", error: error.message });
      });
  } catch (err) {}
};

module.exports = addAssign;
