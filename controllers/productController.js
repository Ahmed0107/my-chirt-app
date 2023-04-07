// TODO: menu categories should be added

const getProducts = (req, res) => {
  const products = [
    {
      id: 1,
      title: "Black Turtlenk Top",
      price: 53,
      oldPrice: 60,
      rating: 3.7,
      ratingTitle: "Very Good",
      ratingNum: 49,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/one.png`,
    },

    {
      id: 2,
      title: "Happy new Year Chirt",
      price: 45,
      oldPrice: 50,
      rating: 4.7,
      ratingTitle: "Very Good",
      ratingNum: 35,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/three.png`,
    },

    {
      id: 3,
      title: "Ice Chest Chirt",
      price: 35,
      oldPrice: 40,
      rating: 3.5,
      ratingTitle: "Good",
      ratingNum: 20,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/three.png`,
    },

    {
      id: 4,
      title: "Calculas Rocks Chirt",
      price: 20,
      oldPrice: 25,
      rating: 3.5,
      ratingTitle: "Good",
      ratingNum: 12,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/four.png`,
    },

    {
      id: 5,
      title: "Memes Lover Chirt",
      price: 40,
      oldPrice: 55,
      rating: 4.8,
      ratingTitle: "Very Good",
      ratingNum: 22,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/five.png`,
    },

    {
      id: 6,
      title: "Sadge Chirt",
      price: 30,
      oldPrice: 38,
      rating: 4.5,
      ratingTitle: "Very Good",
      ratingNum: 15,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/six.png`,
    },
  ];
  res.send(products);
};

const getProdById = (req, res) => {
  const { id } = req.params;

  const products = [
    {
      id: 1,
      title: "Black Turtlenk Top",
      price: 53,
      oldPrice: 60,
      rating: 3.7,
      ratingTitle: "Very Good",
      ratingNum: 49,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/one.png`,
    },

    {
      id: 2,
      title: "Happy new Year Chirt",
      price: 45,
      oldPrice: 50,
      rating: 4.7,
      ratingTitle: "Very Good",
      ratingNum: 35,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/three.png`,
    },

    {
      id: 3,
      title: "Ice Chest Chirt",
      price: 35,
      oldPrice: 40,
      rating: 3.5,
      ratingTitle: "Good",
      ratingNum: 20,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/three.png`,
    },

    {
      id: 4,
      title: "Calculas Rocks Chirt",
      price: 20,
      oldPrice: 25,
      rating: 3.5,
      ratingTitle: "Good",
      ratingNum: 12,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/four.png`,
    },

    {
      id: 5,
      title: "Memes Lover Chirt",
      price: 40,
      oldPrice: 55,
      rating: 4.8,
      ratingTitle: "Very Good",
      ratingNum: 22,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/five.png`,
    },

    {
      id: 6,
      title: "Sadge Chirt",
      price: 30,
      oldPrice: 38,
      rating: 4.5,
      ratingTitle: "Very Good",
      ratingNum: 15,
      sizes: ["S", "M", "L", "XL"],
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia tempore,adipisicing elit. Culpa mollitia tempore",
      image: `${req.protocol}://${req.headers.host}/uploads/six.png`,
    },
  ];

  const foundedItem = products.find((item) => item.id == id);
  if (foundedItem) {
    res.send(foundedItem);
  } else {
    res.send({
      message: "no product found with this id",
    });
  }
};

module.exports = {
  getProducts,
  getProdById,
};
