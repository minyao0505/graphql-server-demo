import type { MutationResolvers } from "../../../types";

export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // Demo
  return { id: "random", name: "random", contact: "random" };
};
