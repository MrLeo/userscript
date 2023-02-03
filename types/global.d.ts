// why this? https://stackoverflow.com/a/47736563/5461916
// we must force tsc to interpret this file as a module, resolves
// "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."
// error
export {}

declare global {
  type PromiseType<T> = (args: any[]) => Promise<T>

  type UnPromisify<T> = T extends PromiseType<infer U> ? U : any
}
