import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const fuelStations = await prisma.User.findMany();
        res.status(200).json(fuelStations);
      } catch (e) {
        console.error("Error is ", e);
        res
          .status(500)
          .json({ error: "Error while fetching the fuel stations" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method {method} is not allowed`);
      break;
  }
}
