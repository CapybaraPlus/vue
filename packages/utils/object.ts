// judge whether the object has the key
export const hasKey = (obj: Record<string, any>, key: string) => {
  return key in obj
}
