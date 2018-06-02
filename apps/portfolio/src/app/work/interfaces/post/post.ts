export function randomBlokk(count) {
  let i = 0;
  let blokk = '';
  const addSpace = () => (!(Math.random() >= 0.5) ? '' : ' ');
  while (i < count) {
    blokk = `${blokk}${addSpace()}▄${addSpace()}`;
    ++i;
  }

  return blokk;
}

export function postFactory(
  id,
  header = {
    title: `${randomBlokk(15)}`,
    subtitle: `${randomBlokk(20)}`,
    description: `${randomBlokk(40)}`
  },
  body = { sections: [] },
  footer = [
    {
      title: `${randomBlokk(5)}`,
      subtitle: `${randomBlokk(15)}`,
      description: `${randomBlokk(39)}`
    },
    {
      title: `${randomBlokk(5)}`,
      subtitle: `${randomBlokk(15)}`,
      description: `${randomBlokk(39)}`
    },
    {
      title: `${randomBlokk(5)}`,
      subtitle: `${randomBlokk(15)}`,
      description: `${randomBlokk(39)}`
    }
  ]
) {
  return {
    header: header,
    body: body,
    footer: footer,
    id: id
  };
}
