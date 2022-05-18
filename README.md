Car Management Dashboard

#   Entity Relationship Diagram

    Table Car {
    id int [pk, increment]
    nama varchar
    tipe varchar
    hrg_sewa char
    ukuran varchar
    foto string
    createdAt timestamp
    updatedAt timestamp
    }

    Table User {
    id int [pk, increment]
    nama varchar
    email email
    pass password
    createdAt timestamp
    updatedAt timestamp
    }

    Table History {
    id int [pk, increment]
    CarId int [ref: > Car.id]
    UserId int [ref: > User.id]
    createdAt timestamp
    updatedAt timestamp
    }

Alerts after successfully adding and updating data hasn't been added yet, 
alongside with the modal that is needed for confirmation before deleting a car data. 