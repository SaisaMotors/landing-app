interface Car {
  id: string;
  productid: string;
  carName: string;
  brand: string | Brand;
  coverImage: string | Media;
  availability?: boolean | null;
  make: string;
  arrivalDate?: string | null;
  engine?: string | null;
  transmission?: string | null;
  interior?: string | null;
  exterior?: string | null;
  fuel?: string | null;
  drive?: string | null;
  bodyStyle: string;
  price: string;
  /**
   * Choose the relevant specifications for this product.
   */
  specifications: (string | Specification)[];
  gallery?: (string | Media)[] | null;
  updatedAt: string;
  createdAt: string;
}
