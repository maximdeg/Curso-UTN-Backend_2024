import Product from "../models/product.model.js";

// class ProductRepository {
//   /**
//    * Retrieves all active products from the database
//    * @returns {Promise<Product[]>} An array of all active products
//    */
//   static async getAll() {
//     return await Product.find({ active: true });
//   }

//   /**
//    * Retrieves a product by its id
//    * @param {string} id - Product identifier
//    * @returns {Promise<Product>} The product with the given id
//    */
//   static async getById(id) {
//     return await Product.findById(id);
//   }

//   /**
//    * Creates a new product in the database
//    * @param {Object} product_data - The data for the new product
//    * @returns {Promise<Product>} The newly created product
//    */
//   static async createProduct(product_data) {
//     const new_product = new Product(product_data);
//     return await new_product.save();
//   }

//   /**
//    * Updates a product in the database with new data
//    * @param {string} id - Product identifier
//    * @param {Object} new_product_data - The new data for the product
//    * @returns {Promise<Product>} The updated product
//    */
//   static async updateProductById(id, new_product_data) {
//     return await Product.findByIdAndUpdate(id, new_product_data, { new: true });
//   }

//   /**
//    * Deletes a product from the database by setting its 'active' property to false
//    * @param {string} id - Product identifier
//    * @returns {Promise<Product>} The product with 'active' set to false
//    */
//   static async deleteProductById(id) {
//     return await Product.findByIdAndUpdate(id, { active: false }, { new: true });
//   }
// }

class ProductRepository {
  static async getAll() {}
}

export default ProductRepository;
