export interface button {
  label?: string;
  name: string;
  type?: string;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  action?: () => void;
}
