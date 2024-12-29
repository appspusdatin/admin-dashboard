export default function handler(req, res) {
    if (req.method === "GET") {
      const users = [
        { id: 1, username: "admin", role: "admin" },
        { id: 2, username: "user1", role: "user" },
      ];
      res.status(200).json(users);
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  