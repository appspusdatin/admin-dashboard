export default function handler(req, res) {
    if (req.method === "POST") {
      const { username, password } = req.body;
      if (username === "admin" && password === "admin") {
        res.status(200).json({ token: "dummy-token" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  