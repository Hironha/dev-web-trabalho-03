export class ObjectValidator<Obj extends Object> {
  constructor(private obj: Obj) {}

  public compareProps(possibleProps: Array<number | string | symbol>) {
    const objProps = Object.keys(this.obj);

    for (const prop of objProps) {
      if (possibleProps.indexOf(prop) === -1) {
        return false;
      }
    }

    return true;
  }
}
