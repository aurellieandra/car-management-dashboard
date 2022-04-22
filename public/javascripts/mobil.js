btnAll = document.getElementById('btn-all')
btnSmall = document.getElementById('btn-sm')
btnMedium = document.getElementById('btn-md')
btnLarge = document.getElementById('btn-lg')
btnDelete = document.getElementsByClassName('btn-delete')

var allCar = null

getAllCar = () => {
    fetch('/api/cars')
        .then((response) => response.json())
        .then((data) => {
            btnSmall.style = ""
            btnLarge.style = ""
            btnMedium.style = ""

            btnAll.style.backgroundColor = "#AEB7E1"
            btnAll.style.boxShadow = "-1px 0 #0D28A6, 0 1px #0D28A6, 1px 0 #0D28A6, 0 -1px #0D28A6"
            btnAll.style.color = "#0D28A6"

            const body = document.getElementById('kartu')
            body.innerHTML = ''

            for (let i = 0; i < data.data.length; i++) {
                const Car = document.createElement('div')
                // <img src="../images/page-icon/car.png">
                Car.innerHTML = `
                    <div class="card">
                        <img src="../images/page-icon/car.png">
                        <p>${data.data[i].nama}/ ${data.data[i].tipe}</p>
                        <h3>Rp. ${data.data[i].hrg_sewa} / hari</h3>
                        <p>${data.data[i].id}</p>
                        <img src="../images/small/fi_clock.png" class="small-img">
                            Updated at ${data.data[i].updatedAt}
                        </img>
                        <div class="card-btn">
                            <a href="/api/cars/">
                                <div class="btn-delete" id="btn-del">
                                    <img src="../images/small/fi_trash-2.png" class="small-img">
                                        Delete
                                </div>
                            </a>
                            <a href="/edit-car">
                                <div class="btn-edit">
                                    <img src="../images/small/fi_edit.png" class="small-img">
                                        Edit
                                </div>
                            </a>
                        </div>
                    </div>
                `
                body.appendChild(Car)
            }
        })
}

getAllCar()

filterCar = (ukuran) => {
    fetch('/api/cars')
        .then((response) => response.json())
        .then((data) => {
            allCar = data
            let newCar = allCar.data.filter(car => car.ukuran == ukuran)

            const body = document.getElementById('kartu')
            body.innerHTML = ''

            newCar.forEach((data) => {
                const Car = document.createElement('div')

                Car.innerHTML = `
                    <div class="card">
                        <img src="../images/page-icon/car.png">
                        <p>${data.nama}/ ${data.tipe}</p>
                        <h3>Rp. ${data.hrg_sewa} / hari</h3>
                        <p>${data.id}</p>
                        <img src="../images/small/fi_clock.png" class="small-img">
                            Updated at ${data.updatedAt}
                        </img>
                        <div class="card-btn">
                            <a href="/api/cars/">
                                <div class="btn-delete" id="btn-del">
                                    <img src="../images/small/fi_trash-2.png" class="small-img">
                                    Delete
                                </div>
                            </a>
                            <a href="/edit-car">
                                <div class="btn-edit">
                                    <img src="../images/small/fi_edit.png" class="small-img">
                                        Edit
                                </div>
                            </a>
                        </div>
                    </div>
                `
                body.appendChild(Car)
            })
        })
}

deleteCars = (id) => {
    fetch('/api/cars')
        .then((response) => response.json())
        .then((data) => {
            allCar = data

            if (allCar.data.id == id) {
                var valueId = allCar.data.id
                return valueId
            }
        })
}

btnAll.addEventListener('click', (e) => {
    getAllCar()
})

btnSmall.addEventListener('click', (e) => {
    btnAll.style = ""
    btnLarge.style = ""
    btnMedium.style = ""

    btnSmall.style.backgroundColor = "#AEB7E1"
    btnSmall.style.boxShadow = "-1px 0 #0D28A6, 0 1px #0D28A6, 1px 0 #0D28A6, 0 -1px #0D28A6"
    btnSmall.style.color = "#0D28A6"
    filterCar('small')
})

btnMedium.addEventListener('click', (e) => {
    btnAll.style = ""
    btnLarge.style = ""
    btnSmall.style = ""

    btnMedium.style.backgroundColor = "#AEB7E1"
    btnMedium.style.boxShadow = "-1px 0 #0D28A6, 0 1px #0D28A6, 1px 0 #0D28A6, 0 -1px #0D28A6"
    btnMedium.style.color = "#0D28A6"
    filterCar('medium')
})

btnLarge.addEventListener('click', (e) => {
    btnSmall.style = ""
    btnAll.style = ""
    btnMedium.style = ""

    btnLarge.style.backgroundColor = "#AEB7E1"
    btnLarge.style.boxShadow = "-1px 0 #0D28A6, 0 1px #0D28A6, 1px 0 #0D28A6, 0 -1px #0D28A6"
    btnLarge.style.color = "#0D28A6"
    filterCar('large')
})