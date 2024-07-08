import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subcribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId, // one to who 'subscriber' is subscribing
        ref: "User"
    }
}, {timeseries: true})


export const Subcription = mongoose.model("Subscription", subscriptionSchema)