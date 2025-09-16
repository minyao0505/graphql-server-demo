import type { QueryResolvers } from "../../../types";

export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // Demo 1
  return { id: "random", name: "random", contact: "random" };
};
