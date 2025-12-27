import multer from "multer";
import multerStorageCloudinary from "multer-storage-cloudinary";
const { CloudinaryStorage } = multerStorageCloudinary;
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "rabuste",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

export default upload;
