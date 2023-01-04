import { ReactNode } from "react";
import { StyledTable } from "./styles";

interface TableProps {
  children: ReactNode;
}

export function Table({ children }: TableProps) {
  return <StyledTable>{children}</StyledTable>;
}
