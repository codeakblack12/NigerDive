const functions = require("firebase-functions");
const admin = require('firebase-admin');
const axios = require('axios');
const { GENERIC_DATA } = require("./data/generic-file");
const FormData = require('form-data');
const cors = require('cors')({
    origin: "https://rig.vercel.app",
    credentials: true
});
admin.initializeApp()

// CREATE APIS

exports.create_system = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const systemName = request.body.name

        try {
            let available = true

            const systems = await admin.firestore().collection('systems').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const system = doc.data()
                    console.log(system)
                    if(systemName?.toLowerCase() === system?.name?.toLowerCase() || !systemName || systemName === ""){
                        available = false
                    }
                })
            }).catch(err => {
                throw new Error("Seems something went wrong!")
            })

            if(available){
                const payload = {
                    name: systemName,
                    created_at: new Date().toUTCString()
                }
                const writeResult = await admin.firestore().collection('systems').add(payload);

                if(writeResult.id){
                    response.json({message: `Successful`});
                }else{
                    response.status(400)
                    response.json({message: `Seems something went wrong!`});
                    throw new Error(`Seems something went wrong!`)
                }
            }else{
                response.status(400)
                response.json({message: `System name unavailable!`});
                throw new Error(`Seems something went wrong!`)
            }
        } catch (error) {
            throw new Error(error)
        }
    })
});

exports.create_subfolder = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const subfolderName = request.body.name

        try {
        let available = true

        const subfolders = await admin.firestore().collection('subfolders').get().then(snapshot => {
            snapshot.forEach(doc => {
                const subfolder = doc.data()
                console.log(subfolder)
                if(subfolderName?.toLowerCase() === subfolder?.name?.toLowerCase() || !subfolderName || subfolderName === ""){
                    available = false
                }
            })
        }).catch(err => {
            throw new Error("Seems something went wrong!")
        })

        if(available){
            const payload = {
                name: subfolderName,
                created_at: new Date().toUTCString()
            }
            const writeResult = await admin.firestore().collection('subfolders').add(payload);

            if(writeResult.id){
                response.json({message: `Successful`});
            }else{
                response.status(400)
                response.json({message: `Seems something went wrong!`});
                throw new Error(`Seems something went wrong!`)
            }
        }else{
            response.status(400)
            response.json({message: `Subfolder name unavailable!`});
            throw new Error(`Seems something went wrong!`)
        }
        } catch (error) {
        throw new Error(error)
        }
    })
});

exports.create_folder = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const folderName = request.body.name
        const system_id = request.body.system

        try {
            if(!folderName || !system_id || system_id === "" || folderName === ""){
                response.status(400)
                response.json({message: `Fields missing!`});
                throw new Error(`Seems something went wrong!`)
            }

            let system_available = false
            const systems = await admin.firestore().collection('systems').get().then(snapshot => {
            snapshot.forEach(doc => {
                const system = doc.data()
                if(system_id === system?.id){
                    system_available = true
                }
            })
            }).catch(err => {
            throw new Error("Seems something went wrong!")
            })

            if(!system_available){
                response.status(400).json({message: `Not a valid system!`})
                throw new Error(`Seems something went wrong!`)
            }

            let name_available = true
            const folders = await admin.firestore().collection('folders').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const folder = doc.data()
                    console.log(folder)
                    if(
                        ((folderName?.toLowerCase() === folder?.name?.toLowerCase()) && system_id === folder?.system) ||
                        !folderName || folderName === ""
                    ){
                        name_available = false
                    }
                })
            }).catch(err => {
                throw new Error("Seems something went wrong!")
            })

            if(!name_available || !system_available){
                response.status(400).json({message: `Folder name unavailable!!`});
                throw new Error(`Seems something went wrong!`)
            }else{
                const payload = {
                    name: folderName,
                    created_at: new Date().toUTCString(),
                    system: system_id
                }
                const writeResult = await admin.firestore().collection('folders').add(payload);
                if(writeResult.id){
                    response.json({message: `Successful`});
                }else{
                    response.status(400).json({message: `Seems something went wrong!`});
                    throw new Error(`Seems something went wrong!`)
                }
            }
        } catch (error) {
            throw new Error(error)
        }
    })
});

exports.create_file = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const fileName = request.body.name
        const folder_id = request.body.folder
        const system_id = request.body.system
        const subfolder_id = request.body.subfolder
        const duration = request.body.duration //months
        const requirement = request.body.requirement
        const description = request.body.description
        const url = request.body.url
        const testDate = request.body.test //Date format
        // send dueDate

        try {
            if(!fileName || !system_id || !folder_id || !subfolder_id || system_id === "" || fileName === "" || folder_id === "" || subfolder_id === "" ||
                !duration || !requirement || !description || duration === "" || requirement === "" || description === "" || !url || url === ""
            ){
                response.status(400)
                response.json({message: `Fields missing!`});
                throw new Error(`Seems something went wrong!`)
            }

            if(Number(duration) < 1){
                response.status(400)
                response.json({message: `Invalid duration!`});
                throw new Error(`Seems something went wrong!`)
            }

            let folder_available = false
            let system_available = false
            let subfolder_available = false

            const systems = await admin.firestore().collection('systems').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const system = doc.data()
                    if(system_id === system?.id){
                    system_available = true
                    }
                })
            }).catch(err => {
                throw new Error("Seems something went wrong!")
            })
            const folders = await admin.firestore().collection('folders').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const folder = doc.data()
                    if(folder_id === folder?.id){
                    folder_available = true
                    }
                })
            }).catch(err => {
                throw new Error("Seems something went wrong!")
            })
            const subfolders = await admin.firestore().collection('subfolders').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const subfolder = doc.data()
                    if(subfolder_id === subfolder?.id){
                    subfolder_available = true
                    }
                })
            }).catch(err => {
                throw new Error("Seems something went wrong!")
            })

            if(!system_available || !folder_available || !subfolder_available){
                response.status(400).json({message: `Not a valid ${!system_available ? "system" : (!folder_available ? "folder" : "subfolder")}!`})
                throw new Error(`Seems something went wrong!`)
            }

            let name_available = true
            const files = await admin.firestore().collection('files').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()
                    console.log(file)
                    if(
                        ((fileName?.toLowerCase() === file?.name?.toLowerCase()) && system_id === file?.system && folder_id === file?.folder) ||
                        !fileName || fileName === ""
                    ){
                        name_available = false
                    }
                })
            }).catch(err => {
                throw new Error("Seems something went wrong!")
            })

            if(!name_available){
                response.status(400).json({message: `File name unavailable!!`});
                throw new Error(`Seems something went wrong!`)
            }
            const tesDate = new Date(testDate)
            const tesDate_ = new Date(tesDate)
            const expDate = new Date(tesDate_.setMonth(tesDate_.getMonth() + duration))

            const payload = {
                name: fileName,
                created_at: new Date().toUTCString(),
                test_date: new Date(testDate).toUTCString(),
                due_date: new Date(expDate).toUTCString(),
                folder: folder_id,
                system: system_id,
                subfolder: subfolder_id,
                description: description,
                requirement: requirement,
                duration: Number(duration),
                url: url
            }

            const writeResult = await admin.firestore().collection('files').add(payload);
            if(writeResult.id){
                response.json({message: `Successful`});
            }else{
                response.status(400).json({message: `Seems something went wrong!`});
                throw new Error(`Seems something went wrong!`)
            }

        } catch (error) {
            throw new Error(error)
        }
    })
});

// -----------------------------------------------------------------------------------

// UPDATE

exports.update_file = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const id = request.body.id
        const duration = request.body.duration //months
        const requirement = request.body.requirement
        const description = request.body.description
        const url = request.body.url
        const testDate = request.body.test //Date format
        // send dueDate

        try {
            if(!id || !requirement || !description ||
            requirement === "" || description === "" || !url || url === ""
            ){
                response.status(400)
                response.json({message: `Fields missing!`});
                throw new Error(`Seems something went wrong!`)
            }

            const files = await admin.firestore().collection('files')
            .where(`id`, "==", id)
            .get().then(snapshot => {
                snapshot.forEach(doc => {
                    const tesDate = new Date(testDate)
                    const tesDate_ = new Date(tesDate)
                    let expDate = null
                    if(Number(duration) > 0){
                        expDate = new Date(tesDate_.setMonth(tesDate_.getMonth() + duration))
                    }

                    doc.update({
                        name: description,
                        created_at: new Date().toUTCString(),
                        test_date: new Date(testDate).toUTCString(),
                        due_date: new Date(expDate).toUTCString(),
                        description: description,
                        requirement: requirement,
                        duration: Number(duration),
                        url: url
                    })
                })
            }).catch(err => {
                throw new Error("Seems something went wrong!")
            })

            response.json({message: `Successful`});

        } catch (error) {
            throw new Error(error)
        }
    })
});

// -----------------------------------------------------------------------------------

// GET

exports.get_files_by = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const query_id = request.body.id
        const query = request.body.query

        if(query !== "system" && query !== "folder" && query !== "subfolder"){
            response.status(400).json({message: `Invalid query!`});
            throw new Error(`Seems something went wrong!`)
        }

        let all_files = []
        try {
            const files = await admin.firestore().collection('files').where(`${query}`, "==", query_id).orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()
                    const today = new Date().getTime()
                    const exp_date = new Date(file?.due_date).getTime()
                    const days_left = Math.ceil((exp_date - today)/(1000 * 3600 * 24))
                    file['status'] = days_left > 30 ? ("green") : (days_left < 30 && days_left > 0 ? "yellow" : "red")
                    all_files.push(file)
                })
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            throw new Error(error)
        }

        response.json({data: all_files})
    })
});


exports.get_expired_by_month = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const month = request.body.month
        const year = request.body.year

        let end_month = month
        let end_year = year

        if(month < 1 || month > 12 || !month || !year){
            response.status(400).json({message: `Invalid query!`});
            throw new Error(`Seems something went wrong!`)
        }

        if(month === 12){
            end_month = 01
            end_year = year + 1
        }else{
            end_month = `${month > 9 ? "" : "0"}${month + 1}`
        }

        const start_date = admin.firestore.Timestamp.fromDate(new Date(`${year}-${month > 9 ? month : `0${month}`}-01`))
        const end_date = admin.firestore.Timestamp.fromDate(new Date(`${end_year}-${end_month}-01`))

        let all_files = []
        try {
            const files = await admin.firestore().collection('files')
            .where(`due_date`, ">=", start_date)
            .where(`due_date`, "<", end_date)
            .orderBy('due_date').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()

                    file['due_date'] = file.due_date.toDate()
                    delete file.duration
                    delete file.created_at
                    delete file.description
                    delete file.requirement
                    delete file.url
                    delete file.test_date

                    all_files.push(file)
                })
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            throw new Error(error)
        }

        let all_slots = []
        const slot_days = all_files?.map((val) => {
            return val?.due_date?.getDate()
        })
        const available_days = slot_days.filter((x, i, a) => a.indexOf(x) == i)

        available_days.map((val) => {
            const count_data = all_files.filter((data) => {
                if(data?.due_date?.getDate() === val){
                    return data
                }
            })
            if(count_data.length > 0){
                all_slots.push({
                    day: val,
                    count: count_data.length
                })
            }
        })

        response.json({data: all_slots})
    })
});

exports.get_expired_by_day = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const month = request.body.month
        const year = request.body.year

        let end_month = month
        let end_year = year

        if(month < 1 || month > 12 || !month || !year){
            response.status(400).json({message: `Invalid query!`});
            throw new Error(`Seems something went wrong!`)
        }

        if(month === 12){
            end_month = 01
            end_year = year + 1
        }else{
            end_month = `${month > 9 ? "" : "0"}${month + 1}`
        }

        const start_date = admin.firestore.Timestamp.fromDate(new Date(`${year}-${month > 9 ? month : `0${month}`}-01`))
        const end_date = admin.firestore.Timestamp.fromDate(new Date(`${end_year}-${end_month}-01`))

        let all_files = []
        try {
            const files = await admin.firestore().collection('files')
            .where(`due_date`, ">=", start_date)
            .where(`due_date`, "<", end_date)
            .orderBy('due_date').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()

                    file['due_date'] = file.due_date.toDate()
                    delete file.duration
                    delete file.created_at
                    delete file.description
                    delete file.requirement
                    delete file.url
                    delete file.test_date

                    all_files.push(file)
                })
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            throw new Error(error)
        }

        response.json({data: all_files})
    })
});


exports.get_recent_files = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {

        let all_files = []
        let all_systems = []
        let all_folders = []
        let all_subfolders = []

        try {
            const sys = await admin.firestore().collection('systems').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const system = doc.data()
                    all_systems.push(system)
                })
            })

            const folders = await admin.firestore().collection('folders').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const folder = doc.data()
                    all_folders.push(folder)
                })
            })

            const subfolders = await admin.firestore().collection('subfolders').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const subfolder = doc.data()
                    all_subfolders.push(subfolder)
                })
            })

            const files = await admin.firestore().collection('files').orderBy('created_at').limit(5).get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()
                    all_systems.map((val) => {
                        if(val.id === file.system){
                            file['system_name'] = val.name
                        }
                    })
                    all_folders.map((val) => {
                        if(val.id === file.folder){
                            file['folder_name'] = val.name
                        }
                    })
                    all_subfolders.map((val) => {
                        if(val.id === file.subfolder){
                            file['subfolder_name'] = val.name
                        }
                    })
                    delete file?.requirement
                    delete file?.description
                    delete file?.test_date
                    delete file?.due_date
                    delete file?.url
                    delete file?.duration
                    all_files.push(file)
                })
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }

        response.json({data: all_files})
    })
});


exports.get_systems = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        let all_systems = []
        try {
            const files = await admin.firestore().collection('systems').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const system = doc.data()
                    all_systems.push(system)
                })
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            throw new Error(error)
        }

        response.json({data: all_systems})
    })
});


exports.get_subfolders = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        let all_subfolders = []
        try {
            const files = await admin.firestore().collection('subfolders').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const subfolder = doc.data()
                    all_subfolders.push(subfolder)
                })
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            throw new Error(error)
        }

        response.json({data: all_subfolders})
    })
});


exports.get_folders = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const system_id = request.body.system

        let all_folders = []
        try {
            const files = await admin.firestore().collection('folders').where("system", "==", system_id).orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const folder = doc.data()
                    all_folders.push(folder)
                })
            }).catch(err => {
                throw new Error(err)
            })
        } catch (error) {
            throw new Error(error)
        }

        response.json({data: all_folders})
    })
});

exports.get_folder = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const folder_id = request.body.folder

        let all_subfolders = []
        let all_files = []

        try {
            const subs = await admin.firestore().collection('subfolders').orderBy('name').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const subfolder = doc.data()
                    all_subfolders.push(subfolder)
                })
            }).catch(err => {
                throw new Error(err)
            })

            const files = await admin.firestore().collection('files').where(`folder`, "==", folder_id).orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()
                    all_files.push(file)
                })
            }).catch(err => {
                throw new Error(err)
            })

        } catch (error) {
            throw new Error(error)
        }

        let result = []

        const filter = await all_subfolders?.map(async (val) => {
            let file_arr = all_files?.filter((file) => {
                if(val?.id === file?.subfolder){
                    return file
                }
            })

            if(file_arr?.length > 0){
                result?.push({
                    id: val?.id,
                    subfolder: val?.name,
                    files: file_arr
                })
            }
        })

        response.json({data: result})
    })
});

exports.get_dashboard = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        let all_systems = []
        let all_folders = []
        let all_files = []

        try {
            const sys = await admin.firestore().collection('systems').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const system = doc.data()
                    all_systems.push(system)
                })
            }).catch(err => {
                throw new Error(err)
            })

            const folders = await admin.firestore().collection('folders').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const folder = doc.data()
                    all_folders.push(folder)
                })
            }).catch(err => {
                throw new Error(err)
            })

            const files = await admin.firestore().collection('files').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()
                    all_files.push(file)
                })
            }).catch(err => {
                throw new Error(err)
            })

            let result = []

            const filter = await all_systems?.map(async (val) => {
                let folder_arr = all_folders?.filter((folder) => {
                    if(val?.id === folder?.system){
                        let file_count = 0
                        let file_arr = all_files?.map((file) => {
                            if(file?.folder === folder?.id){
                                file_count = file_count + 1
                            }
                        })
                        let new_folder = folder
                        new_folder["file_count"] = file_count
                        return new_folder
                    }
                })



                if(folder_arr?.length > 0){
                    result?.push({
                        id: val?.id,
                        system: val?.name,
                        folders: folder_arr
                    })
                }
            })

            response.json({data: result})

        } catch (error) {
            throw new Error(error)
        }

        let result = []

        const filter = await all_subfolders?.map(async (val) => {
            let file_arr = all_files?.filter((file) => {
                if(val?.id === file?.subfolder){
                    return file
                }
            })

            if(file_arr?.length > 0){
                result?.push({
                    id: val?.id,
                    subfolder: val?.name,
                    files: file_arr
                })
            }
        })

        response.json({data: result})
    })

});

exports.get_subfolders_by_folder = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const folder_id = request.body.id

        let all_subfolders = []
        let all_files = []

        if(!folder_id || folder_id === ""){
            response.status(400)
            response.json({message: `Fields missing!`});
            throw new Error(`Seems something went wrong!`)
        }

        try {

            const subfolders = await admin.firestore().collection('subfolders').orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const subfolder = doc.data()
                    all_subfolders.push(subfolder)
                })
            }).catch(err => {
                throw new Error(err)
            })

            const files = await admin.firestore().collection('files').where("folder", "==", folder_id).orderBy('created_at').get().then(snapshot => {
                snapshot.forEach(doc => {
                    const file = doc.data()
                    all_files.push(file)
                })
            }).catch(err => {
                throw new Error(err)
            })

            let result = []

            const filter = await all_subfolders?.map(async (val) => {
                const name = val?.name
                let files_ = []
                all_files?.map((val_) => {
                    if(val?.id === val_?.subfolder ){
                        files_?.push(val_)
                    }
                })

                if(files_?.length > 0){
                    const final = {
                        subfolder: name,
                        files: files_
                    }

                    result?.push(final)
                }

            })

            response.json({data: result})

        } catch (error) {
            throw new Error(error)
        }

    })

});

// -----------------------------------------------------------------------------------

// TRIGGERS

exports.attach_system_id = functions.firestore.document('/systems/{documentId}')
    .onCreate(async (snap, context) => {
    //   const original = snap.data().name;
    const id = context.params.documentId
    const folders = [
        "Dive Control", "Twinlock Air Chamber", "Diver Launch and Recovery",
        "Diving Basket", "Wet Bell", "Wet Bell Main Umbilical",
        "Diver Heating System", "Divers' Umbilicals", "Divers' Personal Equipment",
        "Compressors", "HP Air and Gas Storage"
    ]

    for(var i = 0; i < folders.length; i++){
        const payload = {
            name: folders[i],
            created_at: new Date().toUTCString(),
            system: id
        }
        await admin.firestore().collection('folders').add(payload);
    }

    return snap.ref.set({id}, {merge: true});
});

exports.attach_subfolder_id = functions.firestore.document('/subfolders/{documentId}')
    .onCreate((snap, context) => {
    //   const original = snap.data().name;
    const id = context.params.documentId
    return snap.ref.set({id}, {merge: true});
});

exports.attach_folder_id = functions.firestore.document('/folders/{documentId}')
    .onCreate(async (snap, context) => {
    //   const original = snap.data().name;
    const id = context.params.documentId

    let subfolders_ = []

    const subfolders = await admin.firestore().collection('subfolders').get().then(snapshot => {
        snapshot.forEach(doc => {
            const subfolder = doc.data()
            subfolders_.push(subfolder)
        })
    })

    let selected_folder = []

    const file_data = GENERIC_DATA.filter((val) => {
        if(val?.id?.toLowerCase() === snap.data().name.toLowerCase()){
            selected_folder = val.data
        }
    })

    selected_folder.map(async (val) => {
        const tesDate = new Date()
        const tesDate_ = new Date(tesDate)
        let expDate = null
        if(val?.duration && val?.duration !== Infinity){
            expDate = new Date(tesDate_.setMonth(tesDate_.getMonth() + val?.duration))
        }

        const payload = {
            name: val?.name,
            created_at: new Date().toUTCString(),
            folder: id,
            system: snap.data().system,
            description: val?.name,
            requirement: val?.requirement,
            duration: val?.duration,
            url: val?.url,
            test_date: tesDate.toUTCString(),
            due_date: expDate ? expDate.toUTCString() : expDate
        }
        subfolders_.filter((vall) => {
            if(val?.subfolder?.toLowerCase() === vall?.name?.toLowerCase()){
                payload['subfolder'] = vall?.id
            }
        })
        if(payload?.subfolder){
            const writeResult = await admin.firestore().collection('files').add(payload);
        }
    })

    return snap.ref.set({id}, {merge: true});
});

exports.attach_file_id = functions.firestore.document('/files/{documentId}')
    .onCreate((snap, context) => {
    //   const original = snap.data().name;
    const id = context.params.documentId
    return snap.ref.set({id}, {merge: true});
});

exports.pyyr_hook = functions.https.onRequest(async (request, response) => {

	/**
	 * Restric this function to POST request Only
	 * Respond with status code 500 for all GET request
	 */
	if (request.method !== 'POST') response.status(500).end();


	const { body } = request;

    console.log(body)
    const event = body.event
    const data = body.data

    console.log(body)
    console.log(data)
    if (event !== 'payment.successful') {
        response.status(200).end();
    }
    console.log(data?.items)
    console.log(data?.customer_detail)

    const email_ = data?.items
    const customer_email = data?.customer_detail?.email

    const transactionCode = data?.reference

    const formdata = new FormData();
    formdata.append('email', email_ ? email_[0]?.name : customer_email);
    formdata.append('transactionCode', transactionCode);
    formdata.append('status', data.status);

    const res = await axios({
        url: `https://boltspecta.com/posting.php`,
        headers: formdata.getHeaders(),
        method: 'POST',
        data: formdata,
    });

    console.log(res)

    if(res?.status){
        response.status(200).end();
    }else{
        response.status(500).end()
    }

});
