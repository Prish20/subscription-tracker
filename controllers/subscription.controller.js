import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
    try {
        const existingSubscription = await Subscription.findOne({ user: req.user._id });

        if (existingSubscription) {
            return res.status(400).json({
                success: false,
                message: 'Subscription already exists',
            });
        }

        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        res.status(201).json({
            success: true,
            data: subscription,
        });
    } catch (error) {
        next(error);
    }
};


export const getUserSubscriptions = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error('You are not the owner of this account');
            error.statusCode = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.params.id });

        res.status(200).json({
            success: true,
            data: subscriptions,
        });
    } catch (error) {
        next(error);
    }
};
