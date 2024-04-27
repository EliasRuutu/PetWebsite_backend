const Assign = require("../../models/assign");

const updateAssign = async function (req, res) {
  try {
      const {Tag_ID, Assigned_Client} = req.body;
      console.log(Tag_ID, Assigned_Client)
      const updateData = await Assign.findOneAndUpdate({Tag_ID: Tag_ID},{Assigned_Client: Assigned_Client},{ new: true })
      console.log("updateData", updateData)
      if (!updateData){
        return res.status(404).json({ message: "Data not found" });
      }
      
      res.status(200).json(updateData);

  } catch (err) {
    res.status(500).json({message:err.message})
  }
}

module.exports = updateAssign;
