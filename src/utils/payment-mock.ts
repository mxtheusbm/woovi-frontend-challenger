export interface Installment {
  number: number;
  value: number;
}

interface TaxID {
  taxID: string;
  type: string;
}

interface Customer {
  name: string;
  email: string;
  phone: string;
  taxID: TaxID;
}

export interface Charge {
  status: string;
  customer: Customer;
  value: number;
  installments: Installment[];
  comment: string;
  correlationID: string;
  paymentLinkID: string;
  paymentLinkUrl: string;
  qrCodeImage: string;
  expiresIn: number;
  expiresDate: string;
  createdAt: string;
  updatedAt: string;
  brCode: string;
}

export const data: Charge = {
  status: 'ACTIVE',
  customer: {
    name: 'Dan',
    email: 'email0@example.com',
    phone: '5511999999999',
    taxID: {
      taxID: '31324227036',
      type: 'BR:CPF'
    }
  },
  value: 30500,
  installments: [
    {
      number: 1,
      value: 30500
    },
    {
      number: 2,
      value: 30600
    },
    {
      number: 3,
      value: 30620
    },
    {
      number: 4,
      value: 30900
    },
    {
      number: 5,
      value: 31500
    },
    {
      number: 6,
      value: 31699.98
    },
    {
      number: 7,
      value: 31800
    }
  ],
  comment: 'good',
  correlationID: '9134e286-6f71-427a-bf00-241681624586',
  paymentLinkID: '7777a23s-6f71-427a-bf00-241681624586',
  paymentLinkUrl: 'https://openpix.com.br/pay/9134e286-6f71-427a-bf00-241681624586',
  qrCodeImage:
    'https://api.openpix.com.br/openpix/charge/brcode/image/9134e286-6f71-427a-bf00-241681624586.png',
  expiresIn: 2592000,
  expiresDate: '2021-04-01T17:28:51.882Z',
  createdAt: '2021-03-02T17:28:51.882Z',
  updatedAt: '2021-03-02T17:28:51.882Z',
  brCode:
    '000201010212261060014br.gov.bcb.pix2584https://api.openpix.com.br/openpix/testing?transactionID=867ba5173c734202ac659721306b38c952040000530398654040.015802BR5909LOCALHOST6009Sao Paulo62360532867ba5173c734202ac659721306b38c963044BCA'
};

// export const data = <PaymentMethod[]>[
//   {
//     parcel: 1,
//     parcelValue: 30500,
//     total: 30500
//   },
//   {
//     parcel: 2,
//     parcelValue: 15300,
//     total: 30600
//   },
//   {
//     parcel: 3,
//     parcelValue: 10196.66,
//     total: 30620
//   },
//   {
//     parcel: 4,
//     parcelValue: 7725,
//     total: 30900
//   },
//   {
//     parcel: 5,
//     parcelValue: 6300,
//     total: 31500
//   },
//   {
//     parcel: 6,
//     parcelValue: 52883.33,
//     total: 31699.98
//   },
//   {
//     parcel: 7,
//     parcelValue: 4542.85,
//     total: 31800
//   },
// ]
