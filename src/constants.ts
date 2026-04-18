export interface Product {
  id: number;
  name: string;
  material: string;
  price: string;
  image: string;
  description: string;
  category: 'living' | 'bedroom' | 'office' | 'dining';
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Orbit Lounge Chair",
    material: "Brushed Oak & Merino Wool",
    price: "$2,850",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ZI4hJnky5pd6hZGClgAyHRMSn_QVgObBqQj6kDnkVxXAaqhSdLwB_FkRpVdfblkKYMi1HrouJp23xg8kCfGEYfNod1-hZX8eGdYClIV8z2B7iCVw1LLi8rIRQwLvwh-9mCJlZwceQMB7t0BA73wQpBGIRTEQP1FWgogqO_nkcL2OS_kIQiAZnKNF3rCmf6E4duLBvqUMcZ3af2hhaHkdAjG6CGzTQPG2QicI1AlRJfof8qmwnz0YcevByEQ6LH-Vr5azRWq6AwM",
    description: "The Orbit Lounge Chair is a masterpiece of ergonomic sculpture. Carved from sustainably sourced brushed oak, it features a semi-circular backrest that cocoons the sitter in soft, premium Merino wool. Perfect for reading nooks or as a statement piece in a modern living space.",
    category: 'living'
  },
  {
    id: 2,
    name: "Nexus Marble Table",
    material: "Italian Carrara & Matte Steel",
    price: "$4,120",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-HP6g1iR58iuo_BaPgLoW-ioGXJhZKeM4ecdb3mez81ZraV-lCfzM9lqwc_xtjBk0z3qp6YRjOJ5hLEvTMWVZSe56B3g-zwX3l51evXNJYsLsRS-a9omIidQ6yDjswsgzWf-DYK2SHJpy2O5B_0ZDwP6RwHqpzTlT5qSKQtdYXOTsddpYyR0Ya_74PYeHfAuFi7ml2EZTolUilG7NfbtxDbGjSqXY_hKK58GNGEaVnncHO-Ei1hyh5kaXmiCn-H77xNjr-avIKkk",
    description: "Strength meets elegance in the Nexus Marble Table. A single slab of honed Italian Carrara marble rests atop a precision-engineered matte steel frame. Each table is unique, showcasing the natural veining of the stone, making it a functional artwork for your dining room.",
    category: 'dining'
  },
  {
    id: 3,
    name: "Haven Modular Sofa",
    material: "Sustainable Linen Blend",
    price: "$6,400",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCICJhzI6xNzMyN8797XBaao0-ZED8q-kMnJ1zHzUpnvwR8AEGYN7_DBFq4Fkpo4eBdke-zhYLX3OMee_mxly8rYukKkZeG5TKy4JNK9PX1wA2ELYJenbyl0WEUJHl_61SjyWrqHJAeLQ3JLUK9P7kPDdEKdo_qWEECa2hsjbSqmjcD41Ytqe9OSTyJVuFy9y5ph4XKH9lobFet8gBFaWD7UcWZuNYTT0WN__cpd-fdXeCdJquSkOjvw6E7xwfaabuzzXjhb9LX984",
    description: "Adaptable luxury for the evolving home. The Haven Modular Sofa offers endless configurations to suit your space. Wrapped in a durable yet soft sustainable linen blend, it provides a cloud-like seating experience without compromising on structured design.",
    category: 'living'
  },
  {
    id: 4,
    name: "Elysian Work Desk",
    material: "Solid Walnut & Brass Details",
    price: "$1,950",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4bx4JSNBdxQMkFpFKz5tOZxT-aE9hDsjtD_6XLw4gT5dblZqIzU7eNQmlzCWRpSFQyhucnTu3glHjiofBTzLdM5HCFqSCc4wTPPTWeajQmxRCCgUmWHUdseAzZN9i4Z14hfWtnQlQudEBRfDIjqV97y8uo3zk5pqF0qHP5O6V5bg-qVONg_jtEwb8oTRi3gu0Bq9PN0auERruhFN37S0sH61oui-zLo7swfxB_wTUd7ExdRGkwktSxbjh5jMQzWI3JW43ecnHN-M",
    description: "Designed for focus and flow. The Elysian Work Desk features a solid black walnut desktop with subtle hand-finished brass accents. Integrated cable management and a flush-mounted drawer ensure your creative process remains uncluttered and inspired.",
    category: 'office'
  }
];

