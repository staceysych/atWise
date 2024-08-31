import { format } from "date-fns";

export const getFormattedDate = (date: Date) =>
  format(new Date(date), "dd-MM-yyyy");
