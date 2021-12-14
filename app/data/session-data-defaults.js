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

    indexlink: "/index-handover",
    maintitle: "X-Gov Services",
    hubmenu: [
        {
            title: "The people",
            url: "/people",
            id: 1
    },
        {
            title: "The problem",
            url: "/problem",
            id: 2
    },
        {
            title: "End user research",
            url: "/user-research",
            id: 4
    },
        {
            title: "Service research",
            url: "/service-research",
            id: 6
    },
        {
            title: "Data",
            url: "/data",
            id: 3
    },
        {
            title: "Features",
            url: "/features",
            id: 5
    },
        {
            title: "The 3 Pillars",
            url: "/pillars",
            id: 7
    },
        {
            title: "Phase 3",
            url: "/phase-3",
            id: 8
    },
        {
            title: "Glossary",
            url: "/glossary",
            id: 9
    },
        {
            title: "Case study",
            url: "/case-study",
            id: 10
    },
        {
            title: "Prototypes",
            url: "/prototypes",
            id: 11
    }
             ],
    problemmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "The scope",
            anchor: "scope",
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
    datamenu: [
        {
            title: "Objective",
            anchor: "objective",
    },
        {
            title: "Findings",
            anchor: "findings",
    },
        {
            title: "Workshops",
            anchor: "workshops",
    },
        {
            title: "Gap analysis",
            anchor: "gapanalysis",
    },
        {
            title: "Recommendations",
            anchor: "recommendations",
    },
        {
            title: "Data dictionary",
            anchor: "dictionary",
    },
        {
            title: "Data model",
            anchor: "model",
    }
    ],
    userresearchmenu: [
        {
            title: "Objective",
            anchor: "objective",
    },
        {
            title: "Approach",
            anchor: "approach",
    },
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "User needs",
            anchor: "needs",
    }
    ],
    serviceresearchmenu: [
        {
            title: "Objective",
            anchor: "objective",
    },
        {
            title: "Methodology",
            anchor: "methodology",
    },
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "User needs",
            anchor: "needs",
    }
    ],
    featuresmenu: [
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "List of all features",
            anchor: "featurelist",
    }
    ],
    prototypemenu: [

    ],
    /* need to convert these features into arrays */
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
        "15": "Auto-transactions",
        "16": "Derived data",
        "17": "Audit trail / activity log",
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
        "29": "Service data used to personalise content",
        "33": "Store card and manage recurring payment"
    },
    needs: {
        needlabel1: 'Get everything I’m eligible for',
        needlabel2: 'Avoid the stress of paperwork and admin',
        needlabel3: 'Avoid the burden of supplying proof',
        needlabel4: 'Save time',
        needlabel5: 'Avoid phoning the service',
        needlabel6: 'Feel safe and secure online',
        needlabel7: 'Feel confident in the way my data is being used'
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
    glossary: {
        Banana: 'Definition goes here',
        Apple: 'Definition goes here',
        Cherry: 'Definition goes here',
        Kiwi: 'Definition goes here',
        Orange: 'Definition goes here',
        Pear: 'Definition goes here'
    }

}
