export async function fetchQuery<T>(
  url: string,
  transform?: (data: any) => T,
): Promise<T> {
  const res = await fetch(url)

  if (!res.ok) {
    const error: any = new Error("API Error")
    error.status = res.status

    const retryAfter = res.headers.get("Retry-After")
    if (retryAfter) error.retryAfter = Number(retryAfter)

    throw error
  }

  if (transform) {
    const response = await res.json()
    return transform(response)
  }

  return res.json() as T
}
