import { BUY_PRODUCT, DELETE_PRODUCT } from "../constants/authConst";

const initialState = {
  products: [
    {
      id: 17440,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002b6315b5c317683ccebb43d36",
      price: 0.04,
      name: "Mãi Mãi Phạm Duy",
      content: "Tôi yêu tiếng nước tôi, từ khi mới ra đời...",
      views: 9,
    },
    {
      id: 17441,
      urlImage:
        "https://i.scdn.co/image/ab67616d00001e029085710299027029d3602e57",
      price: 0.04,
      name: "B RAY x SOFIA & CHÂU ĐĂNG KHOA | THIÊU THÂN",
      content: "Cùng B-ray với sản phẩm mới nhất với thiêu thân...",
      views: 9,
    },
    {
      id: 17442,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
      price: 0.04,
      name: "Hot  hit Vietnam",
      content:
        "Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
      views: 9,
    },
    {
      id: 174423,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
      price: 0.04,
      name: "Hot  hit Vietnam",
      content:
        "Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
      views: 9,
    },
    {
      id: 174421,
      urlImage:
        "https://i.scdn.co/image/ab67706f000000029f3b5872add4527a72e9e0aa",
      price: 0.04,
      name: "Hot  hit Vietnam",
      content:
        "Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
      views: 9,
    },
    {
      id: 17445,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d",
      price: 0.04,
      name: "Hot  hit Vietnam",
      content:
        "Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
      views: 9,
    },
    {
      id: 17448,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002574c9e65a66bbe2707ecbefb",
      price: 0.04,
      name: "Hot  hit Vietnam",
      content:
        "Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
      views: 9,
    },
    {
      id: 1744211,
      urlImage:
        "https://i.scdn.co/image/ab67706f00000002601b8bc3b750aa5bf1313bec",
      price: 0.04,
      name: "Hot  hit Vietnam",
      content:
        "Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Phương Ly",
      views: 9,
    },
  ],
  cart: [],
  currenItem: null,
  message: {},
};

const cartReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case BUY_PRODUCT:
      return {};
    case DELETE_PRODUCT:
      return {};

    default:
      return state;
  }
};

export default cartReducer;
