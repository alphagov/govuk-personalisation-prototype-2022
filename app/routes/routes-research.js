const express = require('express')
const router = express.Router()
const fs = require('fs-extra') // needed to import the json data
const path = require("path")

// Load JSON data from file ----------------------------------------------------
function loadJSONFromFile(fileName, path = 'app/data/') {
    let jsonFile = fs.readFileSync(path + fileName)
    return JSON.parse(jsonFile) // Return JSON as object
}

// INDEX PAGE (to update when URL changes)
router.get('/index-handover', function (req, res) {

    // calculate number of hub menu links
    let hubmenuamount = req.session.data.hubmenu.length;

    console.log('Menu links total is: ' + hubmenuamount)

    // create some empty arrays that we 'll pass into nunjucts
    let hubmenu = []
    let hubmenutitles = []
    let hubmenuURLs = []
    let hubmenuIDs = []

    // loop though the links and populate the arrays
    for (i = 0; i < hubmenuamount; i++) {
        hubmenu[i] = req.session.data.hubmenu[i]
    }
    for (i = 0; i < hubmenuamount; i++) {
        hubmenutitles[i] = req.session.data.hubmenu[i].title
    }
    for (i = 0; i < hubmenuamount; i++) {
        hubmenuURLs[i] = req.session.data.hubmenu[i].url
    }
    for (i = 0; i < hubmenuamount; i++) {
        hubmenuIDs[i] = req.session.data.hubmenu[i].id
    }

    //return these
    return res.render('index-handover', {
        'hubmenuamount': hubmenuamount,
        'hubmenu': hubmenu,
        'hubmenutitles': hubmenutitles,
        'hubmenuURLs': hubmenuURLs,
        'hubmenuIDs': hubmenuIDs

    })
})

// PEOPLE  
router.get('/people', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.peoplemenu.length;

    let thispage = req.session.data.hubmenu[1].id - 2;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.peoplemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.peoplemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.peoplemenu[i].anchor
    }

    //return these
    return res.render('people/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// PROBLEM  
router.get('/problem', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.problemmenu.length;

    let thispage = req.session.data.hubmenu[0].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.problemmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.problemmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.problemmenu[i].anchor
    }

    //return these
    return res.render('problem/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// DATA
router.get('/data', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.datamenu.length;

    let thispage = req.session.data.hubmenu[2].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.datamenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.datamenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.datamenu[i].anchor
    }

    //return these
    return res.render('data/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// USER RESEARCH
router.get('/user-research', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.hubmenu[1].id;

    // calculate number of in page menu links
    let menusections = req.session.data.userresearchmenu.length;

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let names = []
    let fids = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.userresearchmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.userresearchmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.userresearchmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('user-research/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage
    })
})

// SERVICE USER RESEARCH
router.get('/service-research', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[4].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('service-research/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})


// GLOSSARY
router.get('/glossary', function (req, res) {

    let thispage = req.session.data.hubmenu[5].id;

    let pagemenu = []

    //return these
    return res.render('glossary/index', {
        'pagemenu': pagemenu,
        'thispage': thispage

    })
})

// PROTOTYPES
router.get('/prototypes', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[7].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('prototypes/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// PILLARS
router.get('/pillars', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[10].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('pillars/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// PHASE 3
router.get('/phase-3', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[3].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('phase-3/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// PHASE 3
router.get('/case-study', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[6].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('case-study/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// FEATURES INDEX PAGE
router.get('/features', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // calculate number of in page menu links
    let menusections = req.session.data.featuresmenu.length;

    let thispage = req.session.data.hubmenu[8].id;

    // create some empty arrays that we 'll pass into nunjucts
    let names = []
    let fids = []
    let pagemenu = []
    let featuresmenu = []
    let titles = []
    let anchors = []

    // loop though the features and populate the arrays
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }
    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.featuresmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.featuresmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.featuresmenu[i].anchor
    }

    //return these
    return res.render('features/index', {
        'featuresmenu': featuresmenu,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'pagemenu': pagemenu,
        'titles': titles,
        'anchors': anchors,
        'menusections': menusections,
        'thispage': thispage
    })
})


// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/01', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 1

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let userneeds = req.session.data.rdd.features[index].userneeds
    let value = req.session.data.rdd.features[index].valueservice
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisk = req.session.data.rdd.features[index].showrisk
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].showprototypelink
    let trello = req.session.data.rdd.features[index].trellolink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    console.log('Related features: ' + relatedfeatures)

    return res.render('features/01', {
        'fid': fid,
        'name': name,
        'category': category,
        'features': features,
        'userneeds': userneeds,
        'value': value,
        'showuser': showuser,
        'showservice': showservice,
        'showrisk': showrisk,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'trello': trello,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

module.exports = router
