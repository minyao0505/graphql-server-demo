import type { QueryResolvers } from "../../../types";

export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  { id },
  { data },
) => {
  // Demo 1
  const result = await data.$users.findById({ id });
  return result;
};
