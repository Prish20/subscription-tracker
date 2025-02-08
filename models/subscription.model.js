import mongoose from "mongoose";


/**
 * @typedef {object} Subscription
 * @property {string} name - The name of the subscription. Must be between 3 and 100 characters.
 * @property {number} price - The price of the subscription. Must be between 0 and 1000.
 * @property {string} currency - The currency of the subscription price.  Acceptable values are "USD", "EUR", and "GBP". Defaults to "USD".
 * @property {string} frequency - The frequency of the subscription renewal. Acceptable values are "daily", "weekly", "monthly", and "yearly".
 * @property {string} category - The category of the subscription. Acceptable values are "sports", "news", "entertainment", "lifestyle", "technology", "finance", "politics", and "other".
 * @property {string} paymentMethod - The payment method used for the subscription.
 * @property {string} status - The status of the subscription. Acceptable values are "active", "cancelled", and "expired". Defaults to "active".
 * @property {Date} startDate - The date the subscription started. Must be in the past.
 * @property {Date} renewalDate - The date the subscription renews. Must be after the start date.
 * @property {mongoose.Schema.Types.ObjectId} user - The ID of the user who owns the subscription.  References the User model. Indexed for faster queries.
 * @property {Date} createdAt - The date the subscription was created (timestamped).
 * @property {Date} updatedAt - The date the subscription was last updated (timestamped).
 */
const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subscription Name is required"],
        trim: true,
        minLength: 3,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, "Subscription Price is required"],
        min: [0, "Subscription Price must be greater than 0"],
        max: [1000, "Subscription Price must be less than 1000"],
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP"],
        default: "USD",
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
        type: String,
        enum: ["sports", "news", "entertainment", "lifestyle", "technology", "finance", "politics", "other"],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["active", "cancelled", "expired"],
        default: "active",
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start Date must in the past",
        },
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return value > this.startDate;
            },
            message: "Renewal Date must be after the Start Date",
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },

}, { timestamps: true });



/**
 * @constant {object} renewalPeriods - An object that maps renewal periods to their corresponding number of days.
 * @property {number} daily - The number of days for a daily renewal period (1).
 * @property {number} weekly - The number of days for a weekly renewal period (7).
 * @property {number} monthly - The number of days for a monthly renewal period (30).
 * @property {number} yearly - The number of days for a yearly renewal period (365).
 */
subscriptionSchema.pre("save", function (next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if (this.renewalDate < new Date()) {
        this.status = "expired";
    }
    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
