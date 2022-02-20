import mongoose from "mongoose";

export const ConectDb = (YOUR_MONGO_URL) => {
    mongoose.connect(YOUR_MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
        })
        .catch((e) => {
        })
}