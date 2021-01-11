import { useQuery } from "@apollo/client";
import { GET_SERVICES } from "../queries/service.query";

export const useServices = (options) => useQuery(GET_SERVICES, options);
