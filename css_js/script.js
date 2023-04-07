function getData(){
    let name = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let urmsg = document.getElementById("urmsg").value

    //validasi
    if(name == ""){
        return alert("Nama harus Diisi")
    }else if(email == ""){
        return alert("Email harus Diisi")
    }else if(phone == ""){
        return alert("Nomor telepon harus Diisi")
    }else if(subject == ""){
        return alert("Subject harus Dipilih")
    }else if(urmsg == ""){
        return alert("Pesan harus Diisi")
    }

    const kirim = "Fahmihafizprasetyo@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${kirim}?subject=${subject}&body= Hallo nama saya ${name},Email Saya ${email}, (Pesan) ${urmsg}, Hubungi Saya untuk kelanjutannya ${phone}`
    a.click()
}
let ablogs = []
let mulai =document.getElementById("mulai").value
let selesai = document.getElementById("selesai").value

function getBlog(event){
    event.preventDefault()

    let judul =document.getElementById("nproject").value
    let desc = document.getElementById("description").value
    let mulai =document.getElementById("mulai").value
    let selesai = document.getElementById("selesai").value
    let image = document.getElementById("upload").files

    let aimage = URL.createObjectURL(image[0])

        var checkbox = document.getElementsByName("techo");
        var techo = "";
        for(var i = 0; i < checkbox.length; i++){
            if(checkbox[i].checked){
                techo = techo +`<img src="assets/` + checkbox[i].value +`">, `;
            }
        }
    let blog = {
        judul,
        mulai,
        selesai,
        desc,
        techo,
        aimage
    }
    ablogs.push(blog)
    console.log(ablogs)
    conBlog()
}

function conBlog(){
    for(let i=0; i < ablogs.length; i++){
        document.getElementById("area").innerHTML +=`<div class="card1">
        <img src="${ablogs[i].aimage}" alt="">
        <div class="title">${ablogs[i].judul}</div>
        <div class="drs">Durasi : ${ablogs[i].mulai} - ${ablogs[i].selesai}</div>
        <p>${ablogs[i].desc}</p>
        <div class="sembol">
            ${ablogs[i].techo}
        </div>
        <div class="crd-btn">
            <a href="#"><button class="btn-edit">Edit</button></a>
            <a href="#"><button class="btn-del">Delete</button></a>
        </div>
    </div>`
    }
}