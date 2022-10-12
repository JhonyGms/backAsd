import { model, Schema, Document } from "mongoose";

export interface IMutant extends Document {
  id: Number;
  name: string;
  heroes_or_villains: boolean;
  city: string;
  liberty: boolean;
  stopped_or_unknown: Boolean;
  type_of_super_power: Number;
}

const mutantSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  heroes_or_villains: {
    type: Boolean,
  },
  city: {
    type: String,
  },
  liberty: {
    type: Boolean,
  },
  stopped_or_unknown: {
    type: Boolean,
  },
  type_of_super_power: {
    type: Number,
  },
});

// mutantSchema.pre<IMutant>("save", function (next) {
//   const mutant = this;
//   if (!mutant.isModified("id")) return next();
// });

export default model<IMutant>("mutant", mutantSchema);
