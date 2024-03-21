import mongoose from "mongoose";
const db = "mongodb+srv://rockydash2003:rocky123@cluster0.iria1u9.mongodb.net/"
export const dbConnection = () => {
mongoose
    .connect(db, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    };

// 

// 
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "CGU_DE_CASE_STUDY",
//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };
