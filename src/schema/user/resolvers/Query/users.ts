import type { QueryResolvers } from "../../../types";

export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // Demo 1
  return [{ id: "random", name: "random", contact: "random" }];
};
