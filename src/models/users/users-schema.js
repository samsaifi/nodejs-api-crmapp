

const { boolean } = require("joi");
const { mongoose } = require("mongoose");

const UsersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    slat: { type: String, required: true },
    status: { type: Boolean, default: true }
});

// UsersSchema.pre('save', async function (next) {
//     try {
//         // Hash the password only if it's modified or new
//         if (!this.isModified('password')) {
//             return next();
//         }

//         // Generate a salt
//         const salt = await bcrypt.genSalt(10);

//         // Hash the password using the generated salt
//         const hashedPassword = await bcrypt.hash(this.password, salt);

//         // Replace the plain password with the hashed password
//         this.password = hashedPassword;

//         next();
//     } catch (error) {
//         return next(error);
//     }
// });

module.exports = UsersSchema;