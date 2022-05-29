import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const loads = await prisma.fuelLoads.findMany({
          orderBy: {
            createdAt: "desc",
          },
          take: 2,
        });
        res.status(200).json(loads);
      } catch (e) {
        console.error("Error is ", e);
        res
          .status(500)
          .json({ error: "Error while fetching the fuel stations" });
      }
      break;
    case "POST":
      try {
        const { body } = req;
        if (body) {
          const load = await prisma.fuelLoads.create({
            data: {
              orderedPetrol: body.orderedPetrol,
              orderedDiesel: body.orderedDiesel,
              costOfPetrolL: body.costOfPetrolL,
              costOfDieselL: body.costOfDieselL,
              sellingPriceOfPetrol: body.sellingPriceOfPetrol,
              sellingPriceOfDiesel: body.sellingPriceOfDiesel,
              marginOfPetrol: body.marginOfPetrol,
              marginOfDiesel: body.marginOfDiesel,
              orderedOn: body.orderedOn,
              tenantId: "local123",
            },
          });
          res.status(200).json(load);
        }
      } catch (e) {
        console.error("Error is ", e);
        res.status(500).json({ error: "Error while adding new report" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method {method} is not allowed`);
      break;
  }
}