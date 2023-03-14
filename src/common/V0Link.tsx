import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { V0_BASE_URL } from "../constants";

interface V0LinkProps {
  children?: ReactNode;
  className?: string;
  to: string;
}

export default function V0Link(props: V0LinkProps) {
  return (
    <Link
      to={props.to.startsWith("/") ? `${V0_BASE_URL}${props.to}` : props.to}
      className={props.className}
    >
      {" "}
      {props.children}{" "}
    </Link>
  );
}
