import React from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
};

export const Button = ({ label, variant = "primary" }: ButtonProps) => {
  return <button className={variant}>{label}</button>;
};