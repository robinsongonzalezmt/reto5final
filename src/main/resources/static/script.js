function visualizarCategoria() {
    $.ajax({
        url: '/api/Category/all',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (categoria) {
            let ct = categoria;
            $("#listaCategoria").empty();
            for (i = 0; i < ct.length; i++) {
                $("#listaCategoria").append(ct[i].id + " <b>" + ct[i].name + "</b> " + ct[i].description);
                $("#listaCategoria").append('<button onclick="borrarCategoria(' + ct[i].id + ')">Borrar</button><br>');
                $("#listaCategoria").append('<button onclick="consultarByIdCategory(' + ct[i].id + ')">ver detalle</button><br>');
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}
function guardarCategoria() {

    let name = $("#nameCategoria").val();
    let description = $("#descriptionCategoria").val();



    let data = {


        name: name,
        description: description
    };

    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: '/api/Category/save',//https://144.22.211.103:8080/api/Category/save
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (categoria) {
            $("#idCategoria").val("");
            $("#nameCategoria").val("");
            $("#descriptionCategoria").val("");

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarCategoria();
        }
    });

}
function consultarByIdCategory(id) {
    $.ajax({
        url: '/api/Category/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            if (respuesta.id > 0) {
                llenarDatosCategory(respuesta);
            } else {
                $("#boton").hide();
                alert('No se encuentra la categoria con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatosCategory(item) {

    $("#idCategoria").val(item.id);
    $("#nameCategoria").val(item.name);
    $("#descriptionCategoria").val(item.description);
}


function editarCategoria() {
    let id = $("#idCategoria").val();
    let name = $("#nameCategoria").val();
    let description = $("#descriptionCategoria").val();

    let data = {
        id: id,
        name: name,
        description: description
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: '/api/Category/update', //https://144.22.211.103:8080/api/Category/update
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (categoria) {
            $("#idCategoria").val();
            $("#nameCategoria").val();
            $("#descriptionCategoria").val();

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarCategoria();
        }
    });

}

function borrarCategoria(id) {

    $.ajax({
        url: '/api/Category/' + id,
        type: 'DELETE',

        success: function (categoria) {
            $("#idCategoria").val("");
            $("#nameCategoria").val("");
            $("#descriptionCategoria").val("");
            alert("eliminada")
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarCategoria();
        }
    });

}


function visualizarPalcos() {
    $.ajax({
        url: '/api/Box/all', //https://144.22.211.103:8080/api/Box/all
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (palcos) {
            let ps = palcos;
            $("#listaPalcos").empty();
            for (i = 0; i < ps.length; i++) {
                $("#listaPalcos").append(ps[i].id + " <b>" + ps[i].location + "</b> " + ps[i].capacity + " " + ps[i].name + ps[i].description);
                $("#listaPalcos").append('<button onclick="borrarPalcos(' + ps[i].id + ')">Borrar</button><br>');
                $("#listaPalcos").append('<button onclick="consultarByIdPalco(' + ps[i].id + ')">ver detalle</button><br>');
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function guardarPalcos() {


    let name = $("#name").val();
    let location = $("#location").val();
    let capacity = $("#capacity").val();
    let description = $("#description").val();


    let data = {


        name: name,
        location: location,
        capacity: capacity,
        description: description

    };

    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: '/api/Box/save', //https://144.22.211.103:8080/api/Box/save
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (palcosM) {
            $("#id").val("");
            $("#name").val("");
            $("#location").val("");
            $("#capacity").val("");
            $("#description").val("");

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarPalcos();
        }
    });
}

function consultarByIdPalco(id) {
    $.ajax({
        url: '/api/Box/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            if (respuesta.id > 0) {
                llenarDatosPalcos(respuesta);
            } else {
                $("#boton").hide();
                alert('No se encuentra la categoria con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function llenarDatosPalcos(item) {

    $("#id").val(item.id);
    $("#name").val(item.name);
    $("#location").val(item.location);
    $("#capacity").val(item.capacity);
    $("#description").val(item.description);



}

function editarPalcos() {
    let id = $("#id").val();
    let name = $("#name").val();
    let location = $("#location").val();
    let capacity = $("#capacity").val();
    let description = $("#description").val();

    let data = {
        id: id,
        name: name,
        location: location,
        capacity: capacity,
        description: description
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: '/api/Box/update',  //https://144.22.211.103:8080/api/Box/update',
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (palcosM) {
            $("#id").val("");
            $("#name").val("");
            $("#location").val("");
            $("#capacity").val("");
            $("#description").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarPalcos();
        }
    });

}

function borrarPalcos(id) {

    $.ajax({
        url: '/api/Box/' + id,
        type: 'DELETE',

        success: function (palcosM) {
            $("#id").val("");
            $("#name").val("");
            $("#location").val("");
            $("#capacity").val("");
            $("#description").val("");
            alert("eliminado")
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarPalcos();
        }
    });

}


function visualizarClientes() {
    $.ajax({
        url: '/api/Client/all',
        type: 'GET',
        dataType: 'json',
        success: function (clientes) {
            let cs = clientes;
            $("#listaClientes").empty();
            for (i = 0; i < cs.length; i++) {
                $("#listaClientes").append(cs[i].idClient + " <b>" + cs[i].email + "</b> " + cs[i].password + " " + cs[i].name + " " + cs[i].age);
                $("#listaClientes").append('<button onclick="borrarClientes(' + cs[i].idClient + ')">Borrar</button><br>');
                $("#listaClientes").append('<button onclick="consultarByIdClient(' + cs[i].id + ')">ver detalle</button><br>');
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function guardarClientes() {
    let idClient = $("#idCliente").val();
    let email = $("#emailCliente").val();
    let password = $("#passwordCliente").val();
    let name = $("#nameCliente").val();
    let age = $("#ageCliente").val();

    let data = {

        idClient: idClient,
        email: email,
        password: password,
        name: name,
        age: age
    };

    let dataToSend = JSON.stringify(data);

    $.ajax({
        url: '/api/Client/save', //https://144.22.211.103:8080/api/Client/save
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (clientesp) {
            $("#idCliente").val("");
            $("#emailCliente").val("");
            $("#passwordCliente").val();
            $("#nameCliente").val("");
            $("#ageCliente").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarClientes();
        }
    });


}

function consultarByIdClient(id) {
    $.ajax({
        url: '/api/Client/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            if (respuesta.id > 0) {
                llenarDatosClient(respuesta);
            } else {
                $("#boton").hide();
                alert('No se encuentra la categoria con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function llenarDatosClient(item) {

    $("#idCliente").val(item.idClient);
    $("#emailCliente").val(item.email);
    $("#passwordCliente").val(item.password);
    $("#nameCliente").val(item.name);
    $("#ageCliente").val(item.age);



}

function editarClientes() {

    let idClient = $("#idCliente").val();
    let email = $("#emailCliente").val();
    let password = $("#passwordCliente").val();
    let name = $("#nameCliente").val();
    let age = $("#ageCliente").val();


    let data = {
        idClient: idClient,
        email: email,
        password: password,
        name: name,
        age: age,

    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: '/api/Client/update', //https://144.22.211.103:8080/api/Client/update
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (clientesp) {
            $("#idCliente").val("");
            $("#emailCliente").val("");
            $("#passwordCliente").val();
            $("#nameCliente").val("");
            $("#ageCliente").val("");

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarClientes();
        }
    });

}
function borrarClientes(id) {

    $.ajax({
        url: '/api/Client/' + id, //https://144.22.211.103:8080/api/Client/delete
        type: 'DELETE',

        success: function (clientesp) {
            $("#idCliente").val("");
            $("#emailCliente").val("");
            $("#passwordCliente").val();
            $("#nameCliente").val("");
            $("#ageCliente").val("");
            alert("eliminado")
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarClientes();
        }
    });

}

function visualizarMensajes() {
    $.ajax({
        url: '/api/Message/all', //https://144.22.211.103:8080/api/Message/all
        type: 'GET',
        dataType: 'json',
        success: function (mensajes) {
            let ms = mensajes;
            $("#listaMensajes").empty();
            for (i = 0; i < ms.length; i++) {
                $("#listaMensajes").append(ms[i].idMessage + " <b>" + ms[i].messageText);
                $("#listaMensajes").append('<button onclick="borrarMensajes(' + ms[i].idMessage + ')">Borrar</button><br>');
                $("#listaMensajes").append('<button onclick="consultarByIdMessage(' + ms[i].idMessage + ')">ver detalle</button><br>');
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function guardarMensajes() {
    let idMessage = $("#idMessage").val();
    let messageText = $("#messageText").val();


    let data = {

        idMessage: idMessage,
        messageText: messageText,

    };

    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: '/api/Message/save', //https://144.22.211.103:8080/api/Box/save
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (mensajesc) {
            $("#idMessage").val("");
            $("#messageText").val("");

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarMensajes();
        }
    });


}

function consultarByIdMessage(id) {
    $.ajax({
        url: '/api/Message/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            if (respuesta.id > 0) {
                llenarDatosMessage(respuesta);
            } else {
                $("#boton").hide();
                alert('No se encuentra la categoria con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function llenarDatosMessage(item) {

    $("#idMessage").val(item.idMessage);
    $("#messageText").val(item.messageText);


}

function editarMensajes() {
    let idMessage = $("#idMessage").val();
    let messageText = $("#messageText").val();


    let data = {
        idMessage: idMessage,
        messageText: messageText,

    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: '/api/Message/update', //https://144.22.211.103:8080/api/Message/update
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (mensajesc) {
            $("#idMessage").val("");
            $("#messageText").val("");
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarMensajes();
        }
    });

}

function borrarMensajes(id) {

    $.ajax({
        url: '/api/Message/' + id, //https://144.22.211.103:8080/api/Message/delete
        type: 'DELETE',

        success: function (mensajesc) {
            $("#idMessage").val("");
            $("#messageText").val("");
            alert("eliminado")
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarMensajes();
        }
    });

}

function visualizarReservacion() {
    $.ajax({
        url: '/api/Reservation/all', //https://144.22.211.103:8080/api/Reservation/all
        type: 'GET',
        dataType: 'json',
        success: function (reservacion) {
            let rs = reservacion;
            $("#listaReservacion").empty();
            for (i = 0; i < rs.length; i++) {
                $("#listaReservacion").append(rs[i].idReservation + " <b>" + rs[i].startDate + " " + rs[i].devolutionDate + " " + rs[i].status);
                $("#listaReservacion").append('<button onclick="borrarReservacion(' + rs[i].idReservation + ')">Borrar</button><br>');
                $("#listaReservacion").append('<button onclick="consultarByIdReservation(' + rs[i].idReservation + ')">ver detalle</button><br>');
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function guardarReservacion() {

    let idReservation = $("#idReservation").val();
    let startDate = $("#startDate").val();
    let devolutionDate = $("#devolutionDate").val();
    let status = $("#status").val();



    let data = {

        idReservation: idReservation,
        startDate: startDate,
        devolutionDate: devolutionDate,
        status: status


    };

    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: '/api/Reservation/save',
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (reservacionc) {
            $("#idReservation").val();
            $("#startDate").val();
            $("#devolutionDate").val();
            $("#status").val();

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarReservacion();
        }
    });


}

function consultarByIdReservation(id) {
    $.ajax({
        url: '/api/Reservation/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            if (respuesta.id > 0) {
                llenarDatosReservation(respuesta);
            } else {
                $("#boton").hide();
                alert('No se encuentra la categoria con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatosReservation(item) {

    $("#idReservation").val(item.idReservation);
    $("#startDate").val(item.startDate);
    $("#devolutionDate").val(item.devolutionDate);
    $("#status").val(item.status);
}

function editarReservacion() {

    let idReservation = $("#idReservation").val();
    let startDate = $("#startDate").val();
    let devolutionDate = $("#devolutionDate").val();
    let status = $("#status").val();


    let data = {
        idReservation: idReservation,
        startDate: startDate,
        devolutionDate: devolutionDate,
        status: status

    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: '/api/Reservation/update', //https://144.22.211.103:8080/api/Message/update
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (reservacionc) {
            $("#idReservation").val();
            $("#startDate").val();
            $("#devolutionDate").val();
            $("#status").val();
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarReservacion();
        }
    });

}
function borrarReservacion(id) {

    $.ajax({
        url: '/api/Reservation/' + id, //https://144.22.211.103:8080/api/Reservation/delete
        type: 'DELETE',

        success: function (reservacionc) {
            $("#idReservation").val();
            $("#startDate").val();
            $("#devolutionDate").val();
            $("#status").val();
            alert("eliminada")
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarReservacion();
        }
    });

}
function visualizarScore() {
    $.ajax({
        url: '/api/Score/all', //https://144.22.211.103:8080/api/Score/all
        type: 'GET',
        dataType: 'json',
        success: function (score) {
            let sc = score;
            $("#listaScore").empty();
            for (i = 0; i < sc.length; i++) {
                $("#listaScore").append(sc[i].idScore + " <b>" + sc[i].messageText + "</b> " + sc[i].stars);
                $("#listaScore").append('<button onclick="borrarScore(' + sc[i].idScore + ')">Borrar</button><br>');
                $("#listaScore").append('<button onclick="consultarByIdScore(' + sc[i].idScore + ')">ver detalle</button><br>');
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}
function guardarScore() {

    let idScore = $("#idScore").val();
    let messageText = $("#messageText").val();
    let stars = $("#stars").val();

    let data = {

        idScore: idScore,
        messageText: messageText,
        stars: stars,

    };

    let dataToSend = JSON.stringify(data);

    $.ajax({
        url: '/api/Score/save',
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (scoreb) {
            $("#idScore").val();
            $("#MessageText").val();
            $("#stars").val();


        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarScore();
        }
    });


}

function consultarByIdScore(id) {
    $.ajax({
        url: '/api/Score/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            if (respuesta.id > 0) {
                llenarDatosScore(respuesta);
            } else {
                $("#boton").hide();
                alert('No se encuentra la categoria con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatosScore(item) {

    $("#idScore").val(item.idScore);
    $("#MessageText").val(item.messageText);
    $("#stars").val(item.stars);
}
function editarScore() {

    let idScore = $("#idScore").val();
    let messageText = $("#MessageText").val();
    let stars = $("#stars").val();


    let data = {
        idScore: idScore,
        messageText: messageText,
        stars: stars,

    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: '/api/Score/update', //https://144.22.211.103:8080/api/Score/update
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (scoreb) {
            $("#idScore").val();
            $("#MessageText").val();
            $("#stars").val();

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarScore();
        }
    });

}
function borrarScore(id) {

    $.ajax({
        url: '/api/Score/' + id, //https://144.22.211.103:8080/api/Score/delete
        type: 'DELETE',

        success: function (scoreb) {
            $("#idScore").val();
            $("#MessageText").val();
            $("#stars").val();
            alert("eliminado")
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarScore();
        }
    });
}

function visualizarAdmin() {
    $.ajax({
        url: '/api/Admin/all',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (administradores) {
            let ad = administradores;
            $("#listaAdmin").empty();
            for (i = 0; i < ad.length; i++) {
                $("#listaAdmin").append(ad[i].idAdmin + " <b>" + ad[i].name + "</b> " + ad[i].name + ad[i].email + ad[i].password);
                $("#listaAdmin").append('<button onclick="borrarAdmin(' + ad[i].idAdmin + ')">Borrar</button><br>');
                $("#listaAdmin").append('<button onclick="consultarByIdAdmin(' + ad[i].idAdmin + ')">ver detalle</button><br>');
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}
function guardarAdmin() {

    let idAdmin = $("#idAdmin").val();
    let name = $("#nameAdmin").val();
    let email = $("#emailAdmin").val();
    let password = $("#passwordAdmin").val();




    let data = {


        idAdmin: idAdmin,
        name: name,
        email: email,
        password: password
    };

    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: '/api/Admin/save',
        type: 'POST',
        //dataType: 'json',//
        data: dataToSend,
        contentType: 'application/json',

        success: function (administradoresb) {
            $("#idAdmin").val("");
            $("#nameAdmin").val("");
            $("#emailAdmin").val("");
            $("#passwordAdmin").val();

        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarAdmin();
        }
    });

}
function consultarByIdAdmin(id) {
    $.ajax({
        url: '/api/Admin' + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            if (respuesta.id > 0) {
                llenarDatosAdmin(respuesta);
            } else {
                $("#boton").hide();
                alert('No se encuentra la categoria con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatosAdmin(item) {

    $("#idAdmin").val(item.idAdmin);         
    $("#nameAdmin").val(item.name);         
    $("#emailAdmin").val(item.email);         
    $("#passwordAdmin").val(item.password);
}

function editarAdmin() {
    let idAdmin = $("#idAdmin").val();
    let name = $("#nameAdmin").val();
    let email = $("#emailAdmin").val();
    let password = $("#passwordAdmin").val();


    let data = {

        idAdmin: idAdmin,
        name: name,
        email: email,
        password: password
    };
    let dataToSend = JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url: '/api/Admin/update',  //https://144.22.211.103:8080/api/Box/update',
        type: 'PUT',
        //   dataType : 'json',
        data: dataToSend,
        contentType: 'application/json',
        success: function (administradoresb) {
            $("#idAdmin").val();
            $("#nameAdmin").val();
            $("#emailAdmin").val();
            $("#passwordAdmin").val();
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarAdmin();
        }
    });

}

function borrarAdmin(id) {

    $.ajax({
        url: '/api/Admin/' + id,
        type: 'DELETE',

        success: function (administradoresb) {
            $("#idAdmin").val();
            $("#nameAdmin").val();
            $("#emailAdmin").val();
            $("#passwordAdmin").val();
            alert("eliminado")
        },
        error: function (xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function () {
            visualizarAdmin();
        }
    });

}


