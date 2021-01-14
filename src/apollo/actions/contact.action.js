import { useMutation } from "@apollo/client";
import { NEW_MESSAGE } from "../queries/contact.query";

export const useNewMessage = (options) => useMutation(NEW_MESSAGE, options);
