import Spinner from "react-bootstrap/Spinner";

import classes from "./styles.module.css";
import type { SpinnerProps } from "react-bootstrap/Spinner";

type LoaderProps = Partial<SpinnerProps>;

type DefaultSpinnerProps = Pick<SpinnerProps, "variant" | "animation">;

const Loader = ({ variant, animation, ...rest }: LoaderProps): JSX.Element => {
  const DEFAULT_PROPS: DefaultSpinnerProps = {
    animation: "border",
    variant: "primary",
  };

  return (
    <div className={classes["loader-container"]}>
      <Spinner
        {...rest}
        variant={variant || DEFAULT_PROPS.variant}
        animation={animation || DEFAULT_PROPS.animation}
      />
    </div>
  );
};

export default Loader;
