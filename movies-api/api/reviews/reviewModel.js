import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
    author: { type: String, required: true },
    author_details: {
        name: { type: String, default: '' },
        username: { type: String, required: true },
        avatar_path: { type: String, default: '' },
        rating: { type: Number, min: 0, max: 10 }
    },
    content: { type: String, required: true },
    url: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});



export default mongoose.model('Reviews', ReviewSchema);


