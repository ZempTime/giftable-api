import casual from 'casual';

const mocks = {
  allGifts: () => new MockList([2,6]),
  Gift: () => ({
    name: casual.title,
    note: casual.description
  }),
}

export default mocks;
