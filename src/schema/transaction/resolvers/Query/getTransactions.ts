import { QueryResolvers } from "../../../types";

export const getTransactions: NonNullable<QueryResolvers["getTransactions"]> = async (
  _parent,
  _agrs,
  { data },
) => {
  const result = await data.$transactions.getAll();

  if (!result) {
    throw new Error("No transaction available");
  }

  return result ;
};
