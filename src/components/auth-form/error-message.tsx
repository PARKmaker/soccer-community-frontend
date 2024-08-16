import { ReactNode } from 'react';

type ErrorMessageProps = {
  children: ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="text-sm text-red-500">{children}</p>;
}
