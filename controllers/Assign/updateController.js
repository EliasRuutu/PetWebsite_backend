const Assign = require("../../models/assign");

const updateAssign = async function (req, res) {
  try {
    const {Tag_ID, Assigned_Client, Assigned_Pet} = req.body;
    console.log("👧🧑👨", Tag_ID, "+++", Assigned_Client, "+++", Assigned_Pet)
      const updatedAssignTag = await Assign.findOneAndUpdate({Tag_ID: Tag_ID},{Assigned_Client: Assigned_Client, Assigned_Pet: Assigned_Pet, IsAssigned: true}, { new: true })
      console.log("updatedAssignTag", updatedAssignTag)
      if (!updatedAssignTag){
        return res.status(404).json({ message: "Data not found" });
      }
      
      res.status(200).json({message: "Client assign success!", tagInfo: updatedAssignTag});

  } catch (err) {
    res.status(500).json({message:err.message})
  }
}

module.exports = updateAssign;
