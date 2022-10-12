import mutants, { IMutant } from "../models/mutants";

export const find = async (): Promise<IMutant[] | undefined> => {
  const entry = await mutants.find();
  return entry;
};

export const findByNameOrCity = async (
  name: string,
  city: string
): Promise<IMutant[] | undefined> => {
  const entry = await mutants.find({
    name,
    city,
  });
  return entry;
};

export const create = async (body: IMutant): Promise<any> => {
  const newMutant = new mutants(body);
  await newMutant.save(function (err, result) {
    if (err) {
      return err;
    } else {
      return result;
    }
  });
};

export const update = async (id: number, body: any): Promise<any> => {
  const mutant = await mutants.updateOne(
    {
      id,
    },
    body
  );
  return mutant;
};

export const addEntry = () => null;
