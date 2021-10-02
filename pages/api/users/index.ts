const createUser = () => {};

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log("GET");
    res.status(200).json({ status: "success" });
    // Process a POST request
  } else {
    console.log("POST");
    // Handle any other HTTP method
  }
}
