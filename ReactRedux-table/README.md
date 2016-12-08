Base off of: https://github.com/tstringer/create-react-app-with-redux

Define the State Shape

```
{
  fetchedPeople: {
    isFetching: false,          // For showing a spinner
    lastUpdated: 1439478405547, // time which the API was called
    people: [
      {
        id: 1,
        name: 'ed1 wang1',
        phone: '911'
      },
      {
        id: 2,
        name: 'ed2 wang2',
        phone: '301'
      },
      {
        id: 3,
        name: 'ed2 wang2',
        phone: '101'
      }
    ]
  }
}
```

TODO: Normalize data

So users can edit people outside of a API Call.

```
{
  people: {
    1: {
      id: 1,
      name: 'ed1 wang1',
      phone: '911'
    },
    2: {
      id: 2,
      name: 'ed2 wang2',
      phone: '301'
    },
    3: {
      id: 3,
      name: 'ed2 wang2',
      phone: '101'
    }
  },
  fetchedPeople: {
    isFetching: false,          // For showing a spinner
    lastUpdated: 1439478405547, // time which the API was called
    peopleIds: [ 1, 2, 3 ]      // Ids corresponding to the people's object (Think database ids)
  }
}
```
