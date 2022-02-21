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
          id: "card001",
          text: "Improve performance",
        },
        {
          id: "card002",
          text: "Migration to material UI",
        },
        {
          id: "card003",
          text: "Fix payment bug",
        },
      ],
    },
    list02: {
      id: "list02",
      title: "DOING",
      cards: [
        {
          id: "card101",
          text: "Refactoring functions",
        },
        {
          id: "card102",
          text: "Cart functionality",
        },
      ],
    },
    list03: {
      id: "list03",
      title: "DONE",
      cards: [
        {
          id: "card201",
          text: "Private routing",
        },
        {
          id: "card202",
          text: "Admin page and dashboard",
        },
        {
          id: "card203",
          text: "Middlewares",
        },
      ],
    },
    list04: {
      id: "list04",
      title: "REVIEW",
      cards: [
        {
          id: "card301",
          text: "Emailing service",
        },
        {
          id: "card302",
          text: "Redux Store (Not updating)",
        },
      ],
    },
  },
  listsIds: ["list01", "list03", "list02", "list04"],
};
