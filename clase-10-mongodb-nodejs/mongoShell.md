## SHOW DABABASES

    show dbs

## CREATE OR SELECT DATABASE

    use <database>

## CREATE COLLECTION

    db.createCollection("testTable")

## INSERT

    db.testTable.insertOne({"column":"Row 1"})

    db.testTable.insertOne({
        title: "Post Title 1",
        body: "Body of post.",
        category: "News",
        likes: 1,
        tags: ["news", "events"],
        date: Date()
    })

    db.testTable.insertMany(<array_de_insercion>)

## FIND
    FIND EVERYTHING
    db.testTable.find()

    FIND BY CONDITION
    db.testTable.find({name: "Pepe"})
    db.testTable.findOne({name: "Pepe"})

## DELETE
    DELETE ONE
    db.testTable.deleteOne()

    DELETE MANY
    db.testTable.deleteMany()

## UPDATE
    UPDATE ONE
    db.testTable.updateOne({<filter>},{<update>})

    UPDATE MANY
    db.testTable.updateOne({<filter>},{<update>})



## MONGO DB UTN CODES

    use APP_HOMEWORKING_UTN

    db.users.insertOne({
        name: "Pepe",
        email: "pepe@gmail.com",
        rol: "user",
        password: "pepe123",
        phone_number: "+1 234 567 890",
        address: "123 Example Street",
        created_at: new Date()
    })

    db.users.insertMany([
        {
            name: "Pepe",
            email: "pepe@gmail.com",
            rol: "user",
            password: "pepe123",
            phone_number: "+1 234 567 890",
            address: "123 Example Street",
            created_at: new Date()
        },
        {
            name: "Pepe",
            email: "pepe@gmail.com",
            rol: "user",
            password: "pepe123",
            phone_number: "+1 234 567 890",
            address: "123 Example Street",
            created_at: new Date()
        }
    ])
