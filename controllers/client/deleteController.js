const Client = require("../../models/client");
const Pet = require("../../models/pet");
const Assign = require("../../models/assign");

const deleteController = async function (req, res) {
  const deleteID = req.params.id;
  try {
    Client.findOneAndDelete({ Profile_ID: deleteID })
      .catch((err) => {
        return res.status(404).json({ message: "Data not found" });
      });
    
    const petToDelete = await Pet.findOne({ Profile_ID: deleteID });
    if (petToDelete) {
        await Pet.deleteMany({ Profile_ID: deleteID }).catch((error) => {
          return res.status(404).json({ message: "Data not found" });
        });
    }

    const updateAssignFields =  {Assigned_Client: null, Assigned_Pet: null, IsAssigned: false}
    await Assign.updateMany({Assigned_Client:deleteID}, updateAssignFields, { new: true })
    .catch((error) => {
      return res.status(404).json({ message: "Data not found" });
    });

    res.status(200).json({message: "Data deleted!"})

  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteController;
