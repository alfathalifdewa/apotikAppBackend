import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    let product = await Product.find();
    res.status(201).json({ product });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

export const postProducts = async (req, res) => {
  const { productName, id_category, golongan, deskripsi, price } = req.body;
  try {
    const newProduct = new Product({
      productName,
      id_category,
      golongan,
      deskripsi,
      price,
    });
    const saveProduct = await newProduct.save();
    res.status(201).json({ saveProduct });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

export const getProductsById = async (req, res) => {
  try {
    let product = await Product.findOne({
      productName: req.params.productName,
    });
    res.status(201).json({ product });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Produk Tidak Ditemukan");
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { productName, id_category, golongan, deskripsi, price } = req.body;

  try {
    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("Produk Tidak Ditemukan");
    }

    product.productName = productName || product.productName;
    product.id_category = id_category || product.id_category;
    product.golongan = golongan || product.golongan;
    product.deskripsi = deskripsi || product.deskripsi;
    product.price = price || product.price;

    const updatedProduct = await product.save();
    res.status(200).json({ updatedProduct });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("Produk Tidak Ditemukan");
    }

    await product.deleteOne();
    res.status(200).send("Produk Berhasil Dihapus");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// export const searchProduct = async (req, res) => {
//   try {
//     const searchTerm = req.body.searchTerm;
//     const searchRegex = new RegExp(searchTerm, "i");

//     await Product.find({
//       $or: [
//         { productName: searchRegex },
//         { category: searchRegex },
//         { golongan: searchRegex },
//       ],
//     })
//       .then((product) => {
//         console.log(product);
//         res.status(200).json({ product: product });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(500).json({ msg: "invalid" });
//       });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send("Produk Tidak Ditemukan");
//   }
// };
