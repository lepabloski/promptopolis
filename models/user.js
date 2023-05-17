import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "El correo ya existe"],
    required: [true, "El email es requerido"],
  },
  username: {
    type: String,
    required: [true, "En nombre de usuario es requerido!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Nombre de usuario no válido, debe contener de 8 a 20 letras alfanuméricas y ser único.",
    ],
  },
  image: {
    type: String,
  },
});
// para evitar pisar un model existente, si  no existe lo crea. singleton again
const User = models.User || model("User", UserSchema);

export default User;
