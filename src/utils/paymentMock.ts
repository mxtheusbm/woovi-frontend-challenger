interface PaymentMethods {
  parcel: number;
  parcelValue: number;
  total: number;
}

export const data = <PaymentMethods[]>[
  {
    parcel: 1,
    parcelValue: 30500,
    total: 30500
  },
  {
    parcel: 2,
    parcelValue: 15300,
    total: 30600
  },
  {
    parcel: 3,
    parcelValue: 10196.66,
    total: 30620
  },
  {
    parcel: 4,
    parcelValue: 7725,
    total: 30900
  },
  {
    parcel: 5,
    parcelValue: 6300,
    total: 31500
  },
  {
    parcel: 6,
    parcelValue: 52883.33,
    total: 31699.98
  },
  {
    parcel: 7,
    parcelValue: 4542.85,
    total: 31800
  },
]