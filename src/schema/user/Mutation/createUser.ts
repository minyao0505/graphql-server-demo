import type { MutationResolvers } from "../../../types";

export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
  _parent,
  { input },
  { data },
) => {
  /* Implement Mutation.createUser resolver logic here */
  const result = await data.$users.createUser(input);

  return result;
};
