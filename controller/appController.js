export const signup = (req, res) => {
  res.status(201).json({ message: "Signup successful!" });
};

export const getbill = (req, res) => {
  res.status(200).json({ message: "Successfully retrieved bill." });
};
