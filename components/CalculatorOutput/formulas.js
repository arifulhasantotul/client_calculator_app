export const totalCostCalculate = (necessaryData) => {
  const {
    edition,
    copies,
    pages,
    perPlateCost,
    perRimPageCost,
    perCoverBoardCost,
    totalCoverPrintCost,
    totalBookPrintCost,
    coverLaminationCost,
    coverCrisingCost,
    bookBindingCost,
  } = necessaryData;
  let totalPlates = Math.ceil(pages / 4); // m = (y/4)

  let totalPlateCost = Math.ceil(totalPlates * perPlateCost); // m*w1

  let totalRimOfPapers = Math.ceil((pages * copies) / 8000); // (y*x)/8000

  let totalPaperCost = Math.ceil(totalRimOfPapers * perRimPageCost); // (y*x*z)/8000

  let totalCoverBoards = Math.ceil(copies / 8); // n = x/8

  let totalCoverBoardCost = Math.ceil(totalCoverBoards * perCoverBoardCost); // n*w2

  let totalLaminationCost = Math.ceil(copies * coverLaminationCost);

  let totalCrisingCost = Math.ceil(copies * coverCrisingCost);

  let totalBookBindingCost = Math.ceil(copies * bookBindingCost);

  // formula for total cost
  let totalCost =
    totalPaperCost +
    totalCoverBoardCost +
    totalLaminationCost +
    totalCrisingCost +
    totalBookBindingCost +
    totalCoverPrintCost +
    totalBookPrintCost;

  if (edition === 1) {
    totalCost += totalPlateCost;
  }
  // formula for per piece cost
  let perPieceCost = Math.ceil(totalCost / copies);

  return {
    totalPlates,
    totalPlateCost,
    totalRimOfPapers,
    totalPaperCost,
    totalCoverBoards,
    totalCoverBoardCost,
    totalLaminationCost,
    totalCrisingCost,
    totalBookBindingCost,
    totalCost,
    perPieceCost,
  };
};
