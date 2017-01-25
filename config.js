define([], function(){      
    return {
        "icon": "images/jb-icon.jpg",
        "iconSmall": "images/jb-icon.jpg", 
        "key": "xy2vrbie3dzxa2wgah2kcw5niwsg5jim5cxwhk1f3rf5xrbzxghxceozxjewa4hvulo0a3ndk1spj2z1zf3dyc0iea0arjl0e4antqv15fitpi2ii3pfzzddapcjcddvrxenbmgvvz1yrxow3nhywbqxcdbxemhn2zzohv151i4rq3deu21zbjv1wnxgruzpfm1qzhyb2qifp00gabov24ly4si51ngap0fcxfqhlabm5p4jdckrmfb43g4jkss",
        "partnerApiObjectTypeId": "IXN.CustomActivity.REST",
        "lang": {
            "en-US": {        
                "name": "Hello World Activity 2",
                "description": "Activity simply posts the data into an array for display on the App's home page."
            }
        },
        "category": "messaging",
        "version": "1.0",
        "apiVersion": "1.0",
       "execute": {
            "uri": "https://jb-ixn-v1-test.herokuapp.com/ixn/activities/hello-world/execute/",
			"inArguments": [],
			"outArguments": [],
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
		},
        "save": {
            "uri": "https://jb-ixn-v1-test.herokuapp.com/ixn/activities/hello-world/save/",
			"verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "publish": {
            "uri": "https://jb-ixn-v1-test.herokuapp.com/ixn/activities/hello-world/publish/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "validate": {
            "uri": "https://jb-ixn-v1-test.herokuapp.com/ixn/activities/hello-world/validate/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },

        "edit": {
            "uri": "https://jb-ixn-v1-test.herokuapp.com/ixn/activities/hello-world/",
            "height": 400,
            "width": 500
        }
};
});
