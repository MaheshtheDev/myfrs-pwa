import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { method } = req;

  const sampleData = [
    {
      id: 1,
      orderedPetrol: 1000,
      orderedDiesel: 2000,
      costOfPetrolL: 1.2,
      costOfDieselL: 1.1,
      sellingPriceOfPetrol: 1.5,
      sellingPriceOfDiesel: 1.4,
      marginOfPetrol: 0.3,
      marginOfDiesel: 0.3,
      tenantId: "tenant1",
      orderedOn: new Date(),
      createdAt: new Date(),
      isDeleted: false,
    },
    {
      id: 2,
      orderedPetrol: 1500,
      orderedDiesel: 2500,
      costOfPetrolL: 1.3,
      costOfDieselL: 1.2,
      sellingPriceOfPetrol: 1.6,
      sellingPriceOfDiesel: 1.5,
      marginOfPetrol: 0.3,
      marginOfDiesel: 0.3,
      tenantId: "tenant2",
      orderedOn: new Date("2021-09-01"),
      createdAt: new Date(),
      isDeleted: false,
    },
  ];

  switch (method) {
    case "GET":
      try {
        //const loads = await prisma.FuelLoadDetails.findMany({
        //  orderBy: {
        //    createdAt: "desc",
        //  },
        //  take: 2,
        //});
        //res.status(200).json(loads);

        res.status(200).json(sampleData);
      } catch (e) {
        console.error("Error is ", e);
        res
          .status(500)
          .json({ error: "Error while fetching fuel loads details." });
      }
      break;
    case "POST":
      try {
        const { body } = req;
        let fuelLoadDetails = [];
        if (body) {
          //const load = await prisma.FuelLoadDetails.create({
          //  data: {
          //    orderedPetrol: body.orderedPetrol,
          //    orderedDiesel: body.orderedDiesel,
          //    costOfPetrolL: body.costOfPetrolL,
          //    costOfDieselL: body.costOfDieselL,
          //    sellingPriceOfPetrol: body.sellingPriceOfPetrol,
          //    sellingPriceOfDiesel: body.sellingPriceOfDiesel,
          //    marginOfPetrol: body.marginOfPetrol,
          //    marginOfDiesel: body.marginOfDiesel,
          //    orderedOn: body.orderedOn,
          //    tenantId: "local123",
          //  },
          //});
          //res.status(200).json(load);

          const load = {
            id: Math.floor(Math.random() * 100) + 1,
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
            createdAt: new Date(),
            isDeleted: false,
          };
          fuelLoadDetails.push(load);
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
