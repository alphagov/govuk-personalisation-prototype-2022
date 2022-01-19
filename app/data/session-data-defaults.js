/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

    indexlink: "/index",
    maintitle: "X-Gov Services",
    highlight: "Key insight(s)",
    example: "Research example(s)",
    hubmenu: [
        {
            title: "The problem",
            url: "/problem",
            id: 2
    },
        {
            title: "End users",
            url: "/user-research",
            id: 3
    },
        {
            title: "Services",
            url: "/service-research",
            id: 4
    },
        {
            title: "Data",
            url: "/data",
            id: 5
    },
        {
            title: "Features",
            url: "/features",
            id: 6
    },
        {
            title: "Recommendations",
            url: "/recommendations",
            id: 7
    },
        {
            title: "The Pillars",
            url: "/pillars",
            id: 8
    },
        {
            title: "Glossary",
            url: "/glossary",
            id: 10
    },
        {
            title: "The people",
            url: "/people",
            id: 1
    },
        {
            title: "Prototypes",
            url: "/prototypes",
            id: 9
    }
             ],
    problemmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "The objective",
            anchor: "task",
    },
        {
            title: "The approach",
            anchor: "approach",
    }
    ],
    peoplemenu: [
        {
            title: "The team",
            anchor: "team",
    },
        {
            title: "Key stakeholders",
            anchor: "stakeholders",
    },
        {
            title: "Other teams",
            anchor: "contacts",
    },
        {
            title: "Ways of working",
            anchor: "ways-of-working",
    }
    ],
    userresearchmenu: [
        {
            title: "Approach",
            anchor: "approach",
    },
        {
            title: "Insights",
            anchor: "insights",
    }
    ],
    userapproachmenu: [
        {
            title: "Assumptions",
            anchor: "assumptions",
    },
        {
            title: "Life event",
            anchor: "life-event",
    },
        {
            title: "Testing",
            anchor: "testing",
    },
        {
            title: "Gathering insights",
            anchor: "gathering-insights",
    }
    ],
    usersummarymenu: [
        {
            title: "Rationale",
            anchor: "rationale"
},
        {
            title: "Approach",
            anchor: "approach"
        },
        {
            title: "Insights",
            anchor: "insights"
        }
    ],
    userinsightsmenu: [
        {
            title: "Users identified various benefits of the GOV.UK account and the concept of X-GOV journeys",
            anchor: "insight-1"
        },
        {
            title: "Not everyone will perceive the GOV.UK account as valuable or useful",
            anchor: "insight-2"
        },
        {
            title: "Users hold a variety of assumptions about how their data is used by the government",
            anchor: "insight-3"
        },
        {
            title: "Users hold a variety of assumptions about how their data is shared by the government",
            anchor: "insight-4"
        },
        {
            title: "Users appreciate the ability to control and manage their data",
            anchor: "insight-5"
        },
        {
            title: "Users read personalised content as accurate to them",
            anchor: "insight-6"
        },
        {
            title: "Users’ descriptions of the GOV.UK account in their own words",
            anchor: "insight-7"
        },
        {
            title: "Users don’t care how their data is stored, as long as it is secure",
            anchor: "insight-8"
        },
        {
            title: "Users expect the government’s online services to be secure",
            anchor: "insight-9"
        },
        {
            title: "Automated transactions create a sense of nervousness for some users ",
            anchor: "insight-10"
        },
        {
            title: "Users expect a way of getting in touch if they have an issue with their account",
            anchor: "insight-11"
        }
    ],
    userneedsmenu: [
        {
            title: "Identified user needs",
            anchor: "user-needs"
        },
        {
            title: "How our ‘life event’ relates to user needs",
            anchor: "life-event"
        },
        {
            title: "Background",
            anchor: "background"
        }
    ],
    userrecommendationsmenu: [
        {
            title: "Clarity and transparency",
            anchor: "recommendation-1"
        },
        {
            title: "Control and consent",
            anchor: "recommendation-2"
        },
        {
            title: "UI considerations",
            anchor: "recommendation-3"
        },
        {
            title: "Impact on services",
            anchor: "recommendation-4"
        },
        {
            title: "Understand the needs of citizen users ",
            anchor: "recommendation-5"
        },
        {
            title: "Do user research to understand how users could potentially use features",
            anchor: "recommendation-6"
        },
        {
            title: "Create a secure service which protects users’ privacy",
            anchor: "recommendation-7"
        },
        {
            title: "Listen to the way users describe things in their own words",
            anchor: "recommendation-8"
        }
    ],
    serviceresearchmenu: [
        {
            title: "Approach",
            anchor: "approach",
    },
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "Insights",
            anchor: "insights",
    }
    ],
    serviceapproachmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "Round 1",
            anchor: "round-1",
    },
        {
            title: "Round 2",
            anchor: "round-2",
    },
        {
            title: "Challenges & limitations",
            anchor: "limitations",
    }
    ],
    servicesummarymenu: [
        {
            title: "Rationale",
            anchor: "rationale"
},
        {
            title: "Approach",
            anchor: "approach"
        },
        {
            title: "Insights",
            anchor: "insights"
        }
    ],
    serviceinsightsmenu: [
        {
            title: "Services only share limited data outside of their own government departments",
            anchor: "insight-1",
    },
        {
            title: "Many services use third party data with a high reliance on manual processes ",
            anchor: "insight-2",
    },
        {
            title: "Services are transforming at different rates which creates compatibility issues",
            anchor: "insight-3",
    },
        {
            title: "Services expect to benefit from sharing data across X-Gov in a number of ways",
            anchor: "insight-4",
    },
        {
            title: "Data assurance standards and current legislation are fundamental service concerns",
            anchor: "insight-5",
    },
        {
            title: "Existing roadmaps and resource commitment creates competing priorities with the GOV.UK account integration",
            anchor: "insight-6",
    },
        {
            title: "Services expect that a level playing field will be created, with all available data on the table",
            anchor: "insight-7",
    },
        {
            title: "Services identified joining up systems and back office processes as key challenges",
            anchor: "insight-8",
    },
        {
            title: "Services see the hypothetical account features as either “core or value added”",
            anchor: "insight-9",
    },
        {
            title: "Service users expect to be clear about the operating model and support mechanism for end users",
            anchor: "insight-10",
    },
        {
            title: "User adoption and user reactions are key considerations",
            anchor: "insight-11",
    },
        {
            title: "Services identified that not all data should be available for re-use within the GOV account",
            anchor: "insight-12",
    },
        {
            title: "Services believe that individual control of data is essential",
            anchor: "insight-13",
    }
    ],
    datamenu: [
        {
            title: "Approach",
            anchor: "approach",
    },
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "Insights",
            anchor: "insights",
    }
    ],
    dataapproachmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "Workshops",
            anchor: "workshops",
    },
        {
            title: "Data dictionary",
            anchor: "data-dictionary",
    },
        {
            title: "Challenges",
            anchor: "challenges",
    }
    ],
    datasummarymenu: [
        {
            title: "Background",
            anchor: "background"
},
        {
            title: "Digital Transformation Journey",
            anchor: "transformation"
},
        {
            title: "Capabilities",
            anchor: "capabilities"
}
    ],
    datasurveymenu: [
        {
            title: "Objective",
            anchor: "Objective",
    },
        {
            title: "Participants",
            anchor: "Participants",
    },
        {
            title: "Analysis",
            anchor: "Analysis",
    },
        {
            title: "Themes",
            anchor: "Themes",
    },
        {
            title: "Limitations of the research",
            anchor: "Limitations",
    },
        {
            title: "Areas for further exploration",
            anchor: "Exploration",
    }
            ],
    datainsightsmenu: [
        {
            title: "There are four key capabilities needed for services to support the features we’ve tested",
            anchor: "insight-1",
        },
        {
            title: "Most of the services we spoke to are either planning, supporting or currently undergoing a digital transformation",
            anchor: "insight-2",
    },
        {
            title: "GOV.UK account features may support and improve services business processes",
            anchor: "insight-3",
    },
        {
            title: "Services will have needs that GOV.UK account features can’t meet",
            anchor: "insight--4",
    },
        {
            title: "Services generally need the same information from their users",
            anchor: "insight--5",
    },
        {
            title: "Services vary significantly in how they receive and record information from their users",
            anchor: "insight--6",
    }
    ],
    featuresmenu: [
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "The features",
            anchor: "featurelist",
    }
    ],
    recommendationsmenu: [
        {
            title: "End user recommendations",
            anchor: "end-user-recommendations",
    },
        {
            title: "Service user recommendations",
            anchor: "service-user-recommendations",
    },
        {
            title: "Data recommendations",
            anchor: "data-recommendations",
    }
    ],
    pillarsmenu: [
        {
            title: "Summary",
            anchor: "summary",
    }
    ],
    phase3menu: [
        {
            title: "Communicate recommendations for prioritised features to relevant teams",
            anchor: "objective-1",
        },
        {
            title: "Recommend an approach for implementing the prioritised features",
            anchor: "objective-2",
    },
        {
            title: "Knowledge sharing across teams within the wider programme",
            anchor: "objective-3",
    }
    ],
    prototypemenu: [

    ],
    features: {
        "01": "Suggested eligibility",
        "02": "Service recommendations",
        "03": "Dashboard",
        "04": "Curated content",
        "05": "Legacy data",
        "06": "Trusted data",
        "07": "Notifications",
        "08": "Global push",
        "09": "Profile completion",
        "10": "Global consent & personalisation permissions",
        "11": "Delete your data",
        "12": "External data",
        "13": "Consent management",
        "14": "Edit details in a service journey",
        "15": "Autofill",
        "16": "Derived data",
        "17": "Audit trail",
        "18": "Saved documents",
        "19": "Fixed vs editable data",
        "20": "Shared information",
        "21": "Management of data items",
        "22": "Personalised navigation",
        "23": "Progress indication",
        "24": "Reminders",
        "25": "Uses of data",
        "26": "Data naming conventions",
        "27": "Forecasting",
        "28": "GOV.UK preferences used for services",
        "29": "Account flags",
        "30": "Store card and manage recurring payment"
    },
    needs: {
        needlabel1: 'Get everything I’m eligible for',
        needlabel2: 'Reduce the stress of paperwork and admin',
        needlabel3: 'Reduce the burden of supplying proof',
        needlabel4: 'Save time',
        needlabel5: 'Avoid phoning the service',
        needlabel6: 'Feel safe and secure online',
        needlabel7: 'Feel confident in the way my data is being used',
        needlabel8: 'Reduce cognitive load',
        needlabel9: 'Find what I need easily'
    },
    objectives: {
        objective1: 'Identify user benefits, expectations and challenges of a personalised experience across government, via the GOV.UK account',
        objective2: 'Identify service benefits, expectations and challenges of sharing data across government, via the GOV.UK account',
        objective3: 'Identify the gaps in current service journeys when processing data within application',
        objective4: 'Create an indicative data model that enables data sharing across government services, via the GOV.UK account',
        objective5: 'Identify considerations and assumptions around legislation, data sharing MOUs, SLAs and Governance',
        objective6: 'Identify gaps in technical architecture within services'
    },
    valuetoservice: {
        valuetoservicelabel1: 'Not valuable',
        valuetoservicelabel2: 'Indifferent',
        valuetoservicelabel3: 'Somewhat valuable',
        valuetoservicelabel4: 'Valuable'
    },
    riskcategory: {
        risklabel1: 'Impact on service',
        risklabel2: 'User impact/acceptance',
        risklabel3: 'Accuracy of data',
        risklabel4: 'Liability',
        risklabel5: 'Security/fraud',
        risklabel6: 'Sensitivity of data',
    },
    glossary: {
        Banana: 'Definition goes here',
        Apple: 'Definition goes here',
        Cherry: 'Definition goes here',
        Kiwi: 'Definition goes here',
        Orange: 'Definition goes here',
        Pear: 'Definition goes here'
    }

}
