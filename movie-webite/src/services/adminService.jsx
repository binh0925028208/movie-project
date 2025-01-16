import { categories } from "../utils/constants";

const adminService = {
  updateCategory(updatedCategory) {
    const index = categories.findIndex((cat) => cat.id === updatedCategory.id);
    if (index !== -1) {
      categories[index] = updatedCategory; // Cập nhật category trong mảng
    } else {
      console.error("Không tìm thấy category để cập nhật.");
    }
  },

  deleteCategory(categoryId) {
    const index = categories.findIndex((cat) => cat.id === categoryId);
    if (index !== -1) {
      categories.splice(index, 1); // Xóa category khỏi mảng
    } else {
      console.error("Không tìm thấy category để xóa.");
    }
  },

  createCategory(newCategory) {
    categories.push(newCategory); // Thêm category mới vào mảng
  },

  getCategories() {
    return [...categories]; // Trả về một bản sao của mảng categories
  },

  
};

export default adminService;
