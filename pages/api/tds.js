import prisma from "../../lib/prisma";
const { Logtail } = require("@logtail/node");
const logtail = new Logtail("dvFUmMGPbwi5Q9zvdqjEEKjT");

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const loads = await prisma.TDSPayments.findMany({
          orderBy: {
            createdAt: "desc",
          },
          take: 2,
        });
        res.status(200).json(loads);
      } catch (e) {
        logtail.error(e);
        console.error("Error is ", e);
        res
          .status(500)
          .json({ error: "Error while fetching TDS Payment details." });
      }
      break;
    case "POST":
      try {
        const { body } = req;
        if (body) {
          const load = await prisma.TDSPayments.create({
            data: {
              amount: body.amount,
              paidOn: body.paidOn,
              paidMonth: body.paidMonth,
              tenantId: "local123",
            },
          });
          res.status(200).json(load);
        }
      } catch (e) {
        logtail.error(e);
        console.error("Error is ", e);
        res.status(500).json({ error: "Error while adding new tds Payment" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method {method} is not allowed`);
      break;
  }
}
