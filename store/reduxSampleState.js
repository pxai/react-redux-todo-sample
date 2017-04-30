var reduxState = {
    title: 'Workorders App v3.0.1',
    headings: ['Id','Who','When','Description'],
    author: 'Pello Altadill',
    data: [{
        "id" : "1",
        "who": "2",
        "when": "2017-04-10",
        "description": "Installed React"
    },
    {
        "id" : "2",
        "who": "2",
        "when": "2017-04-11",
        "description": "Installed Everything required."
    },
    {
        "id" : "3",
        "who": "2",
        "when": "2017-04-12",
        "description": "Trying all elements"
    },
    {
        "id" : "4",
        "who": "2",
        "when": "2017-04-15",
        "description": "Grabbed from the net"
    }]
};

// We define actions
var action = {
    type: 'ADD_NEW_ORDER',
    defaultDate: '2017-04-30'
}