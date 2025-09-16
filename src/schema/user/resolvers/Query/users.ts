import type { QueryResolvers } from "../../../types";

export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _agrs,
  { data },
) => {
  const result = await data.$users.getAll();

  return result;
};
