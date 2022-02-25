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
          creator: "John Doe",
          details: "Card 001 Improve performance",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
        },
        {
          id: "card002",
          text: "Migration to material UI",
          creator: "John Doe",
          details: "Card002 Migration to Material UI",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
        },
        {
          id: "card003",
          text: "Fix payment bug",
          creator: "John Doe",
          details: "Card003 Fix payment bug",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
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
          creator: "John Doe",
          details: "HERE ARE THE DETAIL. AIGHT?",
          comments: []
        },
        {
          id: "card102",
          text: "Cart functionality",
          creator: "John Doe",
          details: "HERE ARE THE DETAIL. AIGHT?",
          comments: []
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
          creator: "John Doe",
          details: "HERE ARE THE DETAIL. AIGHT?",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
        },
        {
          id: "card202",
          text: "Admin page and dashboard",
          creator: "John Doe",
          details: "HERE ARE THE DETAIL. AIGHT?",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
        },
        {
          id: "card203",
          text: "Middlewares",
          creator: "John Doe",
          details: "HERE ARE THE DETAIL. AIGHT?",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
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
          creator: "John Doe",
          details: "HERE ARE THE DETAIL. AIGHT?",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
        },
        {
          id: "card302",
          text: "Redux Store (Not updating)",
          creator: "John Doe",
          details: "HERE ARE THE DETAIL. AIGHT?",
          comments: [{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },{
            text: "This is a comment",
            creator: "John Doe",
            creationDate: "2015-02-01"
          },]
        },
      ],
    },
  },
  listsIds: ["list01", "list02", "list03", "list04"],
};
