btnAll = document.getElementById('btn-all')
btnSmall = document.getElementById('btn-sm')
btnMedium = document.getElementById('btn-md')
btnLarge = document.getElementById('btn-lg')

var allCar = null

getAllCar = () => {
    btnAll.style.backgroundColor = "#AEB7E1"
    btnAll.style.boxShadow = "-1px 0 #0D28A6, 0 1px #0D28A6, 1px 0 #0D28A6, 0 -1px #0D28A6"
    btnAll.style.color = "#0D28A6"

    fetch('/api/cars')
        .then((response) => response.json())
        .then((data) => {
            const body = document.getElementById('kartu')
            body.innerHTML = ''

            for (let i = 0; i < data.data.length; i++) {
                const Car = document.createElement('div')

                const d = new Date(data.data[i].updatedAt);

                Car.innerHTML = `
                    <div class="card">
                        <img src="../images/page-icon/car.png"></img>

                        <p>${data.data[i].nama} | ${data.data[i].tipe}</p>
                        <h3>Rp. ${data.data[i].hrg_sewa} / hari</h3>

                        <img src="../images/small/fi_clock.png" class="small-img">
                            Updated at ${d}
                        </img>

                        <div class="card-btn">
                            <a href="/delete/${data.data[i].id}">
                                <div class="btn-delete">
                                    <img src="../images/small/fi_trash-2.png" class="small-img">
                                        Delete
                                    </img>  
                                </div>
                            </a>
                            <a href="/edit-car/${data.data[i].id}">
                                <div class="btn-edit">
                                    <img src="../images/small/fi_edit.png" class="small-img">
                                        Edit
                                    </img>
                                </div>
                            </a>
                        </div>
                    </div>
                `
                body.appendChild(Car)
            }
            allCar = data
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

                const d = new Date(data.updatedAt);

                Car.innerHTML = `
                <div class="card">
                    <img src="../images/page-icon/car.png">
                    <p>${data.nama} | ${data.tipe}</p>
                    <h3>Rp. ${data.hrg_sewa} / hari</h3>
                    <img src="../images/small/fi_clock.png" class="small-img">
                        Updated at ${d}
                    </img>
                    <div class="card-btn">
                        <a href="/delete/${data.id}">
                            <div class="btn-delete" id="btn-del">
                                <img src="../images/small/fi_trash-2.png" class="small-img">
                                    Delete
                            </div>
                        </a>
                        <a href="/edit-car/${data.id}">
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

btnAll.addEventListener('click', (e) => {
    btnSmall.style = ""
    btnLarge.style = ""
    btnMedium.style = ""

    btnAll.style.backgroundColor = "#AEB7E1"
    btnAll.style.boxShadow = "-1px 0 #0D28A6, 0 1px #0D28A6, 1px 0 #0D28A6, 0 -1px #0D28A6"
    btnAll.style.color = "#0D28A6"
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