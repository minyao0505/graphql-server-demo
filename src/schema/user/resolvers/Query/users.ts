import type { QueryResolvers } from "./../../../types.generated";
export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  { data },
) => {
  /* Implement Query.users resolver logic here */
  const result = await data.$users.getAll();

  return { result };
};
