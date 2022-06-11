export interface LoadDetails {
  orderedPetrol: number;
  orderedDiesel: number;
  costOfPetrolKL: number;
  costOfDieselKL: number;
  sellingPriceOfPetrol: number;
  sellingPriceOfDiesel: number;
  orderedDate: string;
}

export interface CompleteLoadDetails {
  id?: number;
  orderedPetrol: number;
  orderedDiesel: number;
  costOfPetrolL: number;
  costOfDieselL: number;
  sellingPriceOfPetrol: number;
  sellingPriceOfDiesel: number;
  marginOfPetrol: number;
  marginOfDiesel: number;
  totalCost: number;
  orderedOn: Date;
}

export interface TDSPaymentsDTO {
  id?: number;
  amount: number;
  paidOn: string;
  paidMonth: string;
}

export interface TDSPayments {
  id?: number;
  amount: number;
  paidOn: Date;
  paidMonth: string;
}