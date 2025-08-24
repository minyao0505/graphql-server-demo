import type { QueryResolvers } from "../../../types";

export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // Demo
  return [{ id: "random", name: "random", contact: "random" }];
};
