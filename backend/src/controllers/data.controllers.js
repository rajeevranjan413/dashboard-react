import { Data } from "../models/data.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getDataFromDatabase = async () => {
  try {
    const alldata = await Data.find({});
    console.log(alldata);
    return alldata;
  } catch (err) {
    console.log(err, "Data fatching faild!");
  }
};

const sendData = asyncHandler(async (req, res) => {
  const alldata = await getDataFromDatabase();
  console.log(alldata);

  return res.json(new ApiResponse(200, alldata, "Data sent successfully"));
});

export { sendData };
