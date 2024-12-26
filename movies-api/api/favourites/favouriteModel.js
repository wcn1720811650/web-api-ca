import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
  username: { type: String, unique: true, required: true },
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movies', default: [] }]
});

export default mongoose.model('Favourite', FavouriteSchema);
