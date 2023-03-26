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

  let totalPlateCost = totalPlates * perPlateCost; // m*w1

  let totalRimOfPapers = (pages * copies) / 8000; // (y*x)/8000

  let totalPaperCost = totalRimOfPapers * perRimPageCost; // (y*x*z)/8000

  let totalCoverBoards = Math.ceil(copies / 8); // n = x/8

  let totalCoverBoardCost = totalCoverBoards * perCoverBoardCost; // n*w2

  let totalLaminationCost = copies * coverLaminationCost;

  let totalCrisingCost = copies * coverCrisingCost;

  let totalBookBindingCost = copies * bookBindingCost;

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
  let perPieceCost = totalCost / copies;

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
