import Button, { ButtonProps } from '@mui/material/Button';

const CommonButton = ({
  children,
  color,
  disabled,
  size,
  variant,
  sx,
}: ButtonProps) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
