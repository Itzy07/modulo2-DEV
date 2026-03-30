const contactos= [
    {nombre: "Juan Perez", puesto: "Gerente de Ventas", empresa: "Tech Solutions", email: "juan.perez@techsolutions.com", tel: "999234011"},
    {nombre: "María García", puesto: "Diseñadora", empresa: "Creative Studio", email: "maria.garcia@creativestudio.com", tel: "999234012"},
    {nombre: "Carlos López", puesto: "Desarrollador", empresa: "Code Masters", email: "carlos.lopez@codemasters.com", tel: "999234013"}
]

//funcion flecha para generar la tarjeta de presentación
const generarTarjeta= (contacto)=>{
    return `
    _______________________________
     | Nombre: ${contacto.nombre} |
     | Puesto: ${contacto.puesto} |
     | Empresa: ${contacto.empresa} |
     | Correo: ${contacto.email}  |
     | Teléfono: ${contacto.tel}  |
    ___________________    
        `;

}

// Generar tarjetas de presentación para cada contacto
contactos.forEach((contacto) => {
    const tarjeta = generarTarjeta(contacto);
    console.log(tarjeta);
})