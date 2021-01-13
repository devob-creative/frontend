import { useQuery } from "@apollo/client";
import { GET_MODALS } from "../queries/modal.query";

export const useModals = (options) => useQuery(GET_MODALS, options);
