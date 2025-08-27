const jwt = requre("jsonwebtoken");

const getToken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
  }
};

module.exports = getToken;

