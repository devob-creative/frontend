import { useQuery } from "@apollo/client";
import { GET_SLIDES } from "../queries/slide.query";

export const useSlides = (options) => useQuery(GET_SLIDES, options);