export function toUnorderedList(ltext: string): string {
  const lines = ltext.split('\n', 20)
  let buff = ''

  for (const element of lines) {
    buff += `- ${element}\n`
  }

  return buff
}
