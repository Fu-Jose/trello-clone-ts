interface mock {
  lists:any;
  listsIds:Array<string>;
}

export const mockData:mock = {
  lists: {
    list01: {
      id: "list01",
      title: "TO DO",
      cards: [
        {
          id: "card01",
          text: "Improve performance",
        },
        {
          id: "card02",
          text: "Migration to material UI",
        },
        {
          id: "card03",
          text: "Fix payment bug",
        },
      ],
    },
    list02: {
      id: "list02",
      title: "DOING",
      cards: [
        {
          id: "card01",
          text: "Refactoring functions",
        },
        {
          id: "card02",
          text: "Cart functionality",
        },
      ],
    },
    list03: {
      id: "list03",
      title: "DONE",
      cards: [
        {
          id: "card01",
          text: "Private routing",
        },
        {
          id: "card02",
          text: "Admin page and dashboard",
        },
        {
          id: "card03",
          text: "Middlewares",
        },
      ],
    },
    list04: {
      id: "list04",
      title: "REVIEW",
      cards: [
        {
          id: "card01",
          text: "Emailing service",
        },
        {
          id: "card02",
          text: "Redux Store (Not updating)",
        },
      ],
    },
  },
  listsIds: ["list01", "list02", "list03", "list04"],
};
