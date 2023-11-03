declare global {
  interface ObjectConstructor {
    entries<T extends {}>(object: T): ReadonlyArray<Misc.Entry<T>>;
  }
}
